import React from "react"
import { Canvas, Panels, Panel, FrontPage } from "../components/layout.jsx"
import { Challenges } from "../components/challenges.jsx"

import logo from "../images/logo-black.png"

const challengeList = [
    {
        name: "Rolls Royce Roof",
        brief: "Wow it's a rolls' royce roof for no apparent reason. すごいね。",
        sponsor: "Rolls Royce"
    },
    {
        name: "Rolls Royce Part II, Electric Boogaloo",
        brief: "Wow, this roof can't get enough. It's pretty electric",
        sponsor: "More Royce"
    },
    {
        name: "Yet Another Rolls Royce challenge",
        brief: "Oh boy. These keep coming don't they?",
        sponsor: "Royboy Rolling"
    }
]

const dateLoc = {
    date: "9th - 11th November 2019",
    loc: "University of Sussex, Brighton East Sussex"
}

export default () => (
    <div id="root">

        <Panels centerName="home" rightName="challenges" leftName="about" bottomName="faq">
            <div id="about" key="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque nibh sit amet pulvinar viverra. Nulla non dui ante. Ut iaculis, nunc at bibendum rhoncus, sapien eros vehicula velit, sit amet fringilla neque sem feugiat ipsum. Nullam in tortor volutpat elit auctor ullamcorper at at mi. Duis quis nulla commodo, maximus magna aliquam, mollis lacus. Integer mattis vitae mauris et ultrices. Aliquam interdum risus a tortor pellentesque facilisis. Sed convallis mollis nibh quis consequat. Sed eros enim, ultrices ac neque id, feugiat tristique felis.
            </div>
            <div id="home" key="1">
                <FrontPage />
            </div>
            <div id="challenges" key="2">
                <Challenges challenges={challengeList} />
            </div>
            <div id="faq" key="3">
                FAQ
            </div>
        </Panels>

        <Canvas />
    </div>
)
