import React from "react";
import { Link } from "gatsby";

import getPartnerOrganization from "../hooks/get-event-data";
import Layout from "../components/layout";
import SEO from "../components/seo";

const eventData = () => {
  const data = getEventData();
  return (
    <Layout>
      <SEO title="Events" />
      <h1>Events</h1>
      <p>Data</p>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <p>{post.node.frontmatter.title}</p>
          <p>{post.node.frontmatter.date}</p>
          <p>{post.node.frontmatter.photo}</p>
          <p>{post.node.frontmatter.description}</p>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};
export default eventData;
