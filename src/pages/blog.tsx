import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../css/styles.css"

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
      <link
        href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {/* Main content */}
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.description}</p>
        </article>
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
