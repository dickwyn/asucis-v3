import React from "react";
import PropTypes from "prop-types";

const Alert = ({ children, link }) => {
  return (
    <div className="alert-banner">
      <p>
        {children}.{" "}
        {link !== "nourl" ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Alert.defaultProps = {
  link: "nourl",
};

export default Alert;
