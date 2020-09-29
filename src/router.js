import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

export default <Router history={hashHistory}>
  <Route path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/projects' component={Projects} />
</Router>