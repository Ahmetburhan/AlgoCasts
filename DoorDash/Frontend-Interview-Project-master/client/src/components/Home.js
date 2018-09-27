import React from "react";
import { Redirect } from 'react-router-dom';
class Home extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: '',
        };
    }

    handleChange(event) {
        console.log("target value", event.target.value)
        this.setState({ username: event.target.value });
        console.log("Username", this.state.username)

    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("Handlr target value", this.state.username)
        return <Redirect to='/chatroom' />;


        
    }
    render(){
    return (
        <div>
            <div id="userNameBox">
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="form-control" placeholder="Type your username..." value={this.state.inputText} />
                <button type="button" class="btn btn-danger btn-lg btn-block btn-home" onClick={this.handleClick} > Join the DoorDash Chat! </button>
            </div>
        </div>
    );
};
}
export default Home;