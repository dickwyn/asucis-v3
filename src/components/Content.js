import React from "react";
import PropTypes from "prop-types";

const Content = ({ title, children }) => {
  return (
    <content>
      <contentheader>{title}</contentheader>
      <contentbody>{children}</contentbody>
      <divider>
        <br />
      </divider>
    </content>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
