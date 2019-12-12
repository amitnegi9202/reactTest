import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login.js';
import EmployeeDirectory from './components/EmployeeDirectory.js';

class App extends React.Component{
  state = {
    isLoggedIn: false
  };

  render() {
  const PrivateRoute = ({loggedIn, ...props}) => {
    console.log(loggedIn);
    return loggedIn?<Route {...props}/> : <Redirect to="/login"/>
  };
    return (
      <div className="employee">
        <Router>
          <Switch>
            <Route path="/" component={Login}></Route>
            <PrivateRoute loggedIn={this.state.isLoggedIn} path="/" component={EmployeeDirectory}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
