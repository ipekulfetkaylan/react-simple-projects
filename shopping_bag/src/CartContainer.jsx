import React from 'react';
import { useGlobalContext } from './context';
import CartItem from './CartItem';

const CartContainer = () => {
    const {cart}= useGlobalContext()
    if(cart.length  === 0){
        return(
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-bag'>is bag empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
         <header>
            <h2>your bag</h2>
         </header>
         <div>
            {cart.map((item)=>{
                return <CartItem key={item.id} item={item}/>
            })}
         </div>
         <footer>
            <hr />
            <div className="cart-total">
                <h4>Total</h4>
                <span>$0.00</span>
            </div>
            <button className="btn-delete" onClick={()=>console.log('clear')}>Delete</button>
         </footer>
        </section>
    )
}

export default CartContainer
