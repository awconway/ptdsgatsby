import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

export default function Section({ children }) {
  return (
    <Reveal>
      <Row noGutters className="section">
        <Col md={4} className="pt-5 mt-5 text-center">
          {children}
        </Col>
      </Row>
    </Reveal>
  )
}
