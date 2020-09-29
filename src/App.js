import React, { Component } from "react";
import Nav from "./components/Nav";

class App extends Component {
static propTypes = {
  children: PropTypes.node
}
  render() {
    const { Children } = this.props
    return (
      <Nav>
        {children}
      </Nav>
    );
  }
}

export default App;
