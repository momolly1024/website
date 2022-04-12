import React from 'react'
import { Wave } from 'react-animated-text'

const exampleStyle = {
    display: 'inline-block',
    width: '100%',
    textAlign:'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
}

export const Wave1 = (props) => {
    const text = props.text ?? ''
    return (
        <div style={exampleStyle}>
            <Wave text={text} effect='stretch' speed={5.0} effectChange={2.0} />
        </div>
    )
}
