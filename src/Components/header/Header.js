import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Header = () => {
    const {user,handleSignOut}=useFirebase()
    return (
        <div>
            <nav className='header'>
                <Link to="/home">Home</Link>
                <Link to ="/orders">Orders</Link>
                <Link to ="/products">Products</Link>
                {/* using optional chaining after user? so that 
                when we don't have data it will don't show error */}
                {  user?.uid?
                      <button onClick={handleSignOut}>Sign out</button>:
                    <Link to="/login">Log in</Link>}
                    {user?.displayName && <span>{(user.displayName).slice(0,8)}</span>}
                <Link to ="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Header;