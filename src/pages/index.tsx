import * as React from "react"
import { Helmet } from "react-helmet"
import * as styles from "../css/index.module.css"
import moonJarImg from "../assets/img/moon-jar.png"
import { Link } from "gatsby"
import Navbar from "../components/navbar.jsx"

const IndexPage: React.FC = () => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Orbitron:wght@400..900&family=VT323&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Main content */}
      <Navbar />
      <div className={styles.homePage}>
        <div className={styles.container}>
          <img
            className={styles.logo}
            src={moonJarImg}
            alt="pixel art of Korean moon jar"
          />
          <h1 className={styles.studioName}>moon jar studio</h1>
          <sub className={styles.sub}>illuminating minds through the magic of play</sub>
        </div>
      </div>

    </>
  )
}

export default IndexPage
