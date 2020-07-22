import React from "react"
//scrollTrigger components
import Reveal from "../components/reveal"

import Distributionimg from "../../static/distribution.svg"
import Fastingimg from "../../static/fasting.svg"

import { Row, Col, ListGroup } from "react-bootstrap"

export default function Discomfort({ children }) {
  return (
    <Row className="px-2">
      <Col className="text-center">
        <div className="spacer" />
        <Reveal>
            <h1>Thirst discomfort</h1>
            <hr />
            <em>
            The Perioperative Thirst Discomfort Scale was used to measure thirst
            discomfort
            </em>
          <p>
            Participants rated the severity of their thirst discomfort by rating
            how 'bothered' they were by the following sensations:
          </p>
          <ListGroup>
            <ListGroup.Item>"I want to drink water"</ListGroup.Item>
            <ListGroup.Item>"My mouth is dry"</ListGroup.Item>
            <ListGroup.Item>"My lips are dry"</ListGroup.Item>
            <ListGroup.Item>"My saliva is thick"</ListGroup.Item>
            <ListGroup.Item>"My tongue is thick" </ListGroup.Item>
          </ListGroup>
          <em>
            Possible responses were 0 = 'not bothered', 1 = 'slightly bothered',
            and 3 = 'very bothered'.
          </em>
        </Reveal>
        <div className="spacer" />
        <Reveal>
              <h2>
                Total scores for the scale can range from 0 (i.e. rated 'not
                bothered' for each item) to 10 (i.e. rated 'very bothered' for
                each item).
              </h2>
          <Distributionimg />
            </Reveal>
            <div className="spacer" />
            <Reveal>
              <h2>
                We did not observe an association between PTDS-5 and fasting
                duration for either fluids or food.
              </h2>
              <Fastingimg />
              <h2>
                This would suggest that it is important to assess thirst
                discomfort periodically, <em>regardless</em> of the duration of fasting.
              </h2>
            </Reveal>
      </Col>
    </Row>
  )
}
