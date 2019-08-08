import React from "react";
import styles from "./nav.module.css";

import rightArrow from "../images/arrow-right.svg";
import leftArrow from "../images/arrow-left.svg";
import downArrow from "../images/arrow-down.svg";
import upArrow from "../images/arrow-up.svg";

/*
   Properties:
   - detail
   - direction
   - navAction
*/

export default class Nav extends React.Component {
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
        const detailClass = this.props.direction == "left" || this.props.direction == "right"
                          ? styles.horzDetail
                          : styles.vertDetail;

        const ifVisible = (visible, navPart) => {
            const visibleClass = visible ? styles.navSectionShow : styles.navSectionHidden;
            return ( navPart &&
                <div className={visibleClass + " " + detailClass}>
                    { navPart }
                </div>
            )
        }

        let iconSrc
        if (this.props.direction == "left")
            iconSrc = leftArrow
        else if (this.props.direction == "right")
            iconSrc = rightArrow
        else if (this.props.direction == "up")
            iconSrc = upArrow
        else if (this.props.direction == "down")
            iconSrc = downArrow

        const icon = <img src={iconSrc} alt={this.props.detail} />

        return (
            <div className={styles.nav}
                 onMouseEnter={(ev) => this.handleMouseEnter(ev)}
                 onMouseLeave={(ev) => this.handleMouseLeave(ev)}
                 onClick={this.props.navAction}>
                { ifVisible(this.state.active, this.props.detail) }
                { ifVisible(!this.state.active, icon) }
            </div>
        )
    }
}
