import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <article className='product'>
            <figure>
                <img src={img} alt="" />
            </figure>
            <section className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Menufecturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </section>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </article>
    );
};

export default Product;