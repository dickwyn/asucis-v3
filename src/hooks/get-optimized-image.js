import { graphql, useStaticQuery } from "gatsby";

const getOptimizedImage = () => {
  const { images } = useStaticQuery(graphql`
    query optimizedImageQuery {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            relativePath
          }
        }
      }
    }
  `);

  return images;
};

export default getOptimizedImage;
