import React from 'react';
import moment from 'moment';
import request from 'superagent';


class RoomList extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inputText: '',
      roomId: 0,
      messages: "",
    };
  }

  handleClick = (room) => {
    request
      .get(`http://localhost:8080/api/rooms/${room}/messages`).then(res => {
        if (res.ok) {
          console.log(res.body)
          this.setState({
            messages: res.body,
          })
        } else {
          console.log('We found nothing')
        }
      })

  }
  render() {
    console.log("props here",this.props)
    console.log("messages",this.state.messages)
    const user = this.props.username;
    console.log("aaaaaa",user)

    let userName = user[0].toUpperCase() + user.slice(1, user.length);
    let rooms = this.props.rooms;
    return (
    <div>
        <div id="user">{userName}
          <h6 class="timer">Logged in {moment().startOf('hour').fromNow()}</h6></div>
        <div>
          {rooms.map(room => (
            <div onClick={() => this.handleClick(room.id)}> {room.name} </div>))}
        </div>
    </div>
    )
  }
}

export default RoomList;
