import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import getExecutiveMembers from "../hooks/get-exec-members";

const MemberPage = () => {
  const data = getExecutiveMembers();
  return (
    <Layout>
      <SEO title="Executive Members" />
      <h1>Executive Members</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <p>{post.node.frontmatter.title}</p>
          <p>{post.node.frontmatter.role}</p>
          <p>{post.node.frontmatter.photo}</p>
          <p>{post.node.frontmatter.link}</p>
          <p>{post.node.frontmatter.email}</p>
          <p>{post.node.frontmatter.description}</p>
        </div>
      ))}
      <Link to="/">Go to homepage</Link>
    </Layout>
  );
};

export default MemberPage;
