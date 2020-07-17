import Clarityimg from "../../static/clarity-plot.svg"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"
import Pin from "../components/pin"

export default function Instructions({ children }) {
  return (
    <Row noGutters className="px-2">
      <Col md={4} className="pt-5 mt-5 text-center">
        <h2></h2>
        <Reveal>
          <h2>
            Patients were asked to rate how easy it was to understand the
            fasting instructions
          </h2>
        </Reveal>
        <Reveal>
          <h2>
            Nearly everyone found it <em>easy</em> to understand fasting
            instructions
          </h2>
        </Reveal>
      </Col>
      <Col md={8} className="pt-5 ">
        <Reveal>
          <Pin>
            <Clarityimg />
          </Pin>
        </Reveal>
      </Col>
    </Row>
  )
}
