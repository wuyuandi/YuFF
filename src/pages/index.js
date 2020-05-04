import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"





const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>PHOTOGRAPHY </h1>
          <h1>FONTEND DEVELOPER</h1>
          <Wave />  

        </div>
      </div>
      <div className="About_me">
          <h3>Yuandi Wu</h3>
          <p>Fontend (React.js) / Backend (Node.js) Developer<br/>Web crawler (Scrapy) / Python Developer <br/> Photographer /Content Creator<br/>Edmonton Alberta</p>
          
      </div>
      <div className="Cards">
        <div className="CardWrapper">
        <Card 
          title="Edmonton"
          text="StreetView"
          image={require('../images/DSC05990.jpg')} />
        <Card 
          title="Calgary"
          text="StreetView"
          image={require('../images/kajia.jpg')} />
        <Card 
          title="Edmonton"
          text="Bridge"
          image={require('../images/bridge.jpg')} />
        <Card 
          title="Edmonton"
          text="StreetView"
          image={require('../images/DSC05811.jpg')} />
        </div>
      </div>
      <Section 
        id="Section"
        image={require('../images/DSC05777.jpg')}
        logo={require('../images/YuFF_logo.png')}
        title="ABOUT ME"
        text="Bachelor of science (specialized in computer science) from University of Alberta. 
              Proficient in frontend developer (react.js, CSS, HTML5, etc)
              Proficient in Web Crawler (Scrapy)"
      />
    </div>

    
  </Layout>
)

export default IndexPage

