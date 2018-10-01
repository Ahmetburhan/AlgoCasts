import React from 'react';

const RoomHeader = (props) => {
  return (
    <div className="header">
      <h2>DoorDash ChatRoom</h2>
      <div id="members">
        {props.names.map(name => (
          <a>
            {' '}
            {name}
            {' '}
          </a>
        ))} 
      </div>
    </div>
  );
};

export default RoomHeader;
