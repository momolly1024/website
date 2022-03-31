import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Container } from '../styles/center'
import { Wave1 } from '../components/TextAnimation'
const About = () => {
    return (
        <Container>
            <Wave1 text="I'm Molly :>" />
        </Container>
    )
}

export default About
