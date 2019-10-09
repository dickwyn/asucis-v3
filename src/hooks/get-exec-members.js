import { graphql, useStaticQuery } from "gatsby";

const getExecutiveMembers = () => {
  const execs = useStaticQuery(graphql`
    query teamQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            role: { in: ["President", "Treasurer", "Vice President"] }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              role
              photo
              link
              email
              description
            }
          }
        }
      }
    }
  `);

  if (!execs) return null;
  return execs;
};

export default getExecutiveMembers;
