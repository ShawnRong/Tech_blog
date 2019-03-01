/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// const { graphql } = require(`gatsby`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/posts/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'posts'

      // Update the page.
      createPage(page)
    }
    if (page.path.match(/^\/tags/)) {
      page.layout = 'tags'
      createPage(page)
    }
    resolve()
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: 'posts' + node.fields.slug,
          component: path.resolve(`./src/templates/single-post.js`),
          layout: 'single-post',
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
        node.frontmatter.tags.forEach(tag => {
          createPage({
            path: '/tags/' + tag,
            component: path.resolve(`./src/templates/tag.js`),
            layout: 'tag',
            context: {
              tag,
            },
          })
        })
      })
      resolve()
    })
  })
}
