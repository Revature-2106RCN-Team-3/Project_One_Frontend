import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PublicRoute, Protected } from './routers/index';
import { useDispatch } from 'react-redux';
import { checkAuthSess } from './api';
import { loginSuccess } from './redux/actions/logRegAction';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SocialPostComponent from './components/SocialPost/socialPost';
import Navbar from './components/Navigation/Navigation';
import SocialPostList from './components/socialPost/SocialPostList';
import './App.css';
import SocialPostDetails from './components/socialPost/SocialPostDetails';

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
    //eslint-disable-next-line
  }, []);

  return (
    <main className="bg-dark">
    <Navbar />
        <Switch>
          <PublicRoute path='/posts' component={SocialPostList} />
          <PublicRoute path='/signup' component={Register} />
          <PublicRoute path='/login' component={Login} />
          <Route
            path='/'
            exact
            render={(props:any) => <Login key={Date.now()} {...props} />}
          />
          <Protected path={'/posts'} component={SocialPostComponent} />
        </Switch>
    </main>
  );
}

export default App;
