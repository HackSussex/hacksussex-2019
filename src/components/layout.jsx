import React from "react";
import Nav from "./nav.jsx";
import Panel from "./panel.jsx";
import "./global.css";
import styles from "./layout.module.css";
import navStyle from "./nav.module.css";

import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg"
import downArrow from "../images/arrow-down.svg";


export class Canvas extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div ref="canvasBG" id={styles.canvasBG}>
            </div>
        )
    }
}

export class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            about: false,
            sponsors: false,
            challenges: false,
            faq: false,
            direction: "horz"
        }
    }

    clearAll() {
        Object.keys(this.state).forEach(key => this.state[key] = false)
    }

    replace(target) {
        this.clearAll()
        this.setState(s => Object.assign(s, target))
    }

    moveLeft() {
        if (this.state.home)
            this.replace({ about: true, direction: "horz" })
        else if (this.state.challenges)
            this.replace({ home: true, direction: "horz" })
    }

    moveRight() {
        if (this.state.about)
            this.replace({ home: true, direction: "horz" })
        else if (this.state.home)
            this.replace({ challenges: true, direction: "horz" })
        console.log(JSON.stringify(this.state))
    }

    moveDown() {
        if (this.state.faq)
            this.replace({ sponsor: true, direction: "vert" })
        else
            this.replace({ faq: true, direction: "vert" })
        console.log(JSON.stringify(this.state))
    }

    moveUp() {
        if (this.state.sponsor)
            this.replace({ faq: true, direction: "vert" })
        else if (this.state.faq)
            this.replace({ home: true, direction: "vert" })
        console.log(JSON.stringify(this.state))
    }

    handleKeyDown(event) {
        switch(event.key) {
            case "ArrowDown": this.moveDown()
                break;
            case "ArrowLeft": this.moveLeft()
                    break;
            case "ArrowRight": this.moveRight()
                break;
            case "ArrowUp": this.moveUp()
                break;
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", (ev) => this.handleKeyDown(ev))
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", (ev) => this.handleKeyDown(ev))
    }

    render() {
        return (
            <div className={styles.layout}>
                <Panel name="about" right="home" down="faq"
                       className={styles.aboutSection}
                       open={this.state.about}
                       collapse={this.state.direction}
                       onRightNav={() => this.moveRight()}
                       onDownNav={() => this.moveDown()}>
                    { this.props.aboutSection }
                </Panel>
                <Panel name="home" left="about" right="challenges" down="faq"
                       className={styles.homeSection}
                       open={this.state.home}
                       collapse={this.state.direction}
                       onRightNav={() => this.moveRight()}
                       onLeftNav={() => this.moveLeft()}
                       onDownNav={() => this.moveDown()}>
                    { this.props.homeSection }
                </Panel>
                <Panel name="challenges" left="home" down="faq"
                       className={styles.challengesSection}
                       open={this.state.challenges}
                       collapse={this.state.direction}
                       onLeftNav={() => this.moveLeft()}
                       onDownNav={() => this.moveDown()}>
                    { this.props.challengesSection }
                </Panel>
                <Panel name="faq" down="sponsors" up="home"
                       className={styles.faqSection}
                       open={this.state.faq}
                       collapse={this.state.direction}
                       onUpNav={() => this.moveUp()}
                       onDownNav={() => this.moveDown()}>
                    { this.props.faqSection }
                </Panel>
                <Panel name="sponsors" up="faq"
                       className={styles.sponsorsSection}
                       open={this.state.sponsors}
                       collapse={this.state.direction}
                       onUpNav={() => this.moveUp()}>
                    { this.props.sponsorsSection }
                </Panel>
            </div>
        )
    }
}






//
