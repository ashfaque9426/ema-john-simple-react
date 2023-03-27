import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart) {
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*10/100;

    return (
        <aside className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${(totalPrice + totalShipping + tax).toFixed(2)}</h6>
        </aside>
    );
}

export default Cart;