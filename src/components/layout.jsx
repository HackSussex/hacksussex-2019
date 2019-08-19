import React from "react";
import _ from "lodash";
import Nav from "./nav.jsx";
import Panel from "./panel.jsx";
import "./global.css";
import styles from "./layout.module.css";
import navStyle from "./nav.module.css";

import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg"
import downArrow from "../images/arrow-down.svg";


export class Canvas extends React.Component {
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
        this.direction = "vert"
        this.sequence = [
            "home",
            "about",
            "faq",
        ]
        this.state = { ix : 0 }
    }

    checkSec(sectionName) {
        return true // this.sequence[this.state.ix] == sectionName
    }

    moveDown() {
        this.setState(s => ({ ix: Math.min(s.ix + 1, this.sequence.length-1) }))
    }

    moveUp() {
        this.setState(s => ({ ix: Math.max(s.ix - 1, 0) }))
    }

    handleKeyDown(event) {
        switch(event.key) {
            case "ArrowDown": this.moveDown()
                break;
            case "ArrowUp": this.moveUp()
                break;
        }
    }

    scroll(pos) {
        console.log("fire")
    }

    onScroll(e) {
        console.log("fir")
    }

    componentDidMount() {
        window.addEventListener("keydown", (ev) => this.handleKeyDown(ev), true)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", (ev) => this.handleKeyDown(ev))
    }

    render() {
        return (

            <div className={styles.layout}
                 ref="layout">
                <Panel name="home"
                       className={styles.homeSection}
                       open={this.checkSec("home")}
                       collapse={this.direction}>
                    { this.props.homeSection }
                </Panel>

                <Panel name="about"
                       className={styles.aboutSection}
                       open={this.checkSec("about")}
                       collapse={this.direction}>
                    { this.props.aboutSection }
                </Panel>

                <Panel name="faq"
                       className={styles.faqSection}
                       open={this.checkSec("faq")}
                       collapse={this.direction}>
                    { this.props.faqSection }
                </Panel>
            </div>
        )
    }
}


    // OLD STRUCTURE
    /*<div className={styles.layout}>
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
                       onUpNav={() => this.moveUp()}>
                    { this.props.faqSection }
                </Panel>
    </div>
    */
