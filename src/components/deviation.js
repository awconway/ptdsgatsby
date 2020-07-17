import Deviationimg from "../../static/fasting-deviation-plot.svg"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"
import Pin from "../components/pin"

export default function Deviation({ children }) {
  return (
    <Row noGutters className="px-2">
      <Col md={4} className="pt-5 mt-5 text-center">
        <Reveal>
          <h2></h2>
        </Reveal>
        <Reveal>
          <h2>
            Patients were fasted on average for about{" "}
            <b>
              <em>8 hours longer than was required</em>
            </b>
            , with many patients fasted far longer than this.
          </h2>
        </Reveal>
        <Reveal>
          <h2>
            Fasting duration was similar regardless of the types of instructions
            received.
          </h2>
        </Reveal>
      </Col>
      <Col md={8} className="pt-5 ">
        <Reveal>
          <Pin>
            <Deviationimg />
          </Pin>
        </Reveal>
      </Col>
    </Row>
  )
}
