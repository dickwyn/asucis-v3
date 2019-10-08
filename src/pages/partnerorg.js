import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QueryPartnerOrgPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Partner Organizations</h1>
    {data.allMarkdownRemark.edges.map(post => (
    <div>
        <p>{post.node.frontmatter.title}</p>
        <p>{post.node.frontmatter.email}</p>
        <p>{post.node.frontmatter.photo}</p>
        <p>{post.node.frontmatter.link}</p>
        <p>{post.node.frontmatter.description}</p>
    </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
    </Layout>
)
export const query = useStaticQuery(graphql`
{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/partner-organization/"}}) {
      edges {
        node {
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
`)

export default QueryPartnerOrgPage