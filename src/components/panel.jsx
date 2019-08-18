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
        const downNav = this.props.onDownNav &&
                        ( <Nav detail={this.props.down}
                               direction="down"
                               navAction={this.props.onDownNav} /> )

        return (
            <div className={styles.panel}>
                { downNav &&
                  <div className={styles.botNav}>
                      { downNav }
                  </div>
                }
                <div className={styles.panelContent}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

