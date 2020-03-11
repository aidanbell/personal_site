import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";

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
              <ScrollspyNav
                scrollTargetIds={["Home", "About", "Projects", "Contact"]}
                activeNavClass="is-active"
                headerBackground="true"
                scrollDuration="200"
              />
              <ul class="home-nav">
                <li><a class="mobile-nav-link" href="#About"><span>About Me</span></a></li>
                <li><a class="mobile-nav-link" href="#Projects"><span>Projects</span></a></li>
                <li><a class="mobile-nav-link" href="#Contact"><span>Contact</span></a></li>
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
