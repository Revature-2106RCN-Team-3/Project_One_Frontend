import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PublicRoute } from './routers';
import { useDispatch } from 'react-redux';
import { checkAuthSess } from './api';
import { loginSuccess } from './redux/actions/logRegAction';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navigation/Navigation';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try{
        const { auth } = await checkAuthSess();
        dispatch(loginSuccess(auth));
      } catch (err) {
        console.log("ERROR", err);
      }
    })();
  }, []);

  return (
    <main className="bg-dark">
    <Navbar />
        <Switch>
          <PublicRoute path='/signup' component={Register} />
          <PublicRoute path='/login' component={Login} />
          <Route
            path='/'
            exact
            render={(props:any) => <Login key={Date.now()} {...props} />}
          />
        </Switch>
    </main>
  );
}

export default App;
