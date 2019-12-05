import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import './Nav.css';

class Nav extends Component {


  render() {
    return(
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">ab</a>
        <ScrollspyNav
          scrollTargetIds={["Home", "About", "Projects", "Contact"]}
          activeNavClass="is-active"
          headerBackground="true"
          scrollDuration="200"
        >
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#Home"><span>Home</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#About"><span>About Me</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#Projects"><span>Projects</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#Contact"><span>Contact</span></a></li>
          </ul>
        </ScrollspyNav>
      </nav>
    )
  }
}

export default Nav;
