import React, { Component } from 'react';
import Me from '../../assets/images/me.png';

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
          <i class="material-icons" style={{fontSize: '102px'}} onClick={() => {this.props.scroll(this.props.scrollRef)}}>arrow_downward</i>
        </div>
      </div>
    )
  }
}

export default Home;
