import React, { Component } from 'react';
import '../App.css';
import RoomHeader from './RoomHeader'
import MessageList from './MessageList'
import RoomList from './RoomList'
import request from 'superagent';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: this.props.location.state.username,
        messages: [],
        selectedRoomId: 0,
        rooms: []
    }
    componentDidMount() {

        this.getRoomList();
        this.handleGetMessages(this.state.selectedRoomId);

    }
    handleChangeRoom = (room) => {
        this.setState({ selectedRoomId: room }, () => {
            request
                .get(`http://localhost:8080/api/rooms/${room}/messages`).then(res => {
                    if (res.ok) {
                        // console.log("handleChangeRoom", res.body, room)
                        this.handleGetMessages(this.state.selectedRoomId);
                    } else {
                        console.log('We found nothing')
                    }
                })
            
        })
    }
    getRoomList = () =>{
    
        request
            .get(`http://localhost:8080/api/rooms`).then(res => {
                if (res.ok) {
                    // console.log(res.body)
                    this.setState({
                        rooms: res.body,
                    })
                } else {
                    console.log('We found nothing')
                }
            })
    }
    handleGetMessages = (roomId) => {
        request
            .get(`http://localhost:8080/api/rooms/${roomId}/messages`).then(res => {
                if (res.ok) {
                    // console.log(res.body)
                    this.setState({
                        messages: res.body,
                    })
                } else {
                    console.log('We found nothing')
                }
            })

    }

    handleChange(event) {
        // console.log("target value", event.target.value)
        this.setState({ inputText: event.target.value });

    }
    handlePost = (e) => {
        e.preventDefault();
        // console.log("value here", e.target.children[0].value)


        request
            .post(`http://localhost:8080/api/rooms/${this.state.selectedRoomId}/messages`)
            .send({
                name: this.state.username,
                message: e.target.children[0].value,
            })
            .then(res => {
                if (res.ok) {
                    // console.log(res.body)
    
                    this.handleGetMessages(this.state.selectedRoomId)


                } else {
                    console.log('We found nothing')
                }
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            })



    }


    render() {

        return (

            <div className="app">
                <div className="room-list">
                    <RoomList
                        rooms={this.state.rooms} username={this.state.username} handleChangeRoom={this.handleChangeRoom}/> </div>
                <div className="room">
                    <RoomHeader
                        names={this.state.messages.map(message => message.name)} username={this.state.username}/>
                    <div className="message-list">
                    <MessageList
                            messages={this.state.messages} handlePost={this.handlePost}/> 
                        
                        </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;
