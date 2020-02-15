const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.relativePath
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                subTitle
                slug
              }
              parent {
                ... on File {
                  relativeDirectory
                }
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    throw result.errors
  }
  // Create pages.
  const pages = result.data.allMarkdownRemark.edges
  // Work on only the md files in the "pages" folder
  pages.filter(edge => edge.node.parent.relativeDirectory === 'pages')
    .forEach(page => {
      const context = {
        slug: page.node.frontmatter.slug
      }
      createPage({
        path: page.node.frontmatter.slug,
        component: path.resolve(`./src/templates/page.js`),
        context
      })
    })
}
