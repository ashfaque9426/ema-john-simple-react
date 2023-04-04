import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <main className='shop-container'>
            <section className='review-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </section>
            <aside className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart} >
                    <Link style={{textDecoration: "none"}} to='/checkout'>
                        <button style={{marginTop: "20px", background: "#FF9900"}} className='btn-clear-cart'>
                            <span>Procced Checkout</span>
                            <FontAwesomeIcon icon={faCalendar} />
                        </button>
                    </Link>
                </Cart>
            </aside>
        </main>
    );
};

export default Orders;