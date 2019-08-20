import React from "react";
import { Helmet } from "react-helmet";
import { PreApply } from "../components/apply.jsx";

export default () => (
    <div id="pre-application">
        <Helmet>
            <meta charset="utf-8" />
            <title>HackSussex - Application</title>
        </Helmet>
        <PreApply />
    </div>
    )
