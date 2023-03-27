import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}/>
            </section>
        </main>
    );
};

export default Shop;