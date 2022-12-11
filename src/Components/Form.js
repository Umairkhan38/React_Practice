import React from "react";
import Navbar from './Navbar'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
    };
  }


  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };


  display = (event) => {
    alert(`${this.state.name} is from ${this.state.address}`);
    console.log(this.state.name,this.state.address);

    event.preventDefault();
  };

  render() {
    return (
        <form onSubmit={this.display}>
        <Navbar />
        <label>Name:</label>
        <input type="text" value={this.state.name} onChange={this.handleName} />
        <br />
        <label>Address:</label>
        <textarea
          value={this.state.address}
          onChange={this.handleAddress}
        ></textarea>
        <br />
        <button>Submit</button>
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>
      </form>
    );
  }
}

export default Form;
