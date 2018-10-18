class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            message: "World"
        }
    }


    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            message: "How are you?"

        }));
        console.log(this.state.message);

    }

    render() {
        return <div>
            Hello {this.state.isToggleOn ? 'World' : 'How are You?'} 
            <button onClick={this.handleClick.bind(this)} > 
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                Toggle </button>
            </div>;
    }
}

ReactDOM.render( <Hello name="World" /> , document.getElementById('container'));