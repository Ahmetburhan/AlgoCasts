import React from 'react';
import moment from 'moment';

class RoomList extends React.Component {
  render() {
    console.log(this.props)
    return (
    <div>
        <div id="user">{this.props.messages[0].author}
          <h6 class="timer">Logged in {moment().startOf('hour').fromNow()}</h6></div>
        <div>
          {this.props.rooms.map(room => (
            <div onClick={console.log(room)}> {room.name} </div>))}
        </div>
    </div>
    )
  }
}

export default RoomList;
