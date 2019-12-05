import React, { Component } from 'react';
import Me from '../../images/me.png';

import './About.css';
import './Particle.css';

function About() {
  return(
    <div class="About">
      <div id="particles-js">
        <div class="container">
          <img class="photo" src={Me} alt="me.png" />
          <h1>Aidan Bell</h1>
          <p>
            Curious and detail-oriented, I tend to approach problems with
creativity and efficiency first, and enjoy tinkering with the latest
technologies. After studying literature and poetry, I recognized that
my enjoyment of deconstructing and analyzing large pieces of writing
was mirrored in the world of programming. I view my place in the field
of software engineering as one in which I have room to grow, and
satiate my desire to never stop learning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
