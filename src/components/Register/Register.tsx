import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { registerStart } from "../../redux/actions/logRegAction";
import Carousel from "../carousel";


const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [first_name, setFirst] = useState('');
    const [last_name, setLast] = useState('');
    const dispatch = useDispatch();

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setUsername(value)
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    }

    const nicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNickname(value);
    }

    const firstChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFirst(value);
    }

    const lastChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLast(value);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(username && password && first_name && last_name && nickname) {
            //way to authenticate user to go to their dashboard
            dispatch(registerStart({username, password, first_name, last_name, nickname}));
        }
    }

    return (
            <div className="row bg-dark">
            <div className="col-6 ps-5 mt-5 mb-5">
                <Carousel />
            </div>
            <div className="col-6 pt-5 text-light">
                    <form className="text-center" onSubmit={submitHandler}>
                        <div className="form-group mb-2">
                            <h1>Register</h1>
                            <br />
                            <div className="row justify-content-center pe-2">
                                <div className="col-4">
                                    <label htmlFor="first_name" className="form-label">
                                    <h6>First Name</h6>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="first_name"
                                    onChange={firstChangeHandler}
                                    required
                                    />
                                    </label>  
                                </div>
                                <div className="col-4">
                                <label htmlFor="last_name" className="form-label">
                                    <h6>Last Name</h6>
                                    <input
                                    className="form-control"
                                    type="text"
                                    id="last_name"
                                    onChange={lastChangeHandler}
                                    required
                                    />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="nickname" className="form-label">
                                <h6>Nickname</h6>
                            <input
                            className="form-control"
                            type="text"
                            id="nickname"
                            onChange={nicknameChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="username" className="form-label">
                                <h6>Email</h6>
                            <input
                            className="form-control"
                            type="text"
                            id="username"
                            onChange={usernameChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password" className="form-label">
                                <h6>Password</h6>
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
                            <button className="btn btn-lg btn-outline-secondary" type="submit">Submit</button>
                        </div>
                        <br />
                        <a href="/login" className="link-light">I have an account</a>
                    </form>
                    <br />
                    <p className="bg-dark text-muted text-center ">&copy; Copyright 2021 Social Justice Warriors</p>
                    </div>
                </div>
    )
}

export default Register;