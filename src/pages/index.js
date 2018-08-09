import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
  <div className="block1 landing">
    <h1>Welcome</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
  <div className="block about">
    <h1>A bit about me</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
<div className="block work">
    <h1>Places I've worked</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
  <div className="block contact">
      <h1>Contact</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
