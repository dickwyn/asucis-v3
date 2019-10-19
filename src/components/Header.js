import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Image from "./image";

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <Image alt={siteTitle} />
        </Link>
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
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
