import * as React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data, children }) => {
  const post = data.mdx
  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      {children}
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default BlogPostTemplate
