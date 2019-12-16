import React from 'react';

import './About.css';

function About() {
  return(
    <div class="About scrollToHere">
      <div class="Nav">
        <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="brand-tab" data-toggle="tab" href="#brand" role="tab" aria-controls="brand" aria-selected="true">Me:</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#technologies" role="tab" aria-controls="technologies" aria-selected="false">Technologies:</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
          </li>
        </ul>
      </div>
      <div class="vr"></div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="brand" role="tabpanel" aria-labelledby="home-tab">
          "Curious and detail-oriented, I tend to approach problems with
          creativity and efficiency first, and enjoy tinkering with the latest
          technologies. After studying literature and poetry, I recognized that
          my enjoyment of deconstructing and analyzing large pieces of writing
          was mirrored in the world of programming. I view my place in the field
          of software engineering as one in which I have room to grow, and
          satiate my desire to never stop learning."
        </div>
        <div class="tab-pane fade" id="technologies" role="tabpanel" aria-labelledby="technologies-tab">
          <div class="languages">
            <h2>Front End:</h2>
            <i class="logo devicon-html5-plain-wordmark"></i>
            <i class="logo devicon-css3-plain-wordmark"></i>
            <i class="logo devicon-javascript-plain"></i>
          </div>
          <div class="languages">
            <h2>Back End:</h2>
            <i class="logo devicon-python-plain-wordmark"></i>
            <i class="logo devicon-mongodb-plain-wordmark"></i>
            <i class="logo devicon-postgresql-plain-wordmark"></i>
          </div>
          <div class="languages">
            <h2>Frameworks:</h2>
            <i class="logo devicon-express-original-wordmark"></i>
            <i class="logo devicon-react-original-wordmark"></i>
            <i class="logo devicon-nodejs-plain-wordmark"></i>
            <i class="logo devicon-django-plain"></i>
          </div>
          <h2>Technologies/Tools:</h2>
          Socket.io, OAuth2, Token & Session-based Auth
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <br/>
          <br/>
          <br/>
          <i class="logo devicon-linux-plain"></i>
          <i class="logo devicon-git-plain-wordmark"></i>
        </div>
      </div>
    </div>
  )
}

export default About;
