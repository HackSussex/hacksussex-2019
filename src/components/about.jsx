import React from "react"
import styles from "./about.module.css"
import utilStyles from "./util.module.css"

export const Link = ({ name, href, children }) => (
    <span className={utilStyles.link}>
        <a id={name} href={href} target="_blank">
            { children }
        </a>
    </span>
)

export const About = ({ children, title }) => (
    <div className={styles.aboutContainer}>
        <div className={styles.title}>
            { title }
        </div>
        <div className={styles.content}>
            { children }
        </div>
        <div className={styles.afterVideo}>
            <strong>After-Video: </strong>
            <Link name="aftervid-2017" href="https://www.youtube.com/watch?v=szez7KklvlM"> 2017 </Link>
        </div>
    </div>
)
