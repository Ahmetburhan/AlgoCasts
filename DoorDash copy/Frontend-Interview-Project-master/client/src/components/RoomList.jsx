import React from 'react';
import moment from 'moment';
import request from 'superagent';


const RoomList =(props)=> {
  console.log("roomlist",props)
    return (
      <div>
        <div id="user">{props.username}
          <h6 class="timer">Logged in {moment().startOf('hour').fromNow()}</h6></div>
        <div>
          {props.rooms.map(room => (
            <div
              id="room"
              className={props.selectedRoomId === room.id ? 'active-room' : ''}
              onClick={() => props.handleChangeRoom(room.id)}>
              <a>{room.name}</a>
            </div>))}
        </div>
      </div>
    )
}

export default RoomList;
