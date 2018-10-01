import React from 'react';
import MessageForm from "./MessageForm";

//Messages generated which received by props
const MessageList = (props)=> {
  // console.log(props.messages)
    return (
      <div className="App-header">
        <div className="msgContainer">

          {props.messages.map(message => (<div key={message.id}><p  className="speech-bubble"> {message.message} </p>
          <a id="chatAuthor">{message.name}</a></div>
         ))}
        </div>
         <MessageForm handlePost={props.handlePost} /> 
      </div>
    )
}

export default MessageList;
