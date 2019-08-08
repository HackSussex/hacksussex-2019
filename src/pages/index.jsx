import React from "react"
import { Canvas, Layout, Panel, FrontPage } from "../components/layout.jsx"
import { Faq } from "../components/faq.jsx"
import { About } from "../components/about.jsx"

import logo from "../images/logo-black.png"

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor. Curabitur ut condimentum neque, at ornare est. Maecenas mollis augue nunc, eget luctus est iaculis sit amet. Mauris nec suscipit libero, non rhoncus tellus. Vivamus gravida porta pulvinar. Maecenas dapibus tempus est non fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget nisi nec mi sagittis accumsan. Fusce aliquet accumsan sem non auctor. Ut vitae nunc cursus, placerat massa sit amet, ullamcorper sem. Vestibulum sapien est, sodales at tempor vel, rhoncus in orci. Aenean sit amet lacus lorem. Nullam sagittis a urna ullamcorper ultrices. "


export default () => (
    <div id="root">
        <Layout>
            <div id="about" key="0">
                <About title="About HackSussex">
                    { placeholder }
                </About>
            </div>
            <div id="home" key="1">
                <FrontPage />
            </div>
            <div id="faq" key="2">
                <Faq />
            </div>
            <div id="sponsors" key="3">
                SPONSORS
            </div>
        </Layout>

        <Canvas />
    </div>
)
