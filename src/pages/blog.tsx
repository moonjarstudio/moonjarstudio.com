import * as React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
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
