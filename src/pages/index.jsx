import React from "react";
import { Canvas, Layout, Panel, FrontPage } from "../components/layout.jsx";
import { Challenges } from "../components/challenges.jsx";
import { About } from "../components/about.jsx";
import { Faq } from "../components/faq.jsx";

import logo from "../images/logo-black.png"

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor. Curabitur ut condimentum neque, at ornare est. Maecenas mollis augue nunc, eget luctus est iaculis sit amet. Mauris nec suscipit libero, non rhoncus tellus. Vivamus gravida porta pulvinar. Maecenas dapibus tempus est non fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget nisi nec mi sagittis accumsan. Fusce aliquet accumsan sem non auctor. Ut vitae nunc cursus, placerat massa sit amet, ullamcorper sem. Vestibulum sapien est, sodales at tempor vel, rhoncus in orci. Aenean sit amet lacus lorem. Nullam sagittis a urna ullamcorper ultrices. "

const faqs = [
    { question: "What is a hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor."
    },
    {
        question: "How do I get there?",
        answer: "Once in Brighton, you can either grab a train from Brighton stattion to Falmer, the uni being a short walk from there. Alternatively, you may get a  25 bus from Old Steine ( a short walk from Brighton ) which goes directly to Sussex Uni."
    }
]

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
            <div id="challenges" key="2">
                <Challenges />
            </div>
            <div id="faq" key="3">
                <Faq faqs={faqs} />
            </div>
        </Layout>

        <Canvas />
    </div>
)
