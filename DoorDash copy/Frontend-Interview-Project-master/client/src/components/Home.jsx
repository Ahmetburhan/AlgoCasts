import React from "react";
import { Redirect } from 'react-router-dom';
//username splash page
class Home extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: '',
            redirect: false,
        };
    }

    handleChange(event) {
        this.setState({ username: event.target.value });
        // console.log("Username", this.state.username)

    }

    handleClick = (e) => {
        e.preventDefault();
        // console.log("Handler target value", this.state.username)
        if (this.state.username === "") {
            alert("Please enter Username to enter Chatroom!")
        } else {
            this.setState({
                redirect: true
            })


        }
    }

    //Page redirection handled here
    renderRedirect = () => {
        if (this.state.redirect && this.state.username !== "") {
            console.log("Handler target value", this.state.redirect)

            return <Redirect to={{
                pathname: '/chatroom',
                state: {
                    username: this.state.username

                }
            }} />
        }
    }


    render() {
        return (
            <div>
                {this.renderRedirect()}
                <div id="userNameBox">
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="form-control" placeholder="Type your username..." value={this.state.inputText} />
                    <button type="button" class="btn btn-danger btn-lg btn-block btn-home" onClick={this.handleClick} > Join the DoorDash Chat! </button>
                </div>
            </div>
        );
    };
}
export default Home;