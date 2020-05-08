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
const Privacy = () => (
	<Layout>
		<SEO title="Privacy" />
		<PrivacyWrapper img={require('../images/DSC05777.jpg')} >
        <WaveBottom><Wave /></WaveBottom>
        </PrivacyWrapper>
        

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Privacy