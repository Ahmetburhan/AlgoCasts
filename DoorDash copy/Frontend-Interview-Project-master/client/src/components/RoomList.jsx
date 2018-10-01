import React from 'react';
import moment from 'moment';

//Roomlist panel with user and chatrooms
const RoomList =(props)=> {
    return (
      <div>
        <div id="user">{props.username}
          <h6 className="timer">Logged in {moment().startOf('hour').fromNow()}</h6></div>
        <div>
          {props.rooms.map(room => (
            <div
              key={room.id}
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
