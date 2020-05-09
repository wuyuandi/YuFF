import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import Wave from '../components/Wave';


//1792x920

const PrivacyWrapper = styled.div `
    background-image: url(${props => props.img});
    height: 600px;
    background-size: cover;
    background-position: center;
    position: relative;
`
const WaveBottom  = styled.div`
    position: absolute;
    width: 100%;
    bottom: -10px;

`
const PrivacyGroup = styled.div `
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 200px;
    grid-gap: 20px;
    margin-bottom:100px;
    
    

    @media (max-width: 900px) {
        height:520px;
        grid-template-columns: 1fr;
    }
`
const PrivacyTitle = styled.div `
    font-size: 40px;
    margin: 0;
    line-height: 1.2;
    color: rgba(26, 26, 26, 0.8);
    grid-template-rows: auto 100%;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        font-size: 40px;
    }
`


const PrivacyStatement = styled.p `
    color: rgba(26, 26, 26, 0.7);
    font-size: 20px;

    
`
const Privacy = () => (
	<Layout>
		<SEO title="Privacy" />
		<PrivacyWrapper img={require('../images/DSC05777.jpg')} >
        <WaveBottom><Wave /></WaveBottom>
        </PrivacyWrapper>
        <PrivacyGroup>
            <PrivacyTitle>
                Privacy Policy
            </PrivacyTitle>
            <PrivacyStatement>
                All photos published on web can be used for free. You can use them for commercial and noncommercial purposes. You do not need to ask permission from or provide credit to the photographer, although it is appreciated when possible.
                More precisely, web grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from web for free, including for commercial purposes, without permission from or attributing the photographer or web. This license does not include the right to compile photos from web to replicate a similar or competing service.
            </PrivacyStatement>

        </PrivacyGroup>
        
        
  </Layout>
)

export default Privacy