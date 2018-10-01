import React from 'react';
import MessageForm from "./MessageForm";


const MessageList = (props)=> {
    return (
      <div className="App-header">
        <div className="msgContainer">

        {props.messages.map(message => (<div><p className="speech-bubble"> {message.message} </p>
          <a id="chatAuthor">{message.name}</a></div>
         ))}
        </div>
         <MessageForm handlePost={props.handlePost} /> 
      </div>
    )
}

export default MessageList;
