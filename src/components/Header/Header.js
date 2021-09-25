import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Random Meal</a>
            </nav>
        </div>
    );
};

export default Header;