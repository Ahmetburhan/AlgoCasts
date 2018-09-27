import React from 'react'

const RoomHeader = ({names}) => {
  return (
    <div className="header">
      <h2>DoorDash ChatRoom</h2>
      <div id="members">
        {names.map(author => (<a> {author} </a>))}
      </div>
    </div>
  )
}

export default RoomHeader;
