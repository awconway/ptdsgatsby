import Deviationimg from "../../static/fasting-deviation-plot.svg"

import React from "react"

import { Row, Col } from "react-bootstrap"
//scrollTrigger components
import Reveal from "../components/reveal"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Deviation({ children }) {
  return (
    <Row noGutters className="px-2 text-center">
      <Col >
        <Reveal>
          <div className="spacer" >

          <h1>Fasting duration</h1>
          <hr />
          <FontAwesomeIcon   icon={["fad", "clock"]} size="6x"/>
          </div>
          <Deviationimg />

          <h2>
            Patients were fasted on average for about{" "}
            <b>
              <em>8 hours longer than was required</em>
            </b>
            , with many patients fasted far longer than this.
          </h2>
        </Reveal>
      </Col>
    </Row>
  )
}
