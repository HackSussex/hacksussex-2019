import React from "react";
import styles from "./frontpage.module.css";

import logo from "../images/logo-gradient.png";

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
        <div className={styles.applyButton}>
            APPLY
        </div>
    </div>
)
