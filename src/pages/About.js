import React from 'react';
import styled from 'styled-components';
import SEO from "../components/seo";
import '../components/About.css'


const About = () => (
    <div className="wholePage">
        <div className="card-container">
            <div className="image-wrapper">
                <img src={require('../images/mountain.jpg')} />
            </div>
            <div className="title-wrapper">
                <h1 className="title">Yuandi Wu</h1>     
                <p className="subtitle">Specialized in Computing Science<br />Frontend Developer</p>  
                <hr />
                <div className="icon-btns">
                    <ul>
                        <li><i className="iconfont icon-wechat"></i></li>
                        <li><i className="iconfont icon-mail"></i></li>
                        <li><i className="iconfont icon-instagram"></i></li>
                        <li><i className="iconfont icon-mianshulogo"></i></li>
                        <li><i className="iconfont icon-twitter"></i></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>



)
export default About
