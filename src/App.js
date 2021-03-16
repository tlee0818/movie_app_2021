import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  //data that will change
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count+1}))
  };
  subtract = () => {
    this.setState(current => ({count: current.count-1}))
  };
  //dont get current state using this.state.count => not good practice
  //this.setState(current => ({count: current.count+1}))


  render(){
    return <div>
      <h1>The count is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Substract</button>
      </div>
  } //parathanses immediate, without it, only onClick\
}

export default App;
