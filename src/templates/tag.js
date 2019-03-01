import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Layout from '../layouts/tag'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `包含标签"${tag}" 的 ${totalCount}篇日志`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <List>
        {edges.map(({ node }) => {
          const { date, title } = node.frontmatter
          return (
            <Link to={'/posts' + node.fields.slug} key={node.id}>
              <ListItem button>
                <ListItemText primary={title} secondary={date} />
              </ListItem>
            </Link>
          )
        })}
      </List>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
}

export default Tags

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
