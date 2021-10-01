import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Home from '../MenuPages/Home';
import Services from '../MenuPages/Services';
import Contact from '../MenuPages/Contact';
import About from '../MenuPages/About';

function _app() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/sevices" component={Services} />
      </Switch>
    </Router>
    </div>
  )
}

export default _app

