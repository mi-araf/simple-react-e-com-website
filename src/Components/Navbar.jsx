import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to={'/'} className='navbar-brand'>React Shop</Link>
            </div>

            <div className="navbar-links">
                <Link to={'/'} className='navbar-link'>Home</Link>
                <Link to={'/checkout'} className='navbar-link'>Cart</Link>
            </div>

            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to='/auth' className="btn btn-primary">Sign Up</Link>
                    <Link to='/auth' className="btn btn-secondary">Log In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;