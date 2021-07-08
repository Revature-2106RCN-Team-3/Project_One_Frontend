import React from 'react';

const Navbar: React.FC = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    The Social Justice Warriors
                </a>
                <div className="navbar" id="navbarContent">                  
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