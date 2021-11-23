import React, { useState, useEffect, useCallback } from 'react'

import { useFetch } from '@jinxyang/hooks'
import { Mask, App } from '@jinxyang/components'

import { useAppContext } from 'contexts'
import { accountInfoService } from 'services'

import LoginForm from '../Login'
import AccountInfo from './AccountInfo'

const Account = () => {
  const { state, logout, updateUser } = useAppContext()
  const [isLoginShow, setLoginShow] = useState(false)
  const [{ loading }, fetchAccountInfo] = useFetch(
    accountInfoService,
    ({ code, data }) => {
      if (!code) {
        updateUser(data)
      }
    },
  )

  const tokenListener = useCallback(() => {
    const token = localStorage.getItem('token')
    if (token == null) {
      logout()
    } else if (token.trim()) {
      fetchAccountInfo()
    }
  }, [logout, fetchAccountInfo])

  useEffect(() => {
    window.addEventListener('storage', tokenListener, false)
    return () => {
      window.removeEventListener('storage', tokenListener, false)
    }
  }, [tokenListener])

  useEffect(() => {
    window.dispatchEvent(new Event('storage'))
  }, [])

  if (loading) return <div>loading</div>
  return (
    <App>
      {state.user.id ? (
        <AccountInfo user={state.user} onLogout={logout} />
      ) : (
        <button onClick={() => setLoginShow(true)}>Login</button>
      )}
      <Mask show={isLoginShow}>
        <LoginForm onClose={() => setLoginShow(false)} />
      </Mask>
    </App>
  )
}

export default Account
