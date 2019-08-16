import React from "react";
import { Canvas, Layout, Panel } from "../components/layout.jsx";
import { FrontPage } from "../components/frontpage.jsx";
import { Challenges } from "../components/challenges.jsx";
import { About } from "../components/about.jsx";
import { Faq } from "../components/faq.jsx";
import { Sponsors } from "../components/sponsors.jsx";

import logo from "../images/logo-black.png"

const about = "HackSussex is the society behind the annual weekend long yearly hackathon at Sussex, an event where coders and designers from all across the country come down to compete in teams to build the best tech solutions they can in just 24 straight hours, with many prizes for the winning teams at the end, from both us and our sponsor. This is a fantastic opportunity to both enjoy yourself, boost your CV and above all learn something new, be it tech related or about working in a team. There's room for the competitive and the laid back, and a chance for people of any level of experience to win prizes!"

const faqs = [
    { question: "What is a hackathon?",
      answer: "A hackathon is essentially a 24 hour invention marathon. People come together, form teams, and hack on ideas together for 24 hours straight. Each team then pitches their hack to the judges and the best hacks win! All work presented at the end must have been done during the hackathon alone, to keep things fair. Additionally, sponsoring companies (and HackSussex itself) provide specific challenges teams can choose to work on to win particular prizes. These challenges are announced during the opening ceremony"
    },
    {
        question: "How do I get there?",
        answer: "Once in Brighton, you can either grab a train from Brighton stattion to Falmer, the uni being a short walk from there. Alternatively, you may get a  25 bus from Old Steine ( a short walk from Brighton ) which goes directly to Sussex Uni."
},
    {
        question: "How long is the hack?",
        answer: "The hacking period itself is 24 hours, however the event goes beyond that. Registration begins at 10AM on Saturday, and the closing ceremony will complete at 5PM on Sunday. Hacking hours are 12PM to 12PM Saturday to Sunday"
    },
    {
        question: "Can I get online without Eduroam access?",
        answer: "If you don't have access to Eduroam, you can connect to our network 'HackSussex'. You'll need to submit a few details but after that you'll be linked in and ready to go"
    },
    {
        question: "Is the venue accessible?",
        answer: "The venue is 100% accessible! If you have any specific questions, please get in touch by emailing admin@hacksussex.co.uk"
    },
    {
        question: "How will I form a team?",
        answer: "You can form teams both before and during the hack. If you have no team yet, don't worry! Our Slack channel will be open soon. There you can interact with potential team members, or just get to know other hackers before the day of the event. If you'd rather talk to us directly about teams we encourage you to. We're aiming to provide a very welcoming and comfortable event for everyone and are more than happy to help you find people you can hack with"
    },
    {
        question: "What do I need to bring?",
        answer: "All our hacker spots have dual monitor setups. That's right, everyone gets dual monitors! However, do not forget to bring either a display port or HDMI cable to plug in the monitors. Along with that we recommend a few basic overnight hacking essentials such as: A laptop and charger, toiletries, sleeping bag / blanket, or anything else you want to hack on (like a Raspberry Pi or something)."
    },
    {
        question: "What about food?",
        answer: "We will be serving all meals, taking all dietary requirements into consideration. Namely: vegetarian, vegan, lactose-free, and nut-free meals. For any further dietary requirements, make sure to indicate them on your application profile"
    }
]

const sponsorList = []

export default () => (
    <div id="root">
        <Layout
            aboutSection={<About title="About HackSussex">{ about }</About>}
            homeSection={<FrontPage />}
            challengesSection={<Challenges />}
            faqSection={<Faq faqs={faqs} />}
            sponsorsSection={<Sponsors sponsors={sponsorList} />} />
        <Canvas />
    </div>
)
