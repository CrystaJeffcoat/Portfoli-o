import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </Router>
  )
}

export default App;
