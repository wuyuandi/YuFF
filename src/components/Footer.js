import React from 'react';
import styled from 'styled-components';


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
    
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;  
    justify-self: center; 
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    a {
        color:white;
    }
    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
        cursor: pointer;        
    }

`
const LinkGroup = styled.div `
    width: 500px;
    color: #5334F5;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;

    }
    a:hover {
        color:black;
        cursor: pointer;

    }
`

const Copyright = styled.div `
    color: #486791;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
`


const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>I am looking for a fontend job or anything relate to CS in Alberta area. Hope u enjoy my web and photography @YuFF </Text>
        <Button><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Come here and find out more photograph " data-url="http://www.yuff.ca" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </Button>
        <LinkGroup>
        {data.allContentfulLink.edges.map((edge,index) => (
        <a href={edge.node.rl} key={index}>{edge.node.title}</a>
        ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
    
)

export default Footer;
