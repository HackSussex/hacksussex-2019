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
    </div>
)
/*
   <iframe width="500" height="300" src="https://www.youtube-nocookie.com/embed/szez7KklvlM?controls=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 */
