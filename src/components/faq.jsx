import React from "react"
import styles from "./faq.module.css"

export const Question = ({ title, content, open }) => {
    const style = open ? styles.questionOpen : styles.questionClosed;
    return (
        <div className={styles.question + " " + style}>
            <div className={styles.questionTitle}>
                { title }
            </div>
            <div className={open ? styles.contentOpen : styles.contentClosed}>
                { content }
            </div>
            <div className={open ? styles.questionClose : styles.contentClosed}>
                <div className={styles.closeButton}>
                    X
                </div>
            </div>
            <div className={!open ? styles.questionExpand : styles.contentClosed}>
                V
            </div>
        </div>
    )
}

export class Faq extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.faq}>
                <div className={styles.faqTitle}>
                    Frequently Asked Questions
                </div>
                <div className={styles.faqContent}>
                    <Question title="What's a Hackathon?"
                              content="A Hackathon is a 24 Hour invention marathon"
                              open={true} />
                </div>
            </div>
        )
    }
}

