import Header from "./header"
import Authors from "./authors"
import { StaticQuery, graphql, Link } from "gatsby"

import React from "react"

import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Intro = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Row noGutters className="text-center">
          <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            <div className="spacer" />

            <Reveal>
              <Authors />
            </Reveal>
            <div className="spacer" />

            <Reveal>
              <div className={"spacer"}>
              <table borderless className="mx-auto text-center">
                <tr>
                  <th>
                    <p>6 hours</p>
                  </th>
                  <th>
                    <p>2 hours</p>
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
              <p className="text-center">
                Current guidelines for elective procedures performed with
                sedation or anesthesia recommend a minimum fasting duration of 2
                hours for clear fluids and 6 hours for food and non-clear
                fluids.
              </p>
              </div>
            </Reveal>
            <div className="spacer" />
            <Reveal>
              <div className={"spacer"}>

              <FontAwesomeIcon
                icon={["fad", "clock"]}
                size="10x"
                className="text-center"
              />
              <p>
                The duration of fasting frequently far exceeds these recommended
                time-frames.
              </p>
              <em className="font-weight-lighter">
                In a recent study of 3641 fasting orders at a large academic
                institution in the US, the median fasting duration was 12.8
                hours, averaging 2 missed meals.
                <OverlayTrigger
                  placement="top"
                  trigger="click"
                  overlay={
                    <Tooltip id="test">
                      <Row>
                        <Col>
                          <b>
                            Frequency and Appropriateness of Fasting Orders in
                            the Hospital
                          </b>
                          <p>
                            Atsushi Sorita, Charat Thongprayoon,Adil Ahmed et
                            al.
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
                  <sup>[REF]</sup>
                </OverlayTrigger>
              </em>
              </div>
            </Reveal>
            <div className="spacer" />

            <Reveal>
              <div className={"spacer"}>

              <FontAwesomeIcon icon={["fad", "glass"]} size="10x" />
              <p>
                Prolonged fluid restriction causes thirst symptoms to develop,
                which can lead to great discomfort.
              </p>
              <em className="font-weight-lighter">
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
                          A qualitative study into the impact of fasting within
                          a large tertiary hospital in Australia--the patients’
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
                  <sup>[REF]</sup>
                </OverlayTrigger>
              </em>
              </div>
            </Reveal>
          <div className="spacer" />

          <Reveal>
            <h2 className={"spacer"}>
              We recently conducted a study that validated a tool to measure
              thirst discomfort in patients who were fasted prior to procedures
              in the cardiac cath lab and interventional radiology at TGH.
            </h2>
          </Reveal>
          <div className="spacer" />
          <Reveal>
            <h2 className={"spacer"}>
              This brief report higlights some key findings from the study about the
              severity of thirst discomfort, duration of fasting and the types
              of instructions received by patients about pre-procedure fasting at TGH.
            </h2>
          </Reveal>
          </Col>
        </Row>
      </>
    )}
  />
)
export default Intro
