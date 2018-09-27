import React from 'react'

const RoomHeader = ({names}) => {
  console.log(this.props)
  return (
    <div className="header">
      <h2>DoorDash ChatRoom</h2>
      <div id="members">
        {names.map(name => (<a> {name} </a>))}
      </div>
    </div>
  )
}

export default RoomHeader;
