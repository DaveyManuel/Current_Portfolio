import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class App extends Component {
  render(){
    return(
      <Router>
          <Project>
      <Header></Header>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/portfolio">
        <Portfolio />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Footer></Footer>
    </Project>
      </Router>
    );
  }
}

export default App;
