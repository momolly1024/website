import React, { useRef, useState, useEffect, useCallback } from 'react'

import { Wave1 } from '../components/TextAnimation'
import MyTimeline from '../components/MyTimeline'

const About = () => {
    return (
        <div style={{textalign:'center'}}>
            <Wave1 text="I'm Molly :>     " />
            <MyTimeline>
                <p> timeline~~~~~</p>
            </MyTimeline>
        </div>
    )
}

export default About
