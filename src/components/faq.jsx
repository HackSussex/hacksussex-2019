import React from "react";
import Nav from "./nav.jsx";
import styles from "./faq.module.css";
import navStyle from "./nav.module.css";
import util from "./util.module.css";

import upArrow from "../images/arrow-up.svg";
import downArrow from "../images/arrow-down.svg";

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    toggle() {
        this.setState(s => ({ open: !s.open }))
    }

    render() {
        return (
            <div key={this.props.ix} className={styles.faq}
                 onClick={() => this.toggle()}>
                <div className={styles.faqQuestion}>
                    <div className={styles.questionText}>
                        { this.props.faq.question }
                    </div>
                    <div className={styles.collapseButton}>
                        <img src={this.state.open ? upArrow : downArrow} alt="collapse-arrow" />
                    </div>
                </div>
                <div className={styles.faqContent + " " + (!this.state.open && styles.contentClosed || "")}>
                    <div className={styles.faqLine}>
                    </div>
                    <div className={styles.faqAnswer}>
                        { this.props.faq.answer }
                    </div>
                </div>
            </div>
        )
    }
}

export const Faq = ({ faqs }) => {
    const renderedFaqs = faqs.map((faq, ix) => <Question faq={faq} ix={ix} />)
    return (
        <div className={styles.faqSection}>
            <div className={styles.faqs}>
                <div className={styles.faqsTitle}>
                    FAQ
                </div>
                <div className={styles.faqsContent}>
                    { renderedFaqs }
                </div>
            </div>
        </div>
    )
}
