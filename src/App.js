import React, { Component } from "react";

import Nav from './components/Nav/Nav';
import About from './components/About/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="App">
          <div className="scroll-div" id="section_1">
            <About />
          </div>
          <div className="scroll-div" id="section_2" style={{"height": "1000px"}}><span>Section 2</span></div>
          <div className="scroll-div" id="section_3" style={{"height": "1000px"}}><span>Section 3</span></div>
        </div>
      </div>
    );
  }
}

export default App;
