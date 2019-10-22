import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Alert from "./AlertBanner";
import Header from "./Header";
import Footer from "./Footer";
import "../scss/App.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="layout">
      <Alert link="https://facebook.com/asucis">
        Check out our upcoming Haunted House event. Happening October 31 at the
        Student Pavilion
      </Alert>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
