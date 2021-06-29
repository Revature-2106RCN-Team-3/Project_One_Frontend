import React, { FormEvent, useState } from "react";
{/*import { Link } from "react-router-dom";
*/}

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Social Justice Warriors!</h1>
                    <form onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username
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
                            <label htmlFor="password" className="form-label">Password
                            <input
                            className="form-control"
                            type="text"
                            id="password"
                            onChange={passwordChangeHandler}
                            required
                            />
                            </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-sm btn-light" type="submit">Submit</button>
                        </div>
                    </form>
                    {/*
                    <Link
                        href="/signup"
                        onClick={}
                        to={}
                    >
                    I don't have an account
                    </Link>
                    */} 
                </div>
            </div>
        </div>
    )
}

export default Login;