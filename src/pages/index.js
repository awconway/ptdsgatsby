import React from "react"

import { Container } from "react-bootstrap"
import { graphql } from "gatsby"

//Page components

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticipantsSection from "../components/participantsSection"
import Intro from "../components/intro"
import Deviation from "../components/deviation"
import Instructions from "../components/instructions"
import Clarity from "../components/clarity"
import Section from "../components/section"
import Discomfort from "../components/discomfort"
import Summary from "../components/summary"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

const IndexPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`fasting`, `sedation`, `anesthesia`]} />
    <Container fluid>
      <Intro />
      <ParticipantsSection />
      <Section>
        <h1>Fasting instructions</h1>
        <FontAwesomeIcon icon={["fad", "sandwich"]} size="6x" />
        <FontAwesomeIcon icon={["fad", "glass"]} size="6x" />
      </Section>
      <Instructions />
      <Clarity />
      <Section>
        <h1>Fasting duration</h1>
        <FontAwesomeIcon icon={["fad", "clock"]} size="6x" />
      </Section>
      <Deviation />
      <h2></h2>
      <Section>
        <h1>Thirst discomfort</h1>
      </Section>
      <Discomfort />
      <h2></h2>
      <Section>
        <h1>Summary</h1>
        <FontAwesomeIcon icon={["fad", "clock"]} size="6x" />{" "}
      </Section>
      <h2></h2>
      <Summary />
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <Footer />
    </Container>
  </Layout>
)

export default IndexPage
