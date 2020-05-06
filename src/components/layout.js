/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      
      allContentfulLink(sort: {fields: [createdAt], order: ASC}){
        edges {
          node{
            title
            url
            createdAt
          }
        }
      }
      
    }
  `)

  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        
        <Footer data={data}>
        © {new Date().getFullYear()}, Built with Yuandi Wu.
          <a href="mailto:yuandi@ualberta.ca">Email me</a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
