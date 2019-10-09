import { graphql, useStaticQuery } from "gatsby";

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
  if (!orgs) return null;
  return orgs;
};

export default getPartnerOrganization;
