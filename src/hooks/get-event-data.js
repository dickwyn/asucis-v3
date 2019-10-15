import { graphql, useStaticQuery } from "gatsby";
import uuid from "uuid";

const getEventData = () => {
  const events = useStaticQuery(graphql`
    query eventData {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/event/" } }) {
        edges {
          node {
            id
            frontmatter {
              date
              description
              photo
              title
            }
          }
        }
      }
    }
  `);

  const arrEvents = [];

  events.allMarkdownRemark.edges.forEach(edge => {
    arrEvents.push({
      id: uuid.v4(),
      title: edge.node.frontmatter.title,
      description: edge.node.frontmatter.description,
      photo: edge.node.frontmatter.photo,
      date: edge.node.frontmatter.date,
    });
  });

  if (!events) return null;
  return arrEvents;
};

export default getEventData;
