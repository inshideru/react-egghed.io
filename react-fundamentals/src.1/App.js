import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  render() {
    let txt = this.props.txt;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React <small>{this.state.txt} - {this.state.cat}</small></h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <br /><br />
          {txt}
        </p>
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "This is the default txt"
};

//Stateles functional component
const Widget = (props) => <input type="text" onChange={props.update} />

export default App;
