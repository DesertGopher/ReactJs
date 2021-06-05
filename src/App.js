import React from 'react';
import './App.css';
import Navbar from './templates/nevbar';
import TodoList from './Todo/TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './User/UserList';
import HomePage from './HomePage/HomePage';
document.body.style = 'background: linear-gradient(to bottom right, #B0B6FF, #F9F273) no-repeat';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todos" component={TodoList} />
          <Route path="/users" component={UserList} />
        </Switch>
      </Router>
    );
  }
}


