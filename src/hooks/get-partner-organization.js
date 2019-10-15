import { graphql, useStaticQuery } from "gatsby";
import uuid from "uuid";

const getPartnerOrganization = () => {
  const orgs = useStaticQuery(graphql`
    query partnerOrganizationQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/partner-organization/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              email
              photo
              link
              description
            }
          }
        }
      }
    }
  `);

  const arrOrgs = [];

  orgs.allMarkdownRemark.edges.forEach(edge => {
    arrOrgs.push({
      id: uuid.v4(),
      title: edge.node.frontmatter.title,
      role: edge.node.frontmatter.role,
      photo: edge.node.frontmatter.photo,
      link: edge.node.frontmatter.link,
      description: edge.node.frontmatter.description,
    });
  });

  if (!orgs) return null;
  return arrOrgs;
};

export default getPartnerOrganization;
