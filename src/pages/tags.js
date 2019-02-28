import React from 'react'
import { graphql } from 'gatsby'
import Chip from '@material-ui/core/Chip'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Layout from '../layouts/tags'

const TagsPage = ({ data }) => {
  return (
    <Layout>
      <Helmet title={'所有标签'} />
      <h1>所有标签</h1>
      {data.allMarkdownRemark.group.map(tag => (
        <Link to={'/tags/' + tag.fieldValue}>
          <Chip
            label={tag.fieldValue}
            style={{ marginRight: '0.5rem', cursor: 'pointer' }}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query AllTags {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
