import React from 'react'
import { graphql } from 'gatsby'
import Navigator from '../components/navigator'
import Chip from '@material-ui/core/Chip'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../layouts/single-post'

import 'prismjs/themes/prism-okaidia.css'

export default ({ data, transition }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={transition && transition.style}>
        <Helmet title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date} by <Link to="/">Shawn</Link>
        </p>
        <div>
          {post.frontmatter.tags.map((tag, id) => (
            <Link to={'/tags/' + tag} key={id}>
              <Chip
                label={tag}
                style={{ marginRight: '0.5rem', cursor: 'pointer' }}
              />
            </Link>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "DD MMM, YYYY")
      }
    }
  }
`
