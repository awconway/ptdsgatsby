/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Header from "./header"

import { Container, Row, Col } from "react-bootstrap"

// import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGlass,
  faSandwich,
  faClock,
  faTools,
  faChevronDoubleDown,
  faGrimace,
} from "@fortawesome/pro-duotone-svg-icons"

library.add(
  faGlass,
  faSandwich,
  faClock,
  faTools,
  faChevronDoubleDown,
  faGrimace
)

export default function Layout({ children }) {
  return (
    <>
    <Header />
    <Container >
      <Row >
        <Col >
          {children}
        </Col>
      </Row>
    </Container>
    </>
  )
}
