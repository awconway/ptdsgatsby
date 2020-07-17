import Instructionsimg from "../../static/instructions_plot.svg"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"
import Pin from "../components/pin"

export default function Instructions({ children }) {
  return (
    <Row noGutters className="px-2">
      <Col md={4} className="pt-5 mt-5 text-center">
        <Reveal>
          <h2></h2>
        </Reveal>
        <Reveal>
          <h2>
            Patients were asked to briefly describe the instructions they
            received for pre-procedure fasting.
          </h2>
        </Reveal>
        <Reveal>
          <h2>We mapped responses into several categories</h2>
        </Reveal>
        <Reveal>
          <h2>
            Slightly different approaches for fasting instructions were used
            between cath lab and IR
          </h2>
        </Reveal>
        <Reveal>
          <h2>
            Most patients scheduled to undergo a procedure in the cath lab were
            instructed to fast from midnight
          </h2>
        </Reveal>
        <Reveal>
          <h2>
            IR patients were instructed to fast from midnight or for a specified
            number of hours prior to the scheduled time of the procedure
          </h2>
        </Reveal>
      </Col>
      <Col md={8} className="pt-5 ">
        <Reveal>
          <Pin>
            <h2></h2>
            <Instructionsimg />
            <h2></h2>
          </Pin>
        </Reveal>
      </Col>
      <Row className="px-2">
        <Col className="text-center">
          <Reveal>
            <h2>
              It was <em>very rare</em> for patients to receive separate
              instructions for fasting intervals to distinguish between
              food/non-clear fluids and clear fluids
            </h2>
          </Reveal>
        </Col>
      </Row>
    </Row>
  )
}
