import React from "react"
//scrollTrigger components
import Reveal from "../components/reveal"
import Pin from "../components/pin"

import Distributionimg from "../../static/distribution.svg"
import Fastingimg from "../../static/fasting.svg"

import { Row, Col, ListGroup } from "react-bootstrap"

export default function Discomfort({ children }) {
  return (
    <Row className="px-2">
      <Col className="text-center">
        <h2></h2>
        <Reveal>
          <h2>
            The Perioperative Thirst Discomfort Scale was used to measure thirst
            discomfort
          </h2>
        </Reveal>
        <Reveal>
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
          <p>
            Possible responses were 0 = 'not bothered', 1 = 'slightly bothered',
            and 3 = 'very bothered'.
          </p>
        </Reveal>
        <Row>
          <Col md={5}>
            <Reveal>
              <h2>
                Total scores for the scale can range from 0 (i.e. rated 'not
                bothered' for each item) to 10 (i.e. rated 'very bothered' for
                each item).
              </h2>
            </Reveal>
            <Reveal>
              <h2>Scores in the lower range were more common</h2>
            </Reveal>
          </Col>
          <Col md={7}>
            <Reveal>
              <Pin>
                <Distributionimg />
              </Pin>
            </Reveal>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h2></h2>
            <Reveal>
              <h2>
                We did not observe an association between PTDS-5 and fasting
                duration for either food or fluids.
              </h2>
            </Reveal>
            <Reveal>
              <h2>
                This would suggest that it is important to assess thirst
                discomfort periodically, regardless of the duration of fasting.
              </h2>
            </Reveal>
          </Col>
          <Col md={7}>
            <Reveal>
              <Pin>
                <Fastingimg />
              </Pin>
            </Reveal>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
