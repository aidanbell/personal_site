import React from 'react';

import './About.css';

function About() {
  return(
    <div class="About">
      <div class="Nav">
        <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="brand-tab" data-toggle="tab" href="#brand" role="tab" aria-controls="brand" aria-selected="true">Me:</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
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
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt mi nec scelerisque accumsan. Nulla at tellus molestie, semper ipsum sed, ullamcorper nibh. Duis vel lorem convallis, cursus metus sit amet, elementum libero. Pellentesque pellentesque, est vitae facilisis porttitor, lorem est sollicitudin magna, sit amet egestas mauris elit eget nibh. Sed ac bibendum justo. Nulla mattis eget ante id lacinia. Praesent elementum odio quis ornare lacinia. Quisque et diam sem. Integer sollicitudin felis quis mattis faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dictum ante nisi, nec varius elit dignissim quis. Fusce at blandit libero. Duis tristique dictum urna.
        </div>
      </div>
    </div>
  )
}

export default About;
