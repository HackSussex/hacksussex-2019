import React from "react"
import styles from "./challenges.module.css"

export class Challenges extends React.Component {
    constructor(props) {
        super(props)
        this.hackathon = new Date("November 9, 2019 00:00:01").getTime()
        this.state = { diff: 0 }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ diff: this.hackathon - new Date().getTime() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const time = new Date(this.state.diff)
        const timeFmt = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        return (
            <div className={styles.challenges}>
                <div className={styles.challengesTitle}>
                    CHALLENGES AVAILABLE DURING HACKATHON
                </div>
            </div>
        )
    }
}
