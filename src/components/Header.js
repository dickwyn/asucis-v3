import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Image from "./image";

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="logo">
        <Image alt={siteTitle} />
      </div>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Team</Link>
        <Link to="/">Events</Link>
        <Link to="/">Our Partners</Link>
        <Link to="/">Contact</Link>
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
