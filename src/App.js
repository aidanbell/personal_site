import React, { Component } from "react";

import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.scrollRef = React.createRef();

  };

  scroll(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="App">
          <div className="scroll-div" id="Home">
            <Home
              scroll={this.scroll}
              scrollRef={this.scrollRef}
            />
          </div>
          <div className="scroll-div" id="About" ref={this.scrollRef}>
            <About />
          </div>
          <div className="scroll-div" id="Projects">
            <Projects />
          </div>
          <div className="scroll-div" id="Contact" style={{"height": "1000px"}}><span>Contact</span></div>
        </div>
      </div>
    );
  }
}

export default App;
