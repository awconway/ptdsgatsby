import Header from "../components/header"
import Authors from "../components/authors"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

export default function Footer({ children }) {
  return (
    <Reveal>
      <Row className="align-items-center pl-2">
        <Col sm={5}>
          <Authors />
        </Col>
        <Col sm={7}>
          <Header siteTitle="Pre-procedure fasting and thirst discomfort" />
        </Col>
      </Row>
    </Reveal>
  )
}
