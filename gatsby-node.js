const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      title: String
      date: Date @dateformat
      slug: String
      description: String
    }
  `)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("🚨  Error while running GraphQL query.")
    return
  }

  const posts = result.data.allMdx?.nodes || []

  if (posts.length === 0) {
    reporter.warn("No MDX posts found. Check your gatsby-source-filesystem configuration.")
    return
  }

  posts.forEach(node => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: `${path.resolve(`./src/templates/blog-post.tsx`)}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
