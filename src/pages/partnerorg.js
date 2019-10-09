import React from "react";
import { Link } from "gatsby";

import getPartnerOrganization from "../hooks/get-partner-organization";
import Layout from "../components/layout";
import SEO from "../components/seo";

const QueryPartnerOrgPage = () => {
  const data = getPartnerOrganization();
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Partner Organizations</h1>
      <p>Data</p>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <p>{post.node.frontmatter.title}</p>
          <p>{post.node.frontmatter.email}</p>
          <p>{post.node.frontmatter.photo}</p>
          <p>{post.node.frontmatter.link}</p>
          <p>{post.node.frontmatter.description}</p>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};
export default QueryPartnerOrgPage;
