import React, { Component } from 'react';
import Me from '../../assets/images/me.png';

import './Home.css';
import './Particle.css';

function Home() {
  return(
    <div class="Home">
      <div id="particles-js">
        <div class="home-container">
          <img class="photo" src={Me} alt="me.png" />
          <h1 class="name">Aidan Bell</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
