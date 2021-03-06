import React, { useRef, useState } from 'react'
import { Container } from '../styles/center'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import Card from '../components/Card'

const Input = styled.input`
    margin: 0.5rem;
    font-size: 18px;
    width: 80%;
`
const Textarea = styled.textarea`
    margin: 0.5rem 0 0 0.5rem;
    font-size: 18px;
    width: 80%;
`

const Button = styled.button`
    font-size: 16px;
    padding: 0.5rem;
    margin: 16px auto 0 auto;
    display: flex;
    align-items: center;
    background-color: #4285f4;
    color: white;
    font-weight: bold;
    border: 1px solid #34a853;
    &:hover {
        background-color: #34a853;
        border: 1px solid #4285f4;
        cursor: pointer;
    }
`

const Contact = () => {
    const form = useRef()
    const [isSend, setIsSend] = useState(false)
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

                    if (result.text === 'OK') {
                        setIsSend(true)
                    }
                },
                (error) => {
                    console.log(error.text)
                    alert(error.text)
                }
            )
    }
    // style={{backgroundColor: '#4286f3',
    // backgroundImage: 'linear-gradient(90deg, #4286f3 0%, #eb4537 22%, #fac230 49%, #4286f3 75%, #55af7b 100%)'
    // }}
    return (
        <Container>
            {!isSend ? (
                <Card>
                    <h2>Leave a Message for me.</h2>
                    <br />
                    <p style={{ color: 'gray' }}>
                        My Email : momolly1024@gmail.com
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label>Your Name</label>
                            <Input
                                type='text'
                                name='user_name'
                                required
                                placeholder=''
                            />
                        </div>
                        <div>
                            <label>Your Email</label>
                            <Input type='email' name='user_email' required />
                        </div>
                        <div>
                            <label>Message</label>
                            <Textarea
                                required
                                name='message'
                                rows='5'
                                style={{ resize: 'none' }}
                            />
                        </div>
                        <Button type='submit' value='Send'>
                            send
                        </Button>
                    </form>
                </Card>
            ) : (
                <Card>
                    <h2>Thank you , I will reply as soon as possible. </h2>
                    <br />
                </Card>
            )}
        </Container>
    )
}

export default Contact
