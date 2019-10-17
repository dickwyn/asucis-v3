import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import getSocialMediaAccount from "../hooks/get-social-media-account";

const IndexPage = () => {
  const socialMediaAccounts = getSocialMediaAccount();
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {socialMediaAccounts.map(account => (
        <a href={account.link} target="_blank" rel="noopener noreferrer">
          {account.name}
        </a>
      ))}

      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/executive-members">Go to Executive Members</Link>
      <Link to="/partnerorg/">Go to Partner Organizations</Link>
      <Link to="/event-data">Go to Events</Link>
      <Link to="/contact">Contact us!</Link>
    </Layout>
  );
};

export default IndexPage;