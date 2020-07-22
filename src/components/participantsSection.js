import Participants from "./participants"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

export default function ParticipantsSection({ children }) {
  return (
    <Row noGutters className="px-2 text-center">
        <Col>
        <div className="spacer" />

        <Reveal>
          <h2 className={"spacer"}>
            From November 2019 to March 2020, we recruited 193 patients for the
            study.
          </h2>
        </Reveal>
        <div className="spacer" />

        <Reveal>
          <h2 className={"spacer"}>
            Slightly more than half of the participants were scheduled for a
            procedure in interventional radiology
          </h2>
        </Reveal>
        <div className="spacer" />

        <Reveal>
            <Row  className={"px-2 text-left"}>
                <Participants/>
            </Row>
        </Reveal>
        </Col>
    </Row>
  )
}
