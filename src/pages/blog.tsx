import * as React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "../css/blog.module.css"
import { Helmet } from "react-helmet"

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

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
    <div className={styles.blogPosts}>
      <h1 className={styles.pageTitle}>Blog Posts</h1>
      {posts.map(post => (
        <Link className={styles.postLink} to={`/blog/${post.frontmatter.slug}`}  aria-label={`Read blog post: ${post.frontmatter.title}`}>
        <article className={styles.article} key={post.id}>
          <h2 className={styles.postTitle}>
              {post.frontmatter.title}
          </h2>
          <p className={styles.date}>{post.frontmatter.date}</p>
          <p className={styles.description}>{post.frontmatter.description}</p>
        </article>
        </Link>
      ))}
    </div>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
          description
        }
      }
    }
  }
`

export default BlogPage
