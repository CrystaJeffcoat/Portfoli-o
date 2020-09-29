import React from "react";
import Nav from "./components/Nav";

class App extends Component {
static propTypes = {
  children: PropTypes.node
}
  render() {
    return (
      <Nav>
        {children}
      </Nav>
    );
  }
}

export default App;
