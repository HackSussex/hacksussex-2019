import React from "react";
import Nav from "./nav.jsx";
import styles from "./faq.module.css";
import navStyle from "./nav.module.css";
import util from "./util.module.css";

import upArrow from "../images/arrow-up.svg";
import downArrow from "../images/arrow-down.svg";

function renderFaq(faq, ix) {
    return (
        <div key={ix} className={styles.faq}>
            <div className={styles.faqQuestion}>
                { faq.question }
            </div>
            <div className={styles.faqLine}>
            </div>
            <div className={styles.faqAnswer}>
                { faq.answer }
            </div>
        </div>
    )
}

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.footerInfo}>
            HackSussex 2019 ©
        </div>
    </div>
)

export const Faq = ({ faqs }) => {
    const renderedFaqs = faqs.map((faq, ix) => renderFaq(faq,ix))
    return (
        <div className={styles.faqSection}>
            <div className={styles.faqs}>
                <div className={styles.faqsTitle}>
                    Frequently Asked Questions
                </div>
                <div className={styles.faqsContent}>
                    { renderedFaqs }
                </div>
            </div>
            <Footer />
        </div>
    )
}
