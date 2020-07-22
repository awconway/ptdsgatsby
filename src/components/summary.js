import React from "react"

import {Row, Col} from "react-bootstrap"
import Reveal from "./reveal";

export default function Summary({children}) {
    return (
        <Row noGutters className="px-2">
            <Col className="pt-5 text-center">
                <Reveal>
                    <h1>Summary</h1>
                    <hr/>
                    <h2>
                        Results from this study show that patients at TGH are fasted for
                        periods of time that <em>far exceeded</em> recommendations for
                        pre-procedure fasting in clinical guidelines.
                    </h2>
                <br />
                <br />
                    <h2>
                        Thirst discomfort was common, but not associated with the duration
                        of fasting.
                    </h2>
                <br />
                <br />
                    <h2>
                        Initiatives to minimize the duration of pre-procedure fasting by
                        improving adherence to guideline recommendations (i.e. 2 hours for
                        clear fluids and 6-hours for food and non-clear fluids) are
                        warranted.
                    </h2>
                <br />
                <br />
                    <hr/>
                </Reveal>
            </Col>
        </Row>
    )
}
