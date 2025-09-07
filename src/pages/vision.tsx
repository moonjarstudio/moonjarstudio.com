import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../css/vision.module.css"
import Navbar from "../components/Navbar.jsx"

const VisionPage = ({ data }) => {
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
    <div className={styles.visionContainer}>
      <h1 className={styles.pageTitle}>Vision</h1>
        <p className={styles.p}>
          Our mission for <span className={styles.studioName}>moon jar studio</span> is to craft tools that help people to connect, heal, or learn through the magic of play.
        </p>
        <p className={styles.p}>
          We envision a world where tools are tailored to the unique way that our brains learn and engage with different worlds. A world where all ages can experimentally learn and fail, where the default is a growth mindset, where learning is playing and playing is living.
        </p>
      <h2 className={styles.about}>About</h2>
    </div>
    </>
  )
}


export default VisionPage
