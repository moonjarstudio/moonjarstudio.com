import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import * as styles from "../css/blog-post.module.css"

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Orbitron:wght@400..900&family=VT323&display=swap" rel="stylesheet" />
      </Helmet>
      {/* Main content */}
      <article className={styles.blogPost}>
        <h1 className={styles.pageTitle}>{post.frontmatter.title}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <div className={styles.content}>{children}</div>
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
