import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='header'>
                <img src={logo} alt="" />
                <section>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </section>
            </nav>
        </header>
    );
};

export default Header;