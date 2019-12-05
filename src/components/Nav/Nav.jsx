import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import './Nav.css';

class Nav extends Component {


  render() {
    return(
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Ab</a>
        <ScrollspyNav
          scrollTargetIds={["section_1", "section_2", "section_3"]}
          activeNavClass="is-active"
          headerBackground="true"
        >
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/"><span>Home</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#section_1"><span>About Me</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#section_2"><span>Projects</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#section_3"><span>Contact</span></a></li>
          </ul>
        </ScrollspyNav>
      </nav>
    )
  }
}

export default Nav;
