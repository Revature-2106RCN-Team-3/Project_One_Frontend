import React from 'react'

const Navbar: React.FC = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a href="/home" className="navbar-brand">SJW</a>
                <button 
                className="navbar-toggler" 
                data-toggle="collapse" 
                data-target="#navbarContent" 
                aria-controls="navbarContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">                    
                    <form className="d-flex">
                        <input type="search" className="form-control me-2" placeholder="Search..." aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">search</button>
                    </form>
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