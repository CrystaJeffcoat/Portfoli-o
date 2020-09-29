import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import About from "./src/pages/About";
import Projects from "./src/pages/Projects";
import Home from "./src/pages/Home";
import Nav from "./src/components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path={['/', 'home']}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
