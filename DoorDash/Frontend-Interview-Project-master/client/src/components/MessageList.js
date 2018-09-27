import React from 'react'

class MessageList extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: ''
    };
  }

  handleChange(event) {
  this.setState({inputText: event.target.value});
}
  render() {
    return (
      <div className="App-header">
        <div className="msgContainer">

        {this.props.messages.map(message => (<div><p className="speech-bubble"> {message.message} </p>
          <a id="chatAuthor">{message.author}</a></div>
         ))}
        <div> You typed {this.state.inputText} </div>
        </div>
          <div id="chatbox">
        <input onChange={this.handleChange} class="form-control form-control-lg" type="text" placeholder="Type a message..." value={this.state.inputText} />
        <button type="button" class="btn btn-link btn-lg" > Send </button>
      </div>
      </div>
    )
  }
}

export default MessageList;
