<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.js"></script>
        <script src="https://npmcdn.com/react@15.6.2/dist/react-with-addons.js"></script>
        <script src="https://npmcdn.com/react-dom@15.6.2/dist/react-dom.js"></script>

        <style>
            body {
                background: #fff
    }
  </style>
    </head>


    <body>
        <div id="container">
            <!-- This element's contents will be replaced with your component. -->
</div>


        <script type="text/babel">


            class Hello extends React.Component {
                constructor(props){
            super(props);
    this.state = {
                isToggleOn : true,
      message : "World"
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
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                    Toggle</button>


            </div>;
  }
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);

</script>
    </body>
</html>