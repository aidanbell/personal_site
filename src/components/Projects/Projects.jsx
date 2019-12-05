import React from 'react';

import './Projects.css';

function Projects() {
  return(
    <div class="Projects">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="inner1">
              <div class="content">
                <h2>Tattoo Shop</h2>
                <h3>Technologies Used:</h3>
                <h4>React.js, Express.js, MongoDB, Token-Based Auth</h4>
                <h3>The Idea:</h3>
                <p>
                  A personal friend of mine who runs a tattoo studio was lamenting on
                  how difficult the process of consultation is in 2019. I propsed the solution
                  of having a web app where customers could log in, request a consultation,
                  upload images, and send messages to the artist, all on one page. Meanwhile,
                  artists could log in and view their own requests, as well as change the status
                  of the request (Accepted, Payment Pending, etc) to better track all appointments
                  through their respective phases.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="inner2"></div>
          </div>
          <div class="carousel-item">
            <div class="inner3"></div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Projects;
