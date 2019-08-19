import React from "react";
import util from "./util.module.css";

export default ({ children, href, className }) => (
    <a href={href} target="_blank" className={util.clearLink + " " + className}>
        { children }
    </a>
)

