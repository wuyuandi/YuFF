import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from '../components/Wave';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="Hero">
        <div className="HeroGroup">
          <h1>PHOTOGRAPHY </h1>
          <h1>FONTEND DEVELOPER</h1>
          <Wave />  

        </div>
    </div>
  </Layout>
)

export default NotFoundPage
