import { graphql, useStaticQuery } from "gatsby";
import uuid from "uuid";

const getSocialMediaAccount = () => {
  const socialMediaAccounts = useStaticQuery(graphql`
    query socialMediaAccountQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/social-media/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              link
            }
          }
        }
      }
    }
  `);

  const arrSocialMediaAccounts = [];

  socialMediaAccounts.allMarkdownRemark.edges.forEach(edge => {
    arrSocialMediaAccounts.push({
      id: uuid.v4(),
      name: edge.node.frontmatter.name,
      link: edge.node.frontmatter.link,
    });
  });

  if (!socialMediaAccounts) return null;
  return arrSocialMediaAccounts;
};

export default getSocialMediaAccount;
