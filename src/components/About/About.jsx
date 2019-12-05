import React from 'react';

import './About.css';

function About() {
  return(
    <div class="About">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="inner1 "></div>
          </div>
          <div class="carousel-item">
            <div class="inner2 d-block w-100"></div>
          </div>
          <div class="carousel-item">
            <div class="inner3 d-block w-100"></div>
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

      // <p>
      //   Curious and detail-oriented, I tend to approach problems with
      //   creativity and efficiency first, and enjoy tinkering with the latest
      //   technologies. After studying literature and poetry, I recognized that
      //   my enjoyment of deconstructing and analyzing large pieces of writing
      //   was mirrored in the world of programming. I view my place in the field
      //   of software engineering as one in which I have room to grow, and
      //   satiate my desire to never stop learning.
      // </p>

    </div>
  )
}

export default About;
