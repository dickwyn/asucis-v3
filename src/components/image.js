import React from "react";
import Img from "gatsby-image";
import getOptimizedImage from "../hooks/get-optimized-image";

const Image = props => {
  const images = getOptimizedImage();

  const placeholder = images.edges.find(
    image => image.node.relativePath === "logo.png"
  );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Img fluid={placeholder.node.childImageSharp.fluid} {...props} />;
};

export default Image;
