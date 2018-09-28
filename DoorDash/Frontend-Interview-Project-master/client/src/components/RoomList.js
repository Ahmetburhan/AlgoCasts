import React from 'react';
import moment from 'moment';

class RoomList extends React.Component {
  render() {
    console.log(this.props)
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
            <div onClick={console.log(room.name)}> {room.name} </div>))}
        </div>
    </div>
    )
  }
}

export default RoomList;
