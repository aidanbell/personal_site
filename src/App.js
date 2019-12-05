import React, { Component } from "react";

import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <div style={{"height": "400px"}}><span>Welcome!</span></div>
          <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
          <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
          <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
        </div>
      </div>
    );
  }
}

export default App;
