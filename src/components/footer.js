import Header from "../components/header"
import Authors from "../components/authors"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"

export default function Footer({ children }) {
  return (
    <Reveal>
      <Row >
          <Header siteTitle="Pre-procedure fasting and thirst discomfort" />
      </Row>
    </Reveal>
  )
}
