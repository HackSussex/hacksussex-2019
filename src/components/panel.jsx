import React from "react";
import styles from "./panel.module.css";

import Nav from "./nav.jsx";

/*
   Properties:
   - collapse
   - orientation
   - name
   - onLeftNav
   - onRightNav
   - onDownNav
   - onUpNav
*/

export default class Panel extends React.Component {
    render() {
        let openStyle = ""

        if (this.props.open)
            openStyle = this.props.collapse == "vert" ? styles.vertOpen : styles.horzOpen;
        else
            openStyle = this.props.collapse == "vert" ? styles.vertClosed : styles.horzClosed;

        const leftNav = this.props.onLeftNav &&
                        ( <Nav detail={this.props.left}
                               direction="left"
                               navAction={this.props.onLeftNav} /> )

        const rightNav = this.props.onRightNav &&
                         ( <Nav detail={this.props.right}
                                direction="right"
                                navAction={this.props.onRightNav} /> )

        const upNav = this.props.onUpNav &&
                      ( <Nav detail={this.props.up}
                             direction="up"
                             navAction={this.props.onUpNav} /> )

        const downNav = this.props.onDownNav &&
                        ( <Nav detail={this.props.down}
                               direction="down"
                               navAction={this.props.onDownNav} /> )

        return (
            <div className={styles.panel + " " + openStyle}>
                { upNav &&
                  <div className={styles.upNav}>
                      { upNav }
                  </div>
                }
                { rightNav &&
                  <div className={styles.rightNav}>
                      { rightNav }
                  </div>
                }
                { downNav &&
                  <div className={styles.botNav}>
                      { downNav }
                  </div>
                }
                { leftNav &&
                  <div className={styles.leftNav}>
                      { leftNav }
                  </div>
                }
                <div className={styles.panelContent}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

