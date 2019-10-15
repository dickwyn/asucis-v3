import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import getExecutiveMembers from "../hooks/get-executive-member";

const MemberPage = () => {
  const data = getExecutiveMembers();
  return (
    <Layout>
      <SEO title="Executive Members" />
      <h1>Executive Members</h1>
      {data.map(member => (
        <div key={member.id}>
          <p>{member.title}</p>
          <p>{member.role}</p>
          <p>{member.photo}</p>
          <p>{member.link}</p>
          <p>{member.email}</p>
          <p>{member.description}</p>
        </div>
      ))}
      <Link to="/">Go to homepage</Link>
    </Layout>
  );
};

export default MemberPage;
