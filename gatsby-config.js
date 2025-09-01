module.exports = {
  siteMetadata: {
    title: "Moon Jar Studio",
    description: "Illuminating worlds through the magic of play",
    author: "yoonsie",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
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
        icon: "static/img/favicon/favicon.png", //i put static in path, chatgpt lied
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img`,
      },
    },
  ],
}
