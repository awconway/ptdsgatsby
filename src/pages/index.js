import React from "react"
//Page components

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticipantsSection from "../components/participantsSection"
import Intro from "../components/intro"
import Deviation from "../components/deviation"
import Instructions from "../components/instructions"
import Discomfort from "../components/discomfort"
import Summary from "../components/summary"

export default function IndexPage({ children }) {
        return (
            <Layout pageInfo={{pageName: "index"}}>
                    <SEO title="Home" keywords={[`fasting`, `sedation`, `anesthesia`]}/>
                    <Intro/>
                    <ParticipantsSection/>
                    <div className="spacer"/>
                    <Instructions/>
                    <div className="spacer"/>
                    <Deviation/>
                    <div className="spacer"/>
                    <Discomfort/>
                    <div className="spacer"/>
                    <Summary/>
                    <div className="spacer"/>
                    <div className="spacer"/>
                    <div className="spacer"/>
            </Layout>
        )
}