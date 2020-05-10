import React from 'react';
import Wave from './Wave';    
import styled from 'styled-components';



//small size of wave background comparing with the index.js one 

const WaveWrapper = styled.div `
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




const WaveBackground = () => (
    <WaveWrapper img={require('../images/DSC05777.jpg')} >
        <WaveBottom><Wave /></WaveBottom>
    </WaveWrapper>



)

export default WaveBackground;