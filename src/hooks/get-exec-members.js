import { graphql, useStaticQuery } from "gatsby";
import uuid from "uuid";

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

  const arrExecs = [];

  execs.allMarkdownRemark.edges.forEach(edge => {
    arrExecs.push({
      id: uuid.v4(),
      title: edge.node.frontmatter.title,
      role: edge.node.frontmatter.role,
      photo: edge.node.frontmatter.photo,
      link: edge.node.frontmatter.link,
      description: edge.node.frontmatter.description,
    });
  });

  if (!execs) return null;
  return arrExecs;
};

export default getExecutiveMembers;
