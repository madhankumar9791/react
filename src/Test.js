import React from "react";

import Child from "./Child";

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: false};
    }
    delHeader = () => {
      this.setState({show: true});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }