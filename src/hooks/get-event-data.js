import { graphql, useStaticQuery } from "gatsby";

const getEventData = () => {
  const events = useStaticQuery(graphql`
    query eventData {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\\/event/"}}) {
        edges {
          node {
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

  if (!events) return null;
  return events;
};

export default getEventData;
