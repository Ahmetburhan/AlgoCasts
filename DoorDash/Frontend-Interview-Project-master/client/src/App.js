import React, { Component } from 'react';
import './App.css';
import RoomHeader from './components/RoomHeader'
import MessageList from './components/MessageList'
import RoomList from './components/RoomList'

const messages = [
  {
    message: 'hi',
    author: 'Ahmet Koylan'
  },
  {
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
    author: 'Lorem'
  },
  {
    message: 'heyy Babe',
    author: 'Shehriban'
  },
  {
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
    author: 'ipsum'
  },
  {
    message: 'heyy Babe',
    author: 'Sheila'
  },
  {
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
    author: 'Croissant'
  },
  {
    message: 'heyy Babe',
    author: 'John'
  },
  {
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries',
    author: 'Kevin'
  },
]

const roomList = [
  {
    id: 1,
    name: 'Business Room',
  },
  {
    id: 2,
    name: 'Fun Room',
  }
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="room-list"> <RoomList rooms={roomList} messages={messages} /> </div>
        <div className="room">
          <RoomHeader names={messages.map(message => message.author)} />
          <div className="message-list"> <MessageList messages={messages} /> </div>
        </div>
      </div>
    );
  }
}

export default App;
