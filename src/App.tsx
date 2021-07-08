import React from 'react';
// import './App.css';
import Login from './components/Login/LoginTest';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/NavBar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Navigation>
      </Router>
    
    </div>
  );
}

export default App;
