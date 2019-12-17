import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ImageLoader from '../ImageLoader/ImageLoader';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      drinksImages: ImageLoader(),
      photoIndex: 0,
      isOpen: false
    }
  }

  render() {
  const { photoIndex, isOpen } = this.state;
  const styles = {
    content: {
      top: '10%'
    }
  }
  return(
    <div className="Projects">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="inner1">
              <div className="content">
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
          <div className="carousel-item">
            <div className="inner2">
              <div className="content">
                <h2>Let's Grab Drinks</h2>
                <h3>Technologies Used:</h3>
                <h4>Python, Django, PostgreSQL</h4>
                <h3>The Idea:</h3>
                <p>
                  The concept of the project was to create a tool what would simplify the
                  process of organizing a group of friends to meet up for drinks. My teammate
                  and I wanted a one-stop webapp where users could log in, create events, and
                  invite their friends to attend, or weigh-in on the location or time to help
                  find something that works for everyone. We implimented a messaging feature
                  to allow attendees to easily communicate with eachother.
                </p>
                <div>
                  <img className="img-thumbnail img-fluid" title="Click for More" src={this.state.drinksImages[0].src} onClick={() => this.setState({ isOpen: true })}/>

                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.drinksImages[photoIndex].src}
                      nextSrc={this.state.drinksImages[(photoIndex + 1) % this.state.drinksImages.length].src}
                      prevSrc={this.state.drinksImages[(photoIndex + this.state.drinksImages.length - 1) % this.state.drinksImages.length].src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + this.state.drinksImages.length - 1) % this.state.drinksImages.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % this.state.drinksImages.length,
                        })
                      }
                      reactModalStyle={styles}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="inner3">
              <div className="content">
                <h2>The Cage Page</h2>
                <h3>Technologies Used:</h3>
                <h4>Node.js, Express.js, MongoDB, OAuth2, APIs</h4>
                <h3>The Idea:</h3>
                <p>
                  About two years ago, a group of friends and I started on a journey to watch
                  as many terrible Nicholas Cage movies as we could stomach. We quickly
                  discovered that the only way that we would survive the ordeal was if we came
                  up with a drinking game to go alongside each movie. Using the OMDB API, I
                  created a tool that would not only help us accomplish this, but also would allow
                  us to share our misery with others. The Cage Page allows users to view a list of
                  all of Nicholas Cages movies, along with a synopsis and rating, add them to their
                  own personal "Watched" list, and then add drinking game rules for those movies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
  }
}

export default Projects;
