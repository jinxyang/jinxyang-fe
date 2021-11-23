import React, { createContext, useReducer, useContext, useMemo } from 'react'

const initialState = {
  user: {},
}

const AppContext = createContext(initialState)

const types = {
  UPDATE_USER: 'UPDATE_USER',
}

const reducer = (state, { type, ...payload }) => {
  const handles = {
    [types.UPDATE_USER]: ({ user }) => {
      return { ...state, user }
    },
  }
  if (handles[type]) {
    const newState = handles[type](payload)
    console.group('App context changed')
    console.log('old state: ', state)
    console.log(`type: ${type}`)
    console.log(`payload: `)
    console.log(payload)
    console.log('new state: ', newState)
    console.groupEnd('App context changed')
    return newState
  }
  return state
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useMemo(
    () => ({
      updateUser: (user) => {
        dispatch({
          type: types.UPDATE_USER,
          user,
        })
      },
      logout: () => {
        localStorage.removeItem('token')
        dispatch({
          type: types.UPDATE_USER,
          user: {},
        })
      },
    }),
    [],
  )

  return (
    <AppContext.Provider value={{ state, ...actions }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
