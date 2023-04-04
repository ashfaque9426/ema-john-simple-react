import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    
    return (
        <main className='shop-container'>
            <section className='review-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </section>
            <aside className='cart-container'>
                <Cart cart={cart} />
            </aside>
        </main>
    );
};

export default Orders;