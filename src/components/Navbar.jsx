import React from "react"
import { Link } from "gatsby"
import * as styles from "../css/navbar.module.css" // assuming you're using CSS modules

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <span className={styles.navItem}>
        <Link className={styles.navLink} to="/">home</Link>
      </span>
      <span className={styles.navItem}>
        <Link className={styles.navLink} to="/vision">vision</Link>
      </span>
      <span className={styles.navItem}>
        <Link className={styles.navLink} to="/craft">craft</Link>
      </span>
      <span className={styles.navItem}>
        <Link className={styles.navLink} to="/blog">devlog</Link>
      </span>
    </div>
  )
}

export default Navbar
