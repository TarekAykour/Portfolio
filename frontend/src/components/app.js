import React, { Component,useEffect, useState } from "react";
import Nav from "./Nav"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import { render } from "react-dom";
import Home from "./Home"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Footer from "./Footer";

function App() {
  return (
    <Router>
        < Nav />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer/>
    </Router>
  );
}


const appDiv = document.getElementById('app');

render(< App/>, appDiv)
export default App;