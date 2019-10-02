import { graphql, useStaticQuery } from "gatsby";

const getSiteInformation = () => {
  const {
    allFile: {
      edges: [
        {
          node: {
            childMarkdownRemark: {
              frontmatter: { logo, name, tagline, description },
            },
          },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query siteInformationQuery {
      allFile(filter: { name: { eq: "site-information" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                logo
                name
                tagline
                description
              }
            }
          }
        }
      }
    }
  `);

  return {
    logo,
    name,
    tagline,
    description,
  };
};

export default getSiteInformation;
