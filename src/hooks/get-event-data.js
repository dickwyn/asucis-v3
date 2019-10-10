import { graphql, useStaticQuery } from "gatsby";

const getEventData = () => {
  const events = useStaticQuery(graphql`
    query eventData {
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

  if (!events) return null;
  return events;
};

export default getEventData;
