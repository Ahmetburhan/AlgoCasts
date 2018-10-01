import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import ChatRoom from './components/ChatRoom';

class App extends Component {


  render() {
    return (
      //Routing paths
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chatroom" render={props => <ChatRoom  {...props} />} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
