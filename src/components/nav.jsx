import React from "react";
import styles from "./nav.module.css";

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
        const ifVisible = (visible, navPart, extraClasses="") => {
            const visibleClass = visible ? styles.navSectionShow : styles.navSectionHidden;
            return (
                <div className={visibleClass + " " + extraClasses}>
                    { navPart }
                </div>
            )
        }

        const icon = <img src={this.props.icon} alt={this.props.detail} />

        return (
            <div className={styles.nav + " " + this.props.extraClass}
                 onMouseEnter={(ev) => this.handleMouseEnter(ev)}
                 onMouseLeave={(ev) => this.handleMouseLeave(ev)}
                 onClick={this.props.navAction}>
                { ifVisible(this.state.active, this.props.detail, this.props.detailClass) }
                { ifVisible(!this.state.active, icon) }
            </div>
        )
    }
}
