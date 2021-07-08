import React from 'react';
import logo from '../images/pics/logo.png';

const Navbar: React.FC = () => {
    return(
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
    );
}

export default Navbar;