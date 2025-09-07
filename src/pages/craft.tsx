import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import * as styles from "../css/craft.module.css"
import Navbar from "../components/Navbar.jsx"

const CraftPage = ({ data }) => {
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
    <div className={styles.craftContainer}>
      <h1 className={styles.pageTitle}>Craft</h1>
      <div className={styles.craftItem}>
        <iframe width="552" height="167" frameborder="0" src="https://itch.io/embed/3858787"><a href="https://nostalgiaddict.itch.io/cicada-chirping-academy">Cicada Chirping Academy by nostalgiaddict</a></iframe>
        <p className={styles.p}>
        Cicada Chirping Academy is a quirky fast-paced 1-v-1 arcade game where players match musical pitches using two custom cicada-inspired controllers, each with a knob and button. With a unique visual aesthetic and pitch-based gameplay, the game blends music, education (of cicadas!), nature, and gaming for an engaging competitive experience. Beyond its fun, the game offers a topical sociopolitical commentary.
        </p>
      </div>
    </div>
    </>
  )
}


export default CraftPage
