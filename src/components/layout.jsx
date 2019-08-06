import React from "react";
import "./global.css";
import styles from "./layout.module.css";

import logo from "../images/logo-gradient.png";
import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg"


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
        this.state = { horzIx: 1, mode: "main" }
    }

    moveDir(dir) {
        switch(dir) {
            case "LEFT": this.setState(state => {
                return { horzIx: Math.max(state.horzIx-1,0), mode: state.mode }
            })
                break;
            case "RIGHT": this.setState(state => {
                return { horzIx: Math.min(state.horzIx+1,2),  mode: state.mode }
            })
                break;
            case "DOWN":this.setState({ mode: "foot" })
                break;
            case "UP": this.setState({ mode: "main" })
                break;
        }
    }

    handleKeyDown(event) {
        switch(event.key) {
            case "ArrowDown": this.moveDir("DOWN")
                break;
            case "ArrowLeft": this.moveDir("LEFT")
                    break;
            case "ArrowRight": this.moveDir("RIGHT")
                break;
            case "ArrowUp": this.moveDir("UP")
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
        console.log("Active: " + JSON.stringify(this.state))
        const kids = React.Children.toArray(this.props.children)

        const mainStyle = this.state.mode == "main" ? styles.open : styles.closed;
        const footStyle = this.state.mode == "foot" ? styles.open : styles.closed;

        const isOpen = n => this.state.horzIx == n ? styles.panelOpen : styles.panelClosed;

        return (
            <div className={styles.layout}>
                <div className={styles.main + " " + mainStyle}>
                    <Panel classes={isOpen(0)}
                           rightNavAction={() => this.moveDir("RIGHT") }>
                        {kids[0]}
                    </Panel>
                    <Panel classes={isOpen(1)}
                           leftNavAction={() => this.moveDir("LEFT")}
                           rightNavAction={() => this.moveDir("RIGHT")}>
                        {kids[1]}
                    </Panel>
                    <Panel classes={isOpen(2)}
                           leftNavAction={() => this.moveDir("LEFT")}>
                        { kids[2] }
                    </Panel>
                </div>
                <div className={styles.foot + " " + footStyle}>
                    {kids[3]}
                </div>
            </div>
        )
    }
}

export class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    handleMouseEnter() {
        this.setState({ active: true })
    }

    handleMouseLeave() {
        this.setState({ active: false })
    }

    render() {
        const ifVisible = (visible, navPart, extraClasses) => {
            const visibleClass = visible ? styles.navSectionShow : styles.navSectionHidden;
            return (
                <div className={visibleClass + " " + extraClasses}>
                    { navPart }
                </div>
            )
        }

        return (
            <div className={styles.nav + " " + this.props.className}
                 onMouseEnter={(ev) => this.handleMouseEnter(ev)}
                 onMouseLeave={(ev) => this.handleMouseLeave(ev)}
                 onClick={this.props.navAction}>
                { ifVisible(this.state.active, this.props.detail, this.props.detailClass) }
                { ifVisible(!this.state.active, this.props.icon) }
            </div>
        )
    }
}

export const Panel = ({ children, leftNavAction, rightNavAction, classes }) => {
    const left = (<Nav detail="ABOUT"
                       icon={<img src={leftArrow} />}
                       detailClass={styles.horzNavDetail}
                       className={styles.leftNav}
                       navAction={leftNavAction} />)

    const right = (<Nav detail="CHALLENGES"
                        icon={<img src={rightArrow} /> }
                        detailClass={styles.horzNavDetail}
                        className={styles.rightNav}
                        navAction={rightNavAction} />)

    return (
        <div className={styles.panel + " " + classes}>
            { leftNavAction ? left : <div></div> }
            <div className={styles.centerContent}>
                { children }
            </div>
            { rightNavAction ? right : <div></div> }
        </div>
    )
}


export const FrontPage = ({ children }) => (
    <div className={styles.frontPage}>
        <div className={styles.logo}>
            <img src={logo} alt="Main Logo" />
        </div>
        <div className={styles.bigBar}>
        </div>
        <div className={styles.date}>
            9th - 10th November, 2019
        </div>
        <div className={styles.medBar}>
        </div>
        <div className={styles.location}>
            University of Sussex, Brighton
        </div>
        <div className={styles.smallBar}>
        </div>
        <div className={styles.applyButton}>
            APPLY
        </div>
    </div>
)


//
