import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import Wave from '../components/Wave';


//1792x920

const PrivacyWrapper = styled.div `
    background-image: url(${props => props.img});
    height: 700px;
    background-size: cover;
    background-position: center;
    position: relative;
`
const WaveBottom  = styled.div`
    position: absolute;
    width: 100%;
    bottom: -10px;

`
const PrivacyStatement = styled.div `
    color: rgba(26, 26, 26, 0.7);
    width: 960px;
    margin: 20px auto;
    font-size: 20px;

    
`
const Privacy = () => (
	<Layout>
		<SEO title="Privacy" />
		<PrivacyWrapper img={require('../images/DSC05777.jpg')} >
        <WaveBottom><Wave /></WaveBottom>
        </PrivacyWrapper>
        <PrivacyStatement>
        All photos published on web can be used for free. You can use them for commercial and noncommercial purposes. You do not need to ask permission from or provide credit to the photographer, although it is appreciated when possible.
        More precisely, web grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from web for free, including for commercial purposes, without permission from or attributing the photographer or web. This license does not include the right to compile photos from web to replicate a similar or competing service.
        </PrivacyStatement>
        
  </Layout>
)

export default Privacy