import React, { useReducer, useState } from 'react';
import cartItems from './data'
import { useContext } from 'react';
import reducer from './reducer';

const url= 'https://course-api.com/react-useReducer-cart-project';
const AppContext= React.createContext()
const initialState= {
    loading:false,
    cart:cartItems,
    total:0,
    amount:0
}
const AppProvider = ({children}) => {
    const [state, dispatch]= useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  )

}
export const useGlobalContext = ()=>{
  return useContext(AppContext)
}

export  {AppProvider,AppContext}
