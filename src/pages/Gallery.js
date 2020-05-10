import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import WaveBackground from "../components/WaveBackground";

const Abb = styled.div `
	background: rgba(0,0,0, 0.2);
	height: 1000px;
`
const Area_Selection = styled.div `

`
const Gallery = () => (
	<Layout>
		<SEO title="Gallery" />
		<WaveBackground />	
		<Area_Selection>
    		<button></button>
    	</Area_Selection>
	<Abb>
	</Abb>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Gallery
