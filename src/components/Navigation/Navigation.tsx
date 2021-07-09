import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../images/pics/logo.png';
import Logout from '../Logout/Logout';
import './Navigation.css';
import LoginCognito from '../../LoginCognito';

const Navbar: React.FC = () => {

    const { pathname } = useLocation();
    const hidePaths = ['/login', '/signup', '/'];

    return hidePaths.includes(pathname) && !LoginCognito.isLoggedIn() ? (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt='logo' width="50" height="50" className="d-inline-block align-text-top me-2"/>
                    The Social Justice Warriors
                </a>
                <button 
                className="navbar-toggler"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarContent" 
                aria-controls="navbarContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">                  
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signup" role="button" className="btn btn-info">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    ) : (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt='logo' width="50" height="50" className="d-inline-block align-text-top me-2"/>
                    The Social Justice Warriors
                </a>
                <button 
                type="button" 
                className="btn btn-danger" 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                >
                Logout
                </button>
                <Logout />
            </div>
        </nav> 
    )
}

export default Navbar;