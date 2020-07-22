import Instructionsimg from "../../static/instructions_plot.svg"

import React from "react"

import {Row, Col} from "react-bootstrap"
import Reveal from "../components/reveal"

import Clarityimg from "../../static/clarity-plot.svg";

export default function Instructions({children}) {
    return (
        <Row noGutters className="px-2 text-center">
            <Col>
                <Reveal>
                    <h1>Fasting instructions</h1>
                    <hr />
                    <em >
                        Patients were asked to briefly describe the instructions they
                        received for pre-procedure fasting and we mapped responses into
                        several categories</em>
                    <Instructionsimg/>

                    <h2 >
                        It was <em>very rare</em> for patients to receive separate
                        instructions for fasting intervals to distinguish between
                        food/non-clear fluids and clear fluids
                    </h2>
                </Reveal>

                <Reveal>
                    <h2>
                        Nearly everyone found it <em>easy</em> to understand fasting
                        instructions
                    </h2>
                    <Clarityimg />

                </Reveal>
            </Col>

        </Row>
    )
}
