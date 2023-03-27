import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
        addToDb(product.id);
    }

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = []
        // step 1: get id a;nd find product
        for(const id in storedCart) {
            const addedProduct = products.find(product=> product.id == id);
            // step 2: set the quantity of addedProduct from the local storage
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        // step 3 call the setCart function and change the value of cart array from useState() hook
        setCart(savedCart);
    }, [products]);

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