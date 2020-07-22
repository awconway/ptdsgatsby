import React from "react"

import {graphql} from "gatsby"

//Page components

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticipantsSection from "../components/participantsSection"
import Intro from "../components/intro"
import Deviation from "../components/deviation"
import Instructions from "../components/instructions"
import Discomfort from "../components/discomfort"
import Summary from "../components/summary"


export const query = graphql`
  query {
    clarityplot: file(relativePath: { eq: "clarity-plot.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fastingDeviationPlot: file(
      relativePath: { eq: "fasting-deviation-plot-1200w-1500-h.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instructionsPlot: file(relativePath: { eq: "instructions_plot.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
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

export default IndexPage
