import React, { createContext, useReducer } from 'react'
import { initialBalance } from './initialState/initialState'
import balanceReducer from './reducer/reducer'

const store = createContext()

const { Provider } = store


const StateProvider = ({ children }) => {
  const [balance, balanceDispatch] = useReducer(balanceReducer, initialBalance)

  return (
    <Provider value={{
      balance,
      balanceDispatch
    }}>
      {children}
    </Provider>
  )
}


export { store, StateProvider }