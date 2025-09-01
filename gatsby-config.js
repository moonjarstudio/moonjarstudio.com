module.exports = {
  siteMetadata: {
    title: "Moon Jar Studio",
    description: "Illuminating worlds through the magic of play",
    author: "yoonsie",
    siteUrl: "https://moonjarstudio.com",
  },
  plugins: [
    // Filesystem plugins must come first
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog/`,
      },
    },

    // MDX v3 configuration - this is the key change
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // Add any remark plugins you need here
        ],
        mdxOptions: {
          remarkPlugins: [
            // Add remark plugins here if needed
          ],
          rehypePlugins: [
            // Add rehype plugins here if needed
          ],
        },
      },
    },

    // Other Gatsby plugins
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Moon Jar Studio",
        short_name: "MoonJar",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "static/img/favicon/favicon.png", // path relative to root
      },
    },
  ],
}
