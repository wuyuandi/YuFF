import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>PHOTOGRAPHY </h1>
          <h1>FONTEND DEVELOPER</h1>
          <p>Yuandi Wu</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>

    
  </Layout>
)

export default IndexPage
