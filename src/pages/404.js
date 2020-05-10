import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import WaveBackground from "../components/WaveBackground";
import styled, { keyframes, css } from "styled-components";
import '../components/404.css';
const NotFound = styled.div `
    width: 100%;
    height:500px;
    position:relative;
    display: grid;
    
`


const WaterBallWrapper = styled.div `
    width: 400px;
    height: 400px;
    border: 3px solid darkturquoise;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    padding: 10px;


`
const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <WaveBackground />
        <NotFound >
            <WaterBallWrapper>
                <div className="WaterBallWave">

                </div>



            </WaterBallWrapper>
        </NotFound>
    </Layout>
)

export default NotFoundPage
