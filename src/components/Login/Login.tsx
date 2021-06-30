import React, { FormEvent, useState } from "react";

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
        <div className="container bg-dark">
            <div className="row justify-content-around">
                <div className="col-4">
                    <img 
                    src="../../images/logo_name.png" 
                    className="img-fluid"
                    alt="logo_name"
                    ></img>
                </div>
                <div className="col-4">
                    <h1>Social Justice Warriors</h1>
                    <form onSubmit={submitHandler}>
                        <div className="form-group mb-3">
                            <h3>Login</h3>
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
                    <a href="/home/signup" className="link-primary">I don't have an account</a>
                </div>
            </div>
        </div>
    )
}

export default Login;