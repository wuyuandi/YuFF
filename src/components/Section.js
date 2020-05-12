import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';

const SectionWrapper = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    height: 820px;
    display: grid;
    gird-template-rows: 300px auto;
    grip-gap: 20px;
    position: relative;
    @media (max-width: 640px) {
        height:920px;
    }
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }

`
const SectionLogo = styled.img`
    align-self: end;
    width: 200px;
    margin: 0 auto;
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    @media (max-width: 720px) {
        font-size: 40px;
    }
`
const SectionText = styled.p`
    color: #ffd38a;
`
const WaveBottom  = styled.div`
    position: absolute;
    width: 100%;
    bottom: -10px;

`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top:-20px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionWrapper image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText dangerouslySetInnerHTML={{__html: props.text}} />
        </SectionTitleGroup>
    </SectionWrapper>
    
)

export default Section;