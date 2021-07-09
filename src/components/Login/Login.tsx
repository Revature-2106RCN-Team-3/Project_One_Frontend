import React, { FormEvent, useState, useReducer } from "react";
import './Login.css';
import Carousel from "../carousel";
import  loginReducer, {initState} from "../../redux/reducers/loginRegReducer";
import { ActionType } from "../../redux/action-types";

const Login: React.FC = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [state, dispatch] = useReducer(loginReducer, initState);

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //get rid of whitespaces
        dispatch({
            type:ActionType.SET_USERNAME,
            payload: e.target.value
        });
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:ActionType.SET_PASSWORD,
            payload: e.target.value
        });
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        if(state.username && state.password) {
            //way to authenticate user to go to their dashboard
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: 'Logged in'
            });
        } else {
            dispatch({
                type:ActionType.LOGIN_FAILED,
                payload: 'Incorrect username/password'
            });
        };
    }


    return(
        <div className="login row bg-dark">
            <div className="col-6 ps-5 mt-5 mb-5">
                <Carousel />
            </div>
            <div className="col-6 justify-content-end mb-5 ps-5 text-light">
                    <form className="text-center" onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <br />
                            <br />
                            <h1>Login</h1>
                            <br />
                            <label htmlFor="username" className="form-label">
                                <h5>Username</h5>
                            <input
                            className="form-control"
                            type="text"
                            id="username"
                            autoComplete="username"
                            value={state.username}
                            onChange={usernameChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">
                                <h5>Password</h5>
                        <div className="row g-3">
                            <div className="col-11">
                            <input
                            className="form-control"
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            aria-describedby="eye"
                            onChange={passwordChangeHandler}
                            value={state.password}
                            required
                            />
                            </div>
                            <div className="col-1">
                                {isPasswordVisible ? (
                                    <i className="bi bi-eye-fill" 
                                    id="eye" 
                                    onClick={() => setPasswordVisible(false)}
                                    ></i>
                                ) : (
                                    <i className="bi bi-eye-slash"
                                    id="eye-slash"
                                    onClick={() => setPasswordVisible(true)}
                                    ></i>
                                )}
                            </div>
                            </div>
                            </label>
                        </div>
                        <br />
                        <div className="form-group">
                            <button className="btn btn-lg btn-outline-secondary" type="submit">Login</button>
                        </div>
                        <br />
                        <a href="/signup" className="link-light">I don't have an account</a>
                    </form>
                    <br />
                    <p className="bg-dark text-muted text-center">&copy; Copyright {new Date().getFullYear()} Social Justice Warriors</p>
                    </div>
            </div>
    )
}

export default Login;