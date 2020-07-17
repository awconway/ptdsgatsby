/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "@fortawesome/fontawesome-svg-core/styles.css"

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
    <Container fluid>
      <Row noGutters>
        <Col>
          <main>{children}</main>
        </Col>
      </Row>

      {/* <Row noGutters>
        <Col className="footer-col">
          <footer>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </footer>
        </Col>
      </Row> */}
    </Container>
  )
}
