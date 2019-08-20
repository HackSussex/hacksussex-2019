import React from "react";
import axios from "axios";
import styles from "./apply.module.css";
import util from "./util.module.css";
import logo from "../images/logo-gradient.png";
import Link from "./link.jsx";

const clientID = "7927d1dfdf4d60c0ec15a87262793e12880bc37a094bc535caf53a334b2ee0eb"
const clientSecret = "c4eedbaee6a4d7e6c48af8e5232ec20b0bb24eae1b03a2cc52ce0dffef0c369b"

const Button = ({ children, href }) => (
    <Link href={href} className={styles.button}>
        { children }
    </Link>
)

const MyMLH = () => {
    const testRedirect = "https://confident-babbage-60726a.netlify.com/complete"
    const productionRedirect = "https://hacksussex.com/complete"

    const link = `https://my.mlh.io/oauth/authorize?client_id=${clientID}&redirect_uri=${productionRedirect}&response_type=code&scope=${scope}`

    return (
        <Button href={link}>
            REGISTER WITH MYMLH
        </Button>
    )
}

const Message = ({ message, button }) => (
    <div className={styles.messagePage}>
        <div className={styles.logo}>
            <img src={logo} alt="HackSussex Logo" />
        </div>
        <div className={styles.messageDetail}>
            { message }
        </div>
        { button }
    </div>
)

export const PreApply = () => {
    const text = `To streamline the signup process and have all your hacker information in one place, we're using MyMLH for registration this year`

    return (<Message message={text} button={<MyMLH />} />)
}

export const PostApply = () => {
    const text = (
        <p>
            Thanks for applying{"!"} We're looking forward to seeing you at HackSussex 2019.
            Make sure to check the <a href="/" className={styles.postApplyLink}>FAQ</a> (below the frontpage) for any additional information
        </p>
    )

    return (<Message message={text} button={<Button href="/">BACK HOME </Button>} />)
}
