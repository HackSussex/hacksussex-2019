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
            <iframe src="https://www.youtube-nocookie.com/embed/szez7KklvlM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={styles.afterVideoMinimal}>
            <Link name="HackSussex 2017" href="https://www.youtube.com/watch?v=szez7KklvlM">
                2017 AfterVideo
            </Link>
        </div>
    </div>
)
