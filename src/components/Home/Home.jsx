import React, { Component } from 'react';

import './Home.css';
import './Particle.css';

class Home extends Component {
  render(){
    return(
      <div class="Home">
        <div id="particles-js">
          <div class="home-container">
            <h1 class="name">/ab/</h1>
          </div>
            <i class="material-icons" id="down" style={{fontSize: '10vmin', cursor: 'pointer'}} onClick={() => {this.props.scroll(this.props.scrollRef)}}>arrow_downward</i>
          </div>
      </div>
    )
  }
}

export default Home;
