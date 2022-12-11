import React from "react";
import Navbar from "../Navbar";
import CompB from './CompB'

class CompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "khan umair",
    };
    console.log("The Constructor From CompA ");
  }

  static getDerivedStateFromProps(props, state) {
    //State is compulsory to define in constructor to  use this function

    console.log("This is getDerivedFromProps From CompA");
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount from CompA");
    return  null;
  }

  render() {
    return (
      <div>
        <Navbar />
        <CompB />
        <h2>React Lifecycle</h2>
      </div>
    );
  }
}

export default CompA;
