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
                        <li><i className="iconfont phs-twitter"></i></li>
                        <li><i className="iconfont phs-facebook"></i></li>
                        <li><i className="iconfont phs-Instagram"></i></li>
                        <li><i className="iconfont phs-email"></i></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>



)
export default About