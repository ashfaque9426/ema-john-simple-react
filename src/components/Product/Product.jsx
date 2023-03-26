import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} = props.product;
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
            <button className='btn-cart'>Add To Cart</button>
        </article>
    );
};

export default Product;