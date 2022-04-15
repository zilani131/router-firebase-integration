import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to="/home">Home</Link>
                <Link to="/login">Log in</Link>
            </nav>
        </div>
    );
};

export default Header;