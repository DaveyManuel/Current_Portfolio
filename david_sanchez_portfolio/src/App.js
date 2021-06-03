import React, { Component } from 'react';
import Project from "./components/Project"
import Header from "./components/Header";

class App extends Component {
  render(){
    return(
    <Project>
      <Header></Header>
    </Project>
    );
  }
}

export default App;
