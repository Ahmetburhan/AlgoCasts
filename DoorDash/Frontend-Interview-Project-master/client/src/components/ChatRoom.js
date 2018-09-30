import React, { Component } from 'react';
import '../App.css';
import RoomHeader from './RoomHeader'
import MessageList from './MessageList'
import RoomList from './RoomList'
import request from 'superagent';
import Home from "./Home";



class ChatRoom extends Component {
    constructor(props) {
        super(props);  
    }
    state = {
        messages: "",
}
    

    render() {
     
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
