import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <header>
            <nav className='header'>
                <img src={logo} alt="" />
                <section>
                    <a href="/shop">shop</a>
                    <a href="/order">order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">login</a>
                </section>
            </nav>
        </header>
    );
};

export default Header;