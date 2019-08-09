import React from "react";
import axios from "axios";
import styles from "./apply.module.css";
import util from "./util.module.css";

const clientID = "7887ee06fcb554970bebc4473e4e442bb6a06b883c840c732c6b773ec54d971d"
const clientSecret = "9baf3f59ba83df9e6d7c95fd027cd7896ce80bf3c070a3f1af62782fec39f67f"

const Link = ({ children, href, className }) => (
    <a href={href} target="_blank" className={util.clearLink + " " + className}>
        { children }
    </a>
)

const Button = ({ children, href }) => (
    <Link href={href} className={styles.button}>
        { children }
    </Link>
)

const MyMLH = () => {
    const redirect = "https://confident-babbage-60726a.netlify.com/complete"
    const scope = "email+education+birthday"

    const link = `https://my.mlh.io/oauth/authorize?client_id=${clientID}&redirect_uri=${redirect}&response_type=code&scope=${scope}`

    return (
        <Button href={link}>
            Register with MyMLH
        </Button>
    )
}

export const PreApply = () => (
    <div className={styles.preApply}>
        <div className={styles.mlhDetail}>
            To streamline the signup process and have all your
            hacker information in one place, we're using MyMLH for
            registration this year
        </div>
        <MyMLH />
    </div>
)

export const PostApply = () => (
    <div className={styles.postApply}>
        <p className={styles.postApplyText}>
         Thanks for applying{"!"} We're looking forward to seeing you at HackSussex 2019.
            Make sure to check the <a href="/" className={styles.postApplyLink}>FAQ</a> (below the frontpage) for any additional information
        </p>
        <Button href="/">
                Back Home
        </Button>
    </div>
)
