import React from "react"

import {
  Row,
  Col,
  Container,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"
import { graphql, Link } from "gatsby"

//Page components

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//scrollTrigger components
import Reveal from "../components/reveal"
import Pin from "../components/pin"

export const query = graphql`
  query {
    clarityplot: file(relativePath: { eq: "clarity-plot.png" }) {
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
    <Container className="mx-auto">
      <Row>
        <Col>
          <table borderless className="font-weight-light text-sm">
            <tr>
              <th>Author</th>
              <th>Affiliation</th>
            </tr>
            <tr>
              <td>Aaron Conway</td>
              <td>
                RBC Chair in Cardiovascular Nursing Research | Peter Munk
                Cardiac Centre | University Health Network
              </td>
            </tr>
            <tr>
              <td>Sebastian Mafeld</td>
              <td>
                Interventional Radiology | JDMI | Toronto General Hospital
              </td>
            </tr>
            <tr>
              <td>Babak Taati</td>
              <td>
                Scientist | Toronto Rehabilitation Institute | University Health
                NetworkAssistant Professor | Department of Computer Science |
                University of Toronto
              </td>
            </tr>
          </table>
        </Col>
      </Row>
      <Reveal>
        <Row>
          <Col>
            <table borderless className="mx-auto text-center">
              <tr>
                <th>
                  <h3>6 hours</h3>
                </th>
                <th>
                  <h3>2 hours</h3>
                </th>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={["fad", "sandwich"]} size="10x" />
                </td>
                <td>
                  <FontAwesomeIcon icon={["fad", "glass"]} size="10x" />
                </td>
              </tr>
            </table>
            <h3 className="text-center">
              Current guidelines for elective procedures performed with sedation
              or anesthesia recommend a minimum fasting duration of 2 hours for
              clear fluids and 6 hours for food and non-clear fluids.
            </h3>
          </Col>
        </Row>
      </Reveal>
      <Reveal>
        <Row className="align-items-center">
          <Col lg={3} className="mx-auto text-center">
            <FontAwesomeIcon icon={["fad", "clock"]} size="10x" />
          </Col>
          <Col lg={9} className="mx-auto text-center">
            <h1>
              The duration of fasting frequently far exceeds these recommended
              time-frames.
            </h1>
            <em>
              In a recent study of 3641 fasting orders at a large academic
              institution in the US, the median fasting duration was 12.8 hours,
              averaging 2 missed meals.
              <OverlayTrigger
                placement="top"
                trigger="click"
                overlay={
                  <Tooltip id="test">
                    <Row>
                      <Col>
                        <b>
                          Frequency and Appropriateness of Fasting Orders in the
                          Hospital
                        </b>
                        <p>
                          Atsushi Sorita, Charat Thongprayoon,Adil Ahmed et al.
                        </p>
                        <em>Mayo Clinic Proceedings</em>
                        <p>(2015)</p>
                        <Link
                          to="https://doi.org/10.1016/j.mayocp.2015.07.013"
                          target="_blank"
                        >
                          Link
                        </Link>
                      </Col>
                    </Row>
                  </Tooltip>
                }
              >
                <p className="text-sm">[REF]</p>
              </OverlayTrigger>
            </em>
          </Col>
        </Row>
      </Reveal>
      <Reveal>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <h1>
              Prolonged fluid restriction causes thirst symptoms to develop,
              which can lead to great discomfort.
            </h1>
            <em>
              Patients who adhered to prolonged fasting instructions have
              described the discomfort from thirst symptoms to be the worst
              physical effect of fasting, causing more discomfort than hunger,
              sleep, or anxiety related to the procedure.
              <OverlayTrigger
                placement="top"
                trigger="click"
                overlay={
                  <Tooltip id="test">
                    <Col>
                      <b>Perioperative thirst: a patient perspective</b>
                      <p>Madsen, Brosnan and Nagy</p>
                      <em>Journal of PeriAnesthesia Nursing</em>
                      <p>(1998)</p>
                      <p>
                        <Link
                          to="https://doi:10.1016/S1089-9472(98)80018-X"
                          target="_blank"
                        >
                          Link
                        </Link>
                      </p>
                      <b>
                        A qualitative study into the impact of fasting within a
                        large tertiary hospital in Australia--the patients’
                        perspective
                      </b>
                      <p>Carey, Conchin and Bloomfield-Stone</p>
                      <em>Journal of Clinical Nursing</em>
                      <p>(2015)</p>
                      <p>
                        <Link
                          to="https://doi:10.1111/jocn.12847"
                          target="_blank"
                        >
                          Link
                        </Link>
                      </p>
                    </Col>
                  </Tooltip>
                }
              >
                <p className="text-sm">[REF]</p>
              </OverlayTrigger>
            </em>
          </Col>
          <Col lg={4} className="mx-auto text-center">
            <FontAwesomeIcon icon={["fad", "glass"]} size="10x" />
          </Col>
        </Row>
      </Reveal>
      <Reveal>
        <Row className="align-items-center">
          <h1>
            We recently conducted a study that validated a tool to measure
            thirst discomfort in patients who were fasted prior to procedures in
            the cardiac cath lab and interventional radiology at TGH.
          </h1>
        </Row>
      </Reveal>
      <Reveal>
        <Row className="align-items-center">
          <h1>
            This report describes some key findings from the study about the
            severity of thirst discomfort, duration of fasting and the types of
            instructions received by patients about pre-procedure fasting.
          </h1>
        </Row>
      </Reveal>
      <Row>
        <Reveal>
          <Pin>
            <Col>
              <Img fixed={data.clarityplot.childImageSharp.fixed} alt="" />
            </Col>
          </Pin>
        </Reveal>
        <Col>
          <Reveal>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
          </Reveal>
          <Reveal>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
          </Reveal>
          <Reveal>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
          </Reveal>
          <Reveal>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
            <p>
              This is a Gatsby Starter that I frequently use to get jump started
              on quick website builds. It includes the following packages:
            </p>
          </Reveal>
        </Col>
      </Row>
      <Pin>
        <Row className="justify-content-center my-3">
          <Col md="6">
            <ListGroup>
              <ListGroup.Item
                action
                href="https://getbootstrap.com"
                target="_blank"
              >
                Bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-bootstrap.github.io/"
                target="_blank"
              >
                react-bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-icons.netlify.com"
                target="_blank"
              >
                react-icons
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
                target="_blank"
              >
                gatsby-plugin-sass
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Pin>
      <Row>
        <Reveal>
          <Col className="mx-auto">
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Reveal>
        <Reveal>
          <Col className="mx-auto">
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Reveal>
        <Reveal>
          <Col className="mx-auto">
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Reveal>
        <Reveal>
          <Col className="mx-auto">
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Reveal>
        <Reveal>
          <Col className="mx-auto">
            <p>
              This starter also includes a navbar that sticks to the top of the
              screen when the user scrolls past it, and a footer that stays at
              the bottom of the screen.
            </p>
            <p>
              For more documentation on these packages and how they work, please
              refer to the pages linked in the list above.
            </p>
          </Col>
        </Reveal>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
