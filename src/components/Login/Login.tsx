import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginStart } from '../../redux/actions/logRegAction';
import './Login.css';
import Carousel from "../carousel";

const Login: React.FC = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //get rid of whitespaces
        const value = e.target.value.trim();
        setUsername(value);
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    }

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        if(username && password) {
            //way to authenticate user to go to their dashboard
            dispatch(loginStart(username, password));
        }
    }

    return(
        <div className="row bg-dark">
            <div className="col-6 ps-5 mt-5">
                <Carousel />
            </div>
            <div className="col-6 justify-content-end mb-5 ps-5 text-light">
                    <form className="text-center" onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <br />
                            <br />
                            <h3>Login</h3>
                            <br />
                            <label htmlFor="username" className="form-label">
                                <h5>Username</h5>
                            <input
                            className="form-control"
                            type="text"
                            id="username"
                            onChange={usernameChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <div className="form-group mb-3">

                            <label htmlFor="password" className="form-label">
                                <h5>Password</h5>
                            <input
                            className="form-control"
                            type="text"
                            id="password"
                            onChange={passwordChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <button className="btn btn-sm btn-primary" type="submit">Login</button>
                        </div>
                        <br />
                        <a href="/signup" className="link-light">I don't have an account</a>
                    </form>
                    <br />
                    <p className="bg-dark text-muted text-center">&copy; Copyright 2021 Social Justice Warriors</p>
                    </div>
            </div>
    )
}

export default Login;