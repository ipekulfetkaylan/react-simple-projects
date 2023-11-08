import React from 'react'
import { useGlobalContext } from './context'

const Navbar = () => {
    const {amount}= useGlobalContext()
  return (
    <div className='navbar'>
        <span className='logo'>Shopping</span>
        <div className='bag'>
           <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            <span className='total-product'>{amount}</span>
        </div>

      
    </div>
  )
}

export default Navbar
