import React, { Component } from 'react';
import '../App.css';
import RoomHeader from './RoomHeader'
import MessageList from './MessageList'
import RoomList from './RoomList'
import request from 'superagent';
import Home from "./Home";



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

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        messages: "",
}
    

    render() {
        // const messages = this.state.messages;
        // const rooms = this.state.rooms;
        // console.log(messages, rooms)

        // let sum = messages.map(el => el.name);
        console.log("Rooms here",this.state.rooms)
        console.log("here props", this.props)
        console.log("Username:", this.props.location.state.username)
        let username = this.props.location.state.username;
        let rooms = this.props.location.state.rooms;
        let messages = this.props.location.state.messages;


        return (
            
            <div className="app">
                <div className="room-list"> <RoomList rooms={rooms} username={this.props.location.state.username} /> </div>
              <div className="room">
                <RoomHeader names={messages.map(message => message.name)} />
                <div className="message-list"> <MessageList username={username} messages={messages} /> </div>
              </div>
            </div>
        );
    }
}

export default ChatRoom;
