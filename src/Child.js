import React from "react";



export default class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1 style={{color:"red"}}>Hello World!</h1>
      );
    }
  }