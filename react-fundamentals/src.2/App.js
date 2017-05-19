import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title text='Uolôco meu' />
        <Button>I <Heart /> React</Button>
      </div>
    );
  }
}

/** Stateless Functional Component */
const Button = (props) => <button>{props.children}</button>

/** Class Component */
class Heart extends React.Component {
  render() {
    return <span>💙</span>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
  //text: PropTypes.string.isRequired
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 16) {
      return new Error(`${propName} was too short`);
    }
  }
}

export default App;
