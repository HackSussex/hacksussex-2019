import React from "react";
import styles from "./frontpage.module.css";
import util from "./util.module.css";

import logo from "../images/logo-gradient.png";
import background from "../images/sparse-icon-scatter-light.png";

const Link = ({ children, href, className }) => (
    <a href={href} className={util.clearLink + " " + className}>
        { children }
    </a>
)

export const LinkLined = ({ name, href, children }) => (
    <span className={util.link}>
        <a id={name} href={href} target="_blank">
            { children }
        </a>
    </span>
)

export const FrontPage = ({ children }) => (
    <div className={styles.frontPage}>
        <div className={styles.logo}>
            <img src={logo} alt="Main Logo" />
        </div>

        <div className={styles.afterVideo}>
            <iframe src="https://player.vimeo.com/video/244298907?loop=1&autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div className={styles.afterVideoMinimal}>
            <LinkLined name="aftervid-2017" href="https://www.youtube.com/watch?v=szez7KklvlM">
                Watch the 2017 after-video
            </LinkLined>
        </div>


        <div className={styles.info}>
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
        </div>

        <Link href="/application" className={styles.applyButton}>
            APPLY NOW
        </Link>
        { /*! /Mobi|Android/i.test(navigator.userAgent) ?
             <p className={styles.navGuideKey}>
             Press down key or click arrow for more
             </p>
             :
             <p className={styles.navGuideTouch}>
             Swipe down for more
             </p>*/
        }
    </div>
)
