import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'


class App extends Component {
  render() {
    return (
		<Router>
            <Switch>  
                <Route path="/home" component={Home}>
                </Route>
				<Route exact path="/login" component={Login}>
                </Route>
                <Route component={Home}>
                </Route>
            </Switch>
        </Router>
    );
  }
}

export default App;
