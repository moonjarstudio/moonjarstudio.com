import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/styles.css"

const BlogPostTemplate = ({ data, children }) => {
  const post = data.mdx
  return (
    <>
      <Helmet>
        <title>Moon Jar Studio</title>
        <meta name="description" content="Illuminating worlds through the magic of play" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/img/favicon/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Main content */}
      <article className="blog-post">
        <h1 className="title">{post.frontmatter.title}</h1>
        <p className="blog-date">{post.frontmatter.date}</p>
        {children}
      </article>
    </>
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
