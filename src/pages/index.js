/*
 * @Author: yuandi wu
 * @Date: 2020-04-29 13:42:45
 * @LastEditTime: 2020-05-21 16:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /YuFF/src/pages/index.js
 */ 
/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 */

import React from "react"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"

import { Helmet } from "react-helmet"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>PHOTOGRAPHY </h1>
          <h1>FRONTEND DEVELOPER</h1>
          <Wave />  

        </div>
      </div>
      <div className="About_me">
          <h1>Yuandi Wu</h1>
          <p>Frontend (React.js) / Backend (Node.js) Developer<br/>Web crawler (Scrapy) / Python Developer <br/> Photographer /Content Creator<br/>Edmonton Alberta</p>
          
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
          title="Zhuhai"
          text="StreetView"
          image={require('../images/DSC05811.jpg')} />
        </div>
      </div>
      <Section 
        id="Section"
        image={require('../images/DSC05763.jpg')}
        title="ABOUT ME"
        text="Bachelor of science (specialized in computer science) from University of Alberta.<br/>
              Proficient in frontend developer (react.js, CSS, HTML5, etc)<br/>
              Proficient in Web Crawler (Scrapy)<br/>
              Knowledge: C, SQL, Machine Learning <br/>
              Learning: Node.js, Figma, Framer 
              "
      />
    </div>

    
  </Layout>
)

export default IndexPage

