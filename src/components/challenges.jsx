import React from "react"
import styles from "./challenges.module.css"

function renderChallenge(challenge, key, open=true) {
    const style = open ? styles.challengeOpen : styles.challengeClosed
    return (
        <div className={styles.challenge + " " + style}
             key={`${key}`}>
            <div className={styles.title}>
                { challenge.name }
            </div>
            <div className={styles.description}>
                { challenge.brief }
            </div>
            <div className={styles.sponsor}>
                Sponsor: { challenge.sponsor }
            </div>
        </div>
    )
}

function renderChallenges(challenges) {
    return challenges.map((challenge, ix) => renderChallenge(challenge, ix, false))
}


export class Challenges extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: true,
                       active: false,
                       challenges: props.challenges }
    }

    render() {
        const visible = this.state.active
                      ? renderChallenge(this.state.active)
                      : renderChallenges(this.state.challenges)

        const hidden = ( <div>Yeet</div> )

        return (
            <div className={styles.challenges}>
                <div className={styles.challengesHeader}>
                    CHALLENGES
                </div>
                { this.state.visible ? visible : hidden }
            </div>
        )
    }
}
