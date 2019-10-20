import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import "../scss/App.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
