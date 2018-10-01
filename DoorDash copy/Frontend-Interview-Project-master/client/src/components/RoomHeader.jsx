import React from 'react';
import _ from 'lodash';

//Displaying Messagers on header
const RoomHeader = (props) => {

  let names = _.uniq(props.names);
  // console.log(props.names)
  return (
    <div className="header">
      <h2>DoorDash ChatRoom</h2>
      <div id="members">
        {names.map(name => (
          <a key={name}>
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
