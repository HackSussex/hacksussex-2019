import React from "react";
import { Canvas, Layout, Panel } from "../components/layout.jsx";
import { FrontPage } from "../components/frontpage.jsx";
import { Challenges } from "../components/challenges.jsx";
import { About } from "../components/about.jsx";
import { Faq } from "../components/faq.jsx";
import { Sponsors } from "../components/sponsors.jsx";

import logo from "../images/logo-black.png"

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor. Curabitur ut condimentum neque, at ornare est. Maecenas mollis augue nunc, eget luctus est iaculis sit amet. Mauris nec suscipit libero, non rhoncus tellus. Vivamus gravida porta pulvinar. Maecenas dapibus tempus est non fermentum."

const faqs = [
    { question: "What is a hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor."
    },
    {
        question: "How do I get there?",
        answer: "Once in Brighton, you can either grab a train from Brighton stattion to Falmer, the uni being a short walk from there. Alternatively, you may get a  25 bus from Old Steine ( a short walk from Brighton ) which goes directly to Sussex Uni."
    },
    { question: "What is a hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor."
    },
    { question: "What is a hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor."
    },
    { question: "What is a hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sodales mi, ut ultrices est. In in sem dolor."
    },
    {
        question: "How do I get there?",
        answer: "Once in Brighton, you can either grab a train from Brighton stattion to Falmer, the uni being a short walk from there. Alternatively, you may get a  25 bus from Old Steine ( a short walk from Brighton ) which goes directly to Sussex Uni."
    },
    {
        question: "How do I get there?",
        answer: "Once in Brighton, you can either grab a train from Brighton stattion to Falmer, the uni being a short walk from there. Alternatively, you may get a  25 bus from Old Steine ( a short walk from Brighton ) which goes directly to Sussex Uni."
    }
]

const sponsorList = []

export default () => (
    <div id="root">
        <Layout
            aboutSection={<About title="About HackSussex">{ placeholder }</About>}
            homeSection={<FrontPage />}
            challengesSection={<Challenges />}
            faqSection={<Faq faqs={faqs} />}
            sponsorsSection={<Sponsors sponsors={sponsorList} />} />
        <Canvas />
    </div>
)
