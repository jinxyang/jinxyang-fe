import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { Root } from '@jinxyang/components'

import { AppProvider } from 'contexts'
import { Layout } from './layout'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <ConfigProvider>
      <Root>
        <AppProvider>
          <Router>
            <Layout />
          </Router>
        </AppProvider>
      </Root>
    </ConfigProvider>
  )
}

export default App
