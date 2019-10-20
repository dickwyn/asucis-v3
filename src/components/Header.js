/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import uuid from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "./image";
import HeroImage from "./HeroImage";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: true,
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState(prevState => ({
      hamburger: window.innerWidth < 968 ? prevState.hamburger : true,
      width: window.innerWidth,
    }));
  };

  handleHamburger = () => {
    this.setState(prevState => ({
      hamburger: !prevState.hamburger,
    }));
  };

  render() {
    const { hamburger, width } = this.state;
    const { siteTitle } = this.props;
    const arrLinks = [
      { id: uuid.v4(), name: "Home", url: "/" },
      { id: uuid.v4(), name: "About Us", url: "/page-2" },
      { id: uuid.v4(), name: "Our Team", url: "/executive-members" },
      { id: uuid.v4(), name: "Events", url: "/event-data" },
      { id: uuid.v4(), name: "Our Partners", url: "/partnerorg" },
      { id: uuid.v4(), name: "Contact", url: "/contact" },
    ];

    return (
      <>
        <nav>
          <div className="navbar-container">
            <div className="aside-navigation">
              <div className="logo">
                <Link to="/">
                  <Image alt={siteTitle} />
                </Link>
                <p>asucis.com</p>
              </div>
              <div className="hamburger">
                <button
                  type="button"
                  className="hamburger-button"
                  onClick={this.handleHamburger}
                >
                  <FontAwesomeIcon icon={faBars} color="#fff" />
                </button>
              </div>
            </div>
            <div
              className="navigation"
              style={{
                visibility: !hamburger || width > 968 ? "visible" : "hidden",
              }}
            >
              <div className="ticker">lorem ipsum dol somer text</div>
              <div className="links">
                {arrLinks.map(link => (
                  <Link key={link.id} to={link.url}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <HeroImage className="hero" />
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `ASU Coalition of International Students`,
};

export default Header;
