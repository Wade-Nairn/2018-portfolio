import React from 'react';
import Helmet from 'react-helmet';

const Post = ({data}) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    )
}

export default Post

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
            }
        }
    }
`