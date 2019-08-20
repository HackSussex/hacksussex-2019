import React from "react";
import { Helmet } from "react-helmet";
import { PostApply } from "../components/apply.jsx";

export default () => (
    <div id="postApply">
        <Helmet>
            <meta charset="utf-8" />
            <title>HackSussex - Application Complete</title>
        </Helmet>
        <PostApply />
    </div>
)
