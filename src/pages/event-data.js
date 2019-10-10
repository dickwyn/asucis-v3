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
      {data.map(event => (
        <div key={event.id}>
          <p>{event.title}</p>
          <p>{event.photo}</p>
          <p>{event.description}</p>
          <p>{event.date}</p>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};
export default eventData;
