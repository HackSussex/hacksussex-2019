import React from "react";
import Nav from "./nav.jsx";
import styles from "./faq.module.css";
import navStyle from "./nav.module.css";

import upArrow from "../images/arrow-up.svg";
import downArrow from "../images/arrow-down.svg";

function renderFaq(faq, ix) {
    return (
        <div key={ix} className={styles.faq}>
            <div className={styles.faqQuestion}>
                { faq.question }
            </div>
            <div className={styles.faqAnswer}>
                { faq.answer }
            </div>
        </div>
    )
}


export const Faq = ({ faqs, onNavUp, onNavDown }) => {
    const renderedFaqs = faqs.map((faq, ix) => renderFaq(faq,ix))
    return (
        <div className={styles.faqSection}>
            <Nav detail="BACK"
                 icon={upArrow}
                 detailClass={navStyle.vertNavDetail}
                 extraClass={styles.navUp}
                 navAction={onNavUp} />
            <div classname={styles.faqs}>
                <div className={styles.faqsTitle}>
                    Frequently Asked Questions
                </div>
                <div className={styles.faqsContent}>
                    { renderedFaqs }
                </div>
            </div>
            <Nav detail="SPONSORS"
                 icon={downArrow}
                 detailClass={navStyle.vertNavDetail}
                 extraClass={styles.navDown}
                 navAction={onNavUp} />
        </div>
    )
}
