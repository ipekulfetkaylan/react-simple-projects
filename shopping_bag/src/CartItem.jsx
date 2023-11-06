import React from 'react'

const CartItem = ({item}) => {
  return (
    <section className='section-wrapper'>  
    <div className='section-inner-wrapper'>
        <div className='item-info'>
            <div className='img-container'> <img src={item.img} alt={item.title} /></div>
            <div>
                <h4>{item.title}</h4>
                <h4 className="item-price">${item.price}</h4>
                <button className="remove-btn" onClick={()=>{}}>remove</button>
            </div>
        </div>
        <div className='button-wrap'>
            <button className='dec-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="up-arrow"><path d="M12.768,8.359a1.035,1.035,0,0,0-1.536,0l-5,6A1,1,0,0,0,7,16H17a1,1,0,0,0,.768-1.641ZM9.135,14,12,10.563,14.865,14Z"></path></svg>
            </button>
                <span className='amount'>{item.amount}</span>
            <button className='inc-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><g data-name="Layer 2"><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17zm-3.91-7L12 14.82 16 10z" data-name="arrow-down"></path></g></svg>
            </button> 
        </div>
    </div>
    </section>
  )
}

export default CartItem
