import React from 'react'
import Link from 'gatsby-link'

const blogIndex = ({data}) => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <p>{data.markdownRemark.edges.map(post => (
      <a herf={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
    ))}</p>
  </div>
)

export default blogIndex

export const pageQuery = graphql`
    query AllBlogPosts{
        markdownRemark(limit: 10){
            edges{
              node {
                frontmatter {
                  path
                  title
                }
              }
            } 
        }
    }
`