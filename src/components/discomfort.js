import React from "react"
//scrollTrigger components

import Distributionimg from "../images/distribution.svg"
import Fastingimg from "../images/fasting.svg"

import { Row, Col, ListGroup } from "react-bootstrap"

export default function Discomfort({ children }) {
  return (
    <Row className="px-2">
      <Col className="text-center">
        <div className="spacer" />
            <h1>Thirst discomfort</h1>
            <hr />
            <em>
            The Perioperative Thirst Discomfort Scale was used to measure thirst
            discomfort
            </em>
          <br />
          <br />

          <p>
            Participants rated the severity of their thirst discomfort by rating
            how 'bothered' they were by the following sensations. Possible responses were 0 = 'not bothered', 1 = 'slightly bothered',
              and 3 = 'very bothered'.
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item >"I want to drink water"</ListGroup.Item>
            <ListGroup.Item>"My mouth is dry"</ListGroup.Item>
            <ListGroup.Item>"My lips are dry"</ListGroup.Item>
            <ListGroup.Item>"My saliva is thick"</ListGroup.Item>
            <ListGroup.Item>"My tongue is thick" </ListGroup.Item>


          </ListGroup>
          <br />
          <br />

          <h4>
                Total scores for the scale can range from 0 (i.e. rated 'not
                bothered' for each item) to 10 (i.e. rated 'very bothered' for
                each item).
              </h4>
            <img src={Distributionimg} alt="Plot of distribution of thirst discomfort scores" />
            <div className="spacer" />
              <h2>
                We did not observe an association between PTDS-5 and fasting
                duration for either fluids or food.
              </h2>
                <img src={Fastingimg} alt="Plot of association between thirst discomfort and fasting duration" />
              <h2>
                This would suggest that it is important to assess thirst
                discomfort periodically, <em>regardless</em> of the duration of fasting.
              </h2>
      </Col>
    </Row>
  )
}
