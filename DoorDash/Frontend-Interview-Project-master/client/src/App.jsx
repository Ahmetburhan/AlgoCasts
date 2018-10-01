import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoomHeader from './components/RoomHeader';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import Home from './components/Home';
import Error from './components/Error';
import ChatRoom from './components/ChatRoom';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: '',
      messages: ''

    };
  }


  render() {
    // const messages = this.state.messages;
    // request
    //   .get(`http://localhost:8080/api/rooms/0/messages`).then(res => {
    //     if (res.ok) {
    //       console.log(res.body)
    //       console.log(res.body[0])
    //       this.setState({
    //         messages: res.body,
    //       })
    //     } else {
    //       console.log('We found nothing')
    //     }
    //   })


    // console.log(messages, rooms)

    // let sum = messages.map(el => el.name);

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/chatroom" render={props => <ChatRoom rooms={this.state && this.state.rooms} {...props} />} exact />
          <Route component={Error} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
