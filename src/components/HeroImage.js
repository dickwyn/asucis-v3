import React from "react";
import BackgroundImage from "gatsby-background-image";
import getOptimizedImage from "../hooks/get-optimized-image";

const HeroImage = ({ className }) => {
  const imageData = getOptimizedImage();

  const heroImage = imageData.edges.find(
    image => image.node.relativePath === "hero.jpg"
  );

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={heroImage.node.childImageSharp.fluid}
    />
  );
};

export default HeroImage;
