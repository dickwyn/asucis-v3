import React from "react";
import Img from "gatsby-image";
import getOptimizedImage from "../hooks/get-optimized-image";

const Image = () => {
  const images = getOptimizedImage();

  const placeholder = images.edges.find(
    image => image.node.relativePath === "gatsby-icon.png"
  );

  return (
    <Img
      fluid={placeholder.node.childImageSharp.fluid}
      style={{ width: "200px" }}
    />
  );
};

export default Image;
