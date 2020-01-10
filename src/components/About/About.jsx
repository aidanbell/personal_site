import React from 'react';

import './About.css';
import Icon from './GALogo';

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
            <a class="nav-link" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">Education:</a>
          </li>
        </ul>
      </div>
      <div class="vr"></div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="brand" role="tabpanel" aria-labelledby="home-tab">
          <p class="brand-statement">
            Curious and detail-oriented, I tend to approach problems with
            creativity and efficiency first, and enjoy tinkering with the latest
            technologies. After studying literature and poetry, I recognized that
            my enjoyment of deconstructing and analyzing large pieces of writing
            was mirrored in the world of programming. I view my place in the field
            of software engineering as one in which I have room to grow, and
            satiate my desire to never stop learning.
          </p>
        </div>
        <div class="tab-pane fade" id="technologies" role="tabpanel" aria-labelledby="technologies-tab">
          <div class="technologies">
            <div class="left">
              <h2>Front End:</h2>
              <div class="languages">
                <i title="HTML5" class="logo devicon-html5-plain-wordmark"></i>
                <i title="CSS3" class="logo devicon-css3-plain-wordmark"></i>
                <i title="JavaScript" class="logo devicon-javascript-plain"></i>
              </div>
              <h2>Back End:</h2>
              <div class="languages">
                <i title="Python" class="logo devicon-python-plain-wordmark"></i>
                <i title="MongoDB" class="logo devicon-mongodb-plain-wordmark"></i>
                <i title="PostgreSQL" class="logo devicon-postgresql-plain-wordmark"></i>
              </div>
              <h2>Frameworks:</h2>
              <div class="languages">
                <i title="Express" class="logo devicon-express-original-wordmark"></i>
                <i title="React.js" class="logo devicon-react-original-wordmark"></i>
                <i title="Node.js" class="logo devicon-nodejs-plain-wordmark"></i>
                <i title="Django" class="logo devicon-django-plain"></i>
              </div>
            </div>
            <div class="right">
              <h2>Technologies/Tools:</h2>
              <div class="languages">
                <i title="Git" class="logo devicon-git-plain"></i>
                <i title="Heroku" class="logo devicon-heroku-plain-wordmark"></i>
                <i title="Linux" class="logo devicon-linux-plain"></i>
              </div>
              <h2>Libraries</h2>
              <div class="languages">
                <i title="Bootstrap" class="logo devicon-bootstrap-plain-wordmark"></i>
                <i title="JQuery" class="logo devicon-jquery-plain-wordmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
          <Icon />
          <h2>General Assembly</h2>
          3 Month intensive bootcamp consisting of over 450 hours of building fluency in
          full-stack web development with a focus on object-oriented programming, MVC Frameworks,
          team colaboration strategies, and best coding practices.
        </div>
      </div>
    </div>
  )
}

export default About;
