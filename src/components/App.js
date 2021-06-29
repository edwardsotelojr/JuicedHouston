
import React from "react";
//import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "../index.css";
import Home from "../pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from "../pages/Signin"
import Signup from '../pages/Signup'
import Order from '../pages/Order'
import User from '../containers/User'
import Checkout from '../pages/Checkout'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import Menu from '../pages/Menu'
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Component } from "react";
import store from '../redux/store'
import Header from '../containers/Header'

//const store = makeStore();
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  console.log("token founded")
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    //dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component{
  

  render() {
    return(
        <Router>
          <Header/>

          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/Signin" component={Signin}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Menu" component={Menu}/>
          <Route path="/Order" component={Order}/>
          <Route path="/User" component={User}/>
          <Route path="/Checkout" component={Checkout}></Route>
          </Switch>
        </Router>
    );
  }
}
export default App;