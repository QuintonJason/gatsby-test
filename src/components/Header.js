import * as PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "gatsby-link";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/Logo";

const HeaderWrapper = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default class Header extends Component {
  // define props
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
  }
  toggleMobileNav = e => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  };
  closeMobileNav = e => {
    this.setState({
      mobileNavOpen: false
    });
  };
  render() {
    const menuClass = this.state.mobileNavOpen ? "active" : "";

    return (
      <header className="header">
        <h1 className="t-hidden">Activate Conference</h1>
        <Link
          to="/"
          className="header__logo"
        >
          <Logo className="header__logo__img" />
        </Link>
        <button
          id="mobile-toggle"
          className={`toggle-icon ${menuClass}`}
          aria-label="Mobile menu"
          onClick={this.toggleMobileNav}
        >
          <span className="t-hidden">Menu</span>
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button>
        <nav id="main-nav" className="header__nav">
          <NavLink to="/workshops/" className="header__link">
            Workshops
          </NavLink>
          <NavLink to="/hackathon/" className="header__link">
            Hackathon
          </NavLink>
          <NavLink to="/conference/" className="header__link">
            Conference
          </NavLink>
          <NavLink to="/sponsors-partners/" className="header__link">
            Sponsors & Partners
          </NavLink>
          <NavLink to="/updates/" className="header__link">
            Updates
          </NavLink>
          <a href="https://www.picatic.com/140837" rel="noopener" className="header__link">Register</a>
          <a href="#0" rel="noopener" className="header__link">FB</a>
          <a href="#0" rel="noopener" className="header__link">IG</a>
          <a href="#0" rel="noopener" className="header__link">TW</a>
        </nav>
      </header>
    );
  }

  componentWillMount() {
    // fires immediately before the initial render
  }
  componentDidMount() {
  }
  componentWillReceiveProps() {
    // fires when component is receiving new props
  }
  // shouldComponentUpdate() {
  // // fires before rendering with new props or state
  // }
  componentWillUpdate() {
    // fires immediately before rendering
    // with new props or state
  }
  componentDidUpdate() {
    // fires immediately after rendering with new P or S
  }
  componentWillUnmount() {
    // fires immediately before component is unmounted
    // from DOM (removed)
  }
}
