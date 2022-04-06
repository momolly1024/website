import React from 'react'
import { Wave } from 'react-animated-text'

const exampleStyle = {
    display: 'inline-block',
    marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
}

export const Wave1 = (props) => {
    const text = props.text ?? 'LOADING DATA'
    return (
        <div style={exampleStyle}>
            <Wave text={text} effect='stretch' speed={5.0} effectChange={2.0} />
        </div>
    )
}
