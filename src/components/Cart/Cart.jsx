import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    const totalPrice = addToCart(cart, cart.price);
    const totalShipping = addToCart(cart, cart.shipping);
    const tax = addToCart(cart, cart.price)*10/100;
    return (
        <aside className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${(totalPrice + totalShipping + tax).toFixed(2)} </h6>
        </aside>
    );
};

function addToCart(cart, price) {
    return cart.reduce((prev, curr) => prev + curr.price, 0)
}

export default Cart;