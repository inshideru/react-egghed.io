import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: '---'
    }
  }

  update() {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      //c: ReactDOM.findDOMNode(this.c).value
      c: this.c.refs.input.value
    })
  }

  render() {
    return (
      <div className="App">
        <input
          ref={node => this.a = node}
          onChange={this.update.bind(this)} />
        <h1>{this.state.a}</h1>
        <hr />
        <input ref='b' onChange={this.update.bind(this)} />
        <h1>{this.state.b}</h1>
        <hr />
        <Input
          ref={component => this.c = component}
          update={this.update.bind(this)} />
        <h1>{this.state.c}</h1>
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <div><input ref='input' type="text" onChange={this.props.update} /></div>
  }
}

export default App;
