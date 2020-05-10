import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WaveBackground from "../components/WaveBackground";
import styled from "styled-components";
import '../components/404.css';
const NotFound = styled.div `
    width: 100%;
    height:500px;
    position:relative;
    display: grid;
`
const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <WaveBackground />
        <NotFound >
            <div className="WaterBallWrapper">
                <div className="WaterBallWave">
                </div>
            </div>
        </NotFound>
    </Layout>
)

export default NotFoundPage
