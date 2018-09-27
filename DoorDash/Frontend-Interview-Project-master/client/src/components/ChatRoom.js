import React, { Component } from 'react';
import '../App.css';
import RoomHeader from './RoomHeader'
import MessageList from './MessageList'
import RoomList from './RoomList'
import request from 'superagent';




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
        rooms: "",
        messages: "",

    }
    componentDidMount() {
        request
            .get(`http://localhost:8080/api/rooms`).then(res => {
                if (res.ok) {
                    console.log(res.body)
                    console.log(res.body[0])
                    this.setState({
                        rooms: res.body,
                    })
                } else {
                    console.log('We found nothing')
                }
            })
        request
            .get(`http://localhost:8080/api/rooms/0/messages`).then(res => {
                if (res.ok) {
                    console.log(res.body)
                    console.log(res.body[0])
                    this.setState({
                        messages: res.body,
                    })
                } else {
                    console.log('We found nothing')
                }
            })

    }

    render() {
        // const messages = this.state.messages;
        // const rooms = this.state.rooms;
        // console.log(messages, rooms)

        // let sum = messages.map(el => el.name);

        return (
            
            <div className="app">
              <div className="room-list"> <RoomList rooms={roomList} messages = {messages[0].author} /> </div>
              <div className="room">
                <RoomHeader names={messages.map(message => message.author)} />
                <div className="message-list"> <MessageList messages={messages} /> </div>
              </div>
            </div>
        );
    }
}

export default ChatRoom;
