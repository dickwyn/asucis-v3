import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Image from "./image";
import HeroImage from "./HeroImage";

const Header = ({ siteTitle }) => (
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
            <Image alt={siteTitle} />
          </div>
        </div>
        <div className="navigation">
          <div className="ticker">lorem ipsum dol somer text</div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/page-2">About Us</Link>
            <Link to="/executive-members">Our Team</Link>
            <Link to="/event-data">Events</Link>
            <Link to="/partnerorg">Our Partners</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    <HeroImage className="hero" />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `ASU Coalition of International Students`,
};

export default Header;
