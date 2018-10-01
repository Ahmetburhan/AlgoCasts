import React from 'react';

const MessageForm = (props) => {
    return (
        <div id="chatbox">
            <form onSubmit={(e)=> props.handlePost(e)}>
                <input className="form-control form-control-lg" type="text" placeholder="Type a message..." value={props.inputText} />
                <input type="submit" className="btn btn-link btn-lg" />
            </form>
        </div>
    )
}

export default MessageForm;