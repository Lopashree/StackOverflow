/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">stack<strong>overflow</strong></a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Your Answers Here..." />
            </div>
            <div className='nav-tab'>
                <h4><a href='/'>Products</a></h4>
            </div>
            <div className="icons">
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-trophy"></i>
                <i className="bi bi-database"></i>
                <i className="bi bi-person-circle"></i>
            </div>
        </nav>
    );
};

export default Navbar;
