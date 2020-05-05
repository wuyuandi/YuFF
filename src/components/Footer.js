import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterGroup = styled.div `
    background: #F1F3F5;
    padding: 50px 0px;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.div `
    font-size: 24px;
    font-weight: 900;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.div `
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px; 
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;  
    justify-self: center; 

`
const LinkGroup = styled.div `
    width: 500px;
    color: #5334F5;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;


`   


const Footer = ({data}) => (
    <FooterGroup>
        <Text>I am looking for a fontend job or anything relate to CS in Alberta area. Hope u enjoy my web and photography @YuFF </Text>
        <Button>Tweet</Button>
        <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.rl}>{edge.node.title}</a>
        ))}
        </LinkGroup>
    </FooterGroup>
)

export default Footer;