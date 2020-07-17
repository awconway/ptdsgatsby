import Participants from "./participants"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

import Pin from "../components/pin"

export default function ParticipantsSection({ children }) {
  return (
    <Row noGutters className="px-2">
      <Col md={8} className="pt-5 ">
        <Reveal>
          <Pin>
            <Participants />
          </Pin>
        </Reveal>
      </Col>
      <Col md={4} className="pt-5 mt-5 text-center">
        <Reveal>
          <h2></h2>
        </Reveal>
        <Reveal>
          <h2>
            From November 2019 to March 2020, we recruited 193 patients for the
            study.
          </h2>
        </Reveal>
        <Reveal>
          <h2>
            Slightly more than half of the participants were scheduled for a
            procedure in interventional radiology
          </h2>
        </Reveal>
      </Col>
    </Row>
  )
}
