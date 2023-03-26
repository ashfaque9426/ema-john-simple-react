import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const loadData = async () => {
            await fetch('products.json').then(async res => await res.json()).then(data => setProducts(data));
        }
        loadData();
    }, []);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <main className='shop-container'>
            <section className='products-container'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product} />)
                }
            </section>
            <section className='cart-container'>
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </section>
        </main>
    );
};

export default Shop;