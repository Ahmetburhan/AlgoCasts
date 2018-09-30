import React, { Component } from 'react';
import './App.css';
import RoomHeader from './components/RoomHeader'
import MessageList from './components/MessageList'
import RoomList from './components/RoomList'
import request from 'superagent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import ChatRoom from './components/ChatRoom';


// const messages = [
//   {
//     message: 'hi',
//     author: 'Ahmet Koylan'
//   },
//   {
//     message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
//     author: 'Lorem'
//   },
//   {
//     message: 'heyy Babe',
//     author: 'Shehriban'
//   },
//   {
//     message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
//     author: 'ipsum'
//   },
//   {
//     message: 'heyy Babe',
//     author: 'Sheila'
//   },
//   {
//     message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
//     author: 'Croissant'
//   },
//   {
//     message: 'heyy Babe',
//     author: 'John'
//   },
//   {
//     message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
//     author: 'Kevin'
//   },
// ]

// const roomList = [
//   {
//     id: 1,
//     name: 'Business Room',
//   },
//   {
//     id: 2,
//     name: 'Fun Room',
//   }
// ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: "",
      messages: "",

    }
   
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
            <Route path="/chatroom" render={(props) => <ChatRoom rooms={this.state && this.state.rooms}{...props}  />} exact />
            <Route component={Error} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
