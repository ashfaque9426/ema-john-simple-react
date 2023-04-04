import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);

        if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
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
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link style={{textDecoration: "none"}} to='/orders'>
                        <button style={{marginTop: "20px"}} className='btn-clear-cart'>
                            <span>Review Order</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </section>
        </main>
    );
};

export default Shop;