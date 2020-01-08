import React, { Component } from 'react';

import './Home.css';
import './Particle.css';

class Home extends Component {
  render(){
    return(
      <div class="Home">
        <div id="particles-js">
          <div class="home-container">
            <p class="name">/ab/</p>
            <div class="mobile-nav">
              <ul class="home-nav">
                <li><a href="#Home"><span>Home</span></a></li>
                <li><a href="#About"><span>About Me</span></a></li>
                <li><a href="#Projects"><span>Projects</span></a></li>
                <li><a href="#Contact"><span>Contact</span></a></li>
              </ul>
            </div>
          </div>
            <i class="material-icons" id="down" style={{fontSize: '10vmin', cursor: 'pointer'}} onClick={() => {this.props.scroll(this.props.scrollRef)}}>arrow_downward</i>
          </div>
      </div>
    )
  }
}

export default Home;
