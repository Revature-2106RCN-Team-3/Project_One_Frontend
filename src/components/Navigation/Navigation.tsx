import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
//import { logoutStart } from '../../redux/actions/logRegAction';
import { IRootReducer } from '../../types/types';
import logo from '../images/pics/logo.png';
import Logout from '../Logout/Logout';
import './Navigation.css';

interface IProps {
    isAuth: boolean;    
}

const Navbar: React.FC<IProps> = ({isAuth}) => {
    const dispatch = useDispatch();

    const { isLoadingAuth, auth, error } = useSelector((state: IRootReducer) => ({
        isLoadingAuth: state.loading.isLoadingAuth,
        auth: state.auth,
        error:state.error.authError,
    }));

    const onLogout = () => {
        dispatch(logoutStart());
    }

    const { pathname } = useLocation();
    const hidePaths = ['/login', '/signup', '/'];

    return hidePaths.includes(pathname) && !isAuth ? (
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
                <a href={`/user/${auth.username}`} className="link-light">
                    @{auth.nickname}
                </a>
                <button 
                type="button" 
                className="btn btn-danger" 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                >
                Logout
                </button>
                <Logout 
                    dispatchLogout={onLogout}
                    error={error}    
                    isLoggingOut={isLoadingAuth}
                />
            </div>
        </nav> 
        ) 
}

export default Navbar;