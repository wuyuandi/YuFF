import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Abb = styled.div `
  background: rgba(0,0,0, 0.5);
  height: 800px;
`

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <Abb>
    </Abb>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Gallery
