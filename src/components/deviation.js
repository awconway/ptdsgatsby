import Deviationimg from "../images/fasting-deviation-plot.svg"

import React from "react"

import { Row, Col } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Deviation({ children }) {
  return (
    <Row noGutters className="px-2 text-center">
      <Col >
          <div className="spacer" >

          <h1>Fasting duration</h1>
          <hr />
          <FontAwesomeIcon   icon={["fad", "clock"]} size="6x"/>
          </div>
        <img src={Deviationimg} alt="Plot of fasting duration for food and fluids" width={"90%"}/>

          <h2>
            Patients were fasted on average for about{" "}
            <b>
              <em>8 hours longer than was required</em>
            </b>
            , with many patients fasted far longer than this.
          </h2>
      </Col>
    </Row>
  )
}
