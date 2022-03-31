import React, { useRef } from 'react'
import { Container } from '../styles/center'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 14px;
    border: 1px black solid;
    box-shadow: 0px 1px 6px 0px rgb(32 33 36 / 28%);
`

const Gmail = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'momolly1024',
                'template_m8dyiht',
                form.current,
                'user_Ia7A0aTcu78ZYKDKwed8X'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    alert(result.text)
                },
                (error) => {
                    console.log(error.text)
                    alert(error.text)
                }
            )
    }

    return (
        <Container>
            <h2>Gmail</h2>
            <br />
            <Form>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>Name</label>
                        <input type='text' name='user_name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='user_email' />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            name='message'
                            rows='5'
                            style={{ resize: 'none' }}
                        />
                        <input type='submit' value='Send' />
                    </div>
                </form>
            </Form>
        </Container>
    )
}

export default Gmail
