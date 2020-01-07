import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ImageLoader from '../ImageLoader/ImageLoader';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      drinksImages: ImageLoader()[0],
      cageImages: ImageLoader()[1],
      tattooImages: ImageLoader()[2],
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
                <h3>Tattoo Shop</h3>
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
                <h3>The Technical Stuff:</h3>
                <p>
                  This project was built using the MERN Stack, using AJAX calls to allow the
                  React front-end to communicate with the Express back-end and MongoDB hosted on
                  Atlas. It also uses Token-Based Authentication to allow a range of user options,
                  including levels of administration including Customer, Artist, and Reception/Apprentice.
                </p>
                <div>
                  <img className="img-thumbnail img-fluid" title="Click for More" src={this.state.tattooImages[0].src} onClick={() => this.setState({ isOpen: true })}/>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.tattooImages[photoIndex].src}
                      nextSrc={this.state.tattooImages[(photoIndex + 1) % this.state.tattooImages.length].src}
                      prevSrc={this.state.tattooImages[(photoIndex + this.state.tattooImages.length - 1) % this.state.tattooImages.length].src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + this.state.tattooImages.length - 1) % this.state.tattooImages.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % this.state.tattooImages.length,
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
            <div className="inner2">
              <div className="content">
                <h3>Let's Grab Drinks</h3>
                <h3>The Idea:</h3>
                <p>
                  The concept of the project was to create a tool what would simplify the
                  process of organizing a group of friends to meet up for drinks. My teammate
                  and I wanted a one-stop webapp where users could log in, create events, and
                  invite their friends to attend, or weigh-in on the location or time to help
                  find something that works for everyone. We implimented a messaging feature
                  to allow attendees to easily communicate with eachother.
                </p>
                <h3>The Technical Stuff:</h3>
                <p>
                  This project was built on a Python/Django stack, and uses PostgreSQL to persist
                  data in the back-end. It utilizes Django's built-in authentication to allow
                  the restriction of user privledges.
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
                <h3>The Cage Page</h3>
                <h3>The Idea:</h3>
                <p>
                  Two years ago, some masochistic friends and I decided to watch
                  as many terrible Nicholas Cage movies as we could stomach. We quickly
                  discovered that the only way to survive the ordeal was to create
                  a drinking game for each one. I created a tool that would not only help
                  us accomplish this, but would also allow us to share our misery with others.
                  The Cage Page allows users to view a list of Nicholas Cages movies - along
                  with synopses and ratings - add them to their own personal "Watched" list,
                  and then add their own drinking game rules.
                </p>
                <h3>The Technical Stuff:</h3>
                <p>
                  This project was built using a Node/Express Javascript stack, with a database
                  using MongoDB hosted on Atlas. The site makes multiple calls to OMDB (The Open
                  Movie Database) to display both a collection of films, as well as more details on
                  each movie. Users are authenticated using Google's OAuth2.
                </p>
                <div>
                  <img className="img-thumbnail img-fluid" title="Click for More" src={this.state.cageImages[0].src} onClick={() => this.setState({ isOpen: true })}/>
                  {isOpen && (
                    <Lightbox
                      mainSrc={this.state.cageImages[photoIndex].src}
                      nextSrc={this.state.cageImages[(photoIndex + 1) % this.state.cageImages.length].src}
                      prevSrc={this.state.cageImages[(photoIndex + this.state.cageImages.length - 1) % this.state.cageImages.length].src}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + this.state.cageImages.length - 1) % this.state.cageImages.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % this.state.cageImages.length,
                        })
                      }
                      reactModalStyle={styles}
                    />
                  )}
                </div>
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
