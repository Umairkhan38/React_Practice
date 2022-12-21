import React from "react";
import Navbar from "./Navbar";
import Properties from "./Properties";

export const myContext = React.createContext();

export default class StateHandle extends React.Component {
  constructor(){
      super();
  this.state = {
    status: "This is State in Class Component",
    cnt: 0,
  };
    this.stateHandler=this.stateHandler.bind(this)
  }

  stateHandler() {
    this.setState({
      status: "The State is Reset ",
      cnt: this.state.cnt + 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>StateHandle.js</div>
        <hr />
        <h2>This is Under Context Provider</h2>
        <h3>{this.state.status}</h3>
        <h3>{this.state.cnt}</h3>
        <button
          onClick={this.stateHandler}
        >
          Handler
        </button>
        <myContext.Provider value={this.state}>
          <Properties />
        </myContext.Provider>
      </React.Fragment>
    );
  }
}
