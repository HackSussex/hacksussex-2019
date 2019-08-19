import React from "react";
import styles from "./frontpage.module.css";
import util from "./util.module.css";

import logo from "../images/logo-gradient.png";

const Link = ({ children, href, className }) => (
    <a href={href} className={util.clearLink + " " + className}>
        { children }
    </a>
)

export const FrontPage = ({ children }) => (
    <div className={styles.frontPage}>
        <div className={styles.logo}>
            <img src={logo} alt="Main Logo" />
        </div>
        <div className={styles.bigBar}>
        </div>
        <div className={styles.date}>
            9th - 10th November, 2019
        </div>
        <div className={styles.medBar}>
        </div>
        <div className={styles.location}>
            University of Sussex, Brighton
        </div>
        <div className={styles.smallBar}>
        </div>
        <Link href="/application" className={styles.applyButton}>
            APPLY NOW
        </Link>
        <p className={styles.navGuideKey}>
            Press down key or click arrow for more
        </p>
        <p className={styles.navGuideTouch}>
            Swipe down for more
        </p>
    </div>
)
