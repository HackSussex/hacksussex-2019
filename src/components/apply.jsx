import React from "react";
import axios from "axios";
import styles from "./apply.module.css";
import util from "./util.module.css";
import logo from "../images/logo-gradient.png";
import Link from "./link.jsx";

const clientID = "7887ee06fcb554970bebc4473e4e442bb6a06b883c840c732c6b773ec54d971d"
const clientSecret = "9baf3f59ba83df9e6d7c95fd027cd7896ce80bf3c070a3f1af62782fec39f67f"


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
