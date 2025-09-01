import * as React from "react"
import { Helmet } from "react-helmet"
import * as styles from "../css/index.module.css"
import moonJarImg from "../assets/img/moon-jar.png"
import { Link } from "gatsby"

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
      </Helmet>

      {/* Main content */}
      <div className={styles.homePage}>
        <div className={styles.container}>
          <img
            className={styles.logo}
            src={moonJarImg}
            alt="pixel art of Korean moon jar"
          />
          <h1 className={styles.studioName}>moon jar studio</h1>
          <sub>illuminating worlds through the magic of play</sub>
          <div className={styles.nav}>
            <span className={styles.navItem}><a className={styles.navLink} href="#">purpose</a></span>
            <span className={styles.navItem}><a className={styles.navLink}  href="#">craft</a></span>
            <span className={styles.navItem}><Link className={styles.navLink} to="/blog">devlog</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
