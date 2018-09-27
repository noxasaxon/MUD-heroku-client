import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: undefined,
    name: undefined
  };

  componentDidMount = () => {
    const userKey = localStorage.getItem('key');
    console.log(userKey);
    if (userKey) {
      console.log('key exists, removing key');
      localStorage.removeItem('key');
    }
  }; //end CDM

  login = user => {
    this.setState({ user });
  };

  setUserInfo = name => {
    this.setState({ name });
  };

  loggedIn = () => {
    const userKey = localStorage.getItem('key');
    console.log(userKey);
    if (userKey) return true;
    else return false;
  };

  render() {
    console.log(this.props.location);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            {this.loggedIn() ? (
              <Home />
            ) : (
              <Login setUserInfo={this.setUserInfo} />
            )}
          </Route>
          <Route path="/register">
            <Register setUserInfo={this.setUserInfo} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
