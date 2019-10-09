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
      {data}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default QueryPartnerOrgPage;
