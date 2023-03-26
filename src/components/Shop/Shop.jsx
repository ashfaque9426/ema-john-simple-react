import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const loadData = async () => {
            await fetch('products.json').then(async res => await res.json()).then(data => setProducts(data));
        }
        loadData();
    }, [])
    return (
        <main className='shop-container'>
            <section className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </section>
            <section className='cart-container'>
                <h3>Order Summary</h3>
            </section>
        </main>
    );
};

export default Shop;