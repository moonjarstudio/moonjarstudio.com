import * as React from "react"
import { Helmet } from "react-helmet"
import "../css/styles.css"
import moonJarImg from "../assets/img/moon-jar.png"

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Page title */}
        <title>Moon Jar Studio</title>

        {/* Meta tags */}
        <meta name="description" content="Illuminating worlds through the magic of play" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />

        {/* Favicon */}
        <link rel="icon" href="/img/favicon/favicon.ico" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Main content */}
      <main style={{ fontFamily: "'Pixelify Sans', sans-serif", textAlign: "center", padding: "2rem" }}>
        <div className="container">
          <img
            className="center"
            src={moonJarImg}
            alt="pixel art of Korean moon jar"
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
          />
          <h1>moon jar studio</h1>
          <sub>illuminating worlds through the magic of play</sub>
        </div>
      </main>
    </>
  )
}

export default IndexPage
