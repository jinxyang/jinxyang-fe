import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Container } from '@jinxyang/components'
import { useMediaQuery } from '@jinxyang/hooks'

import Account from 'components/Account'
import Navigation from './Navigation'
import routes from './routes'

const Layout = () => {
  const isFlex = useMediaQuery('(min-width: 768px)')

  return (
    <Container
      mode={isFlex ? 'flex' : 'static'}
      scrollY={!isFlex}
      style={{ padding: 'var(--gap)' }}
    >
      <Container.Item flex="0 0 auto">
        <Container mode="flex" column={true}>
          <Container.Item flex="0 0 auto">
            <Account />
          </Container.Item>
          <Container.Item scrollY={true}>
            <Navigation list={routes.filter((r) => !r.disabled)} />
          </Container.Item>
        </Container>
      </Container.Item>
      <Container.Item style={{ paddingTop: isFlex ? 0 : 'var(--gap)' }}>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {routes
              .map((r) => r.children ?? r)
              .flat()
              .filter((r) => !r.disabled)
              .map(({ name, path, component, exact }) => (
                <Route
                  path={path}
                  component={component}
                  exact={!!exact}
                  key={name}
                />
              ))}
          </Switch>
        </Suspense>
      </Container.Item>
    </Container>
  )
}

export default Layout
