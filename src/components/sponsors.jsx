import React from "react";
import styles from "./sponsors.module.css";

function renderSponsor(sponsor) {
    let sponsorStyle
    switch (sponsor.tier) {
        case "platinum": sponsorStyle = styles.platinum
            break;
        case "gold": sponsorStyle = styles.gold
            break;
        case "silver": sponsorStyle = styles.silver
            break;
        case "other": sponsorStyle = styles.other
            break;
    }
    return (
        <div className={styles.sponsor + " " + sponsorStyle}>
            <div className={styles.sponsorLogo}>
                { sponsor.logo }
            </div>
        </div>
    )
}

export const Sponsors = ({ sponsors }) => (
    <div className={styles.sponsors}>
        <div className={styles.sponsorsTitle}>
            Our Sponsors
        </div>
        <div className={styles.sponsorsContent}>
            { sponsors.filter(s => s.tier == "platinum").map(renderSponsor) }
            { sponsors.filter(s => s.tier == "gold").map(renderSponsor) }
            { sponsors.filter(s => s.tier == "silver").map(renderSponsor) }
            { sponsors.filter(s => s.tier == "other").map(renderSponsor) }
        </div>
    </div>
)
