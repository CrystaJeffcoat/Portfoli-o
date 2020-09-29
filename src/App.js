import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={['/', 'home']}>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;