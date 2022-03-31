import React, { useState, useRef } from 'react'
import { Container } from '../styles/center'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import Card from '../components/Card'

function Hero({ children }) {
    return (
        <div className='hero'>
            <div className='hero-body'>{children}</div>
        </div>
    )
}

function Image({ ratio, src }) {
    return (
        <div className='image-container'>
            <div className='image-inner-container'>
                <div
                    className='ratio'
                    style={{
                        paddingTop: ratio * 100 + '%',
                    }}
                >
                    <div className='ratio-inner'>
                        <img src={src} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Info() {
    return (
        <div className='info'>
            <h2>Portfolio (Sorting by Updated Date)</h2>

            {/* Springy cards from{' '}
            <a target='_blank' href='https://bit.ly/382KSdo' rel='noreferrer'>
                divjoy.com
            </a>
            <div className='notice'>(best viewed at larger screen width)</div> */}
        </div>
    )
}

const cards = [
    {
        title: 'Project ⚡️',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
        imageRatio: 784 / 1016,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
    {
        title: 'Project 👩‍🎨',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
        imageRatio: 839 / 1133,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },

    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },

    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
    {
        title: 'Project 🚀',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030,
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
    },
]
const Portfolio = () => {
    return (
        <Container>
            <div className='box'>
                <Hero>
                    <div className='container'>
                        <Info />
                        <div className='row'>
                            {cards.map((card, i) => (
                                <div className='column' key={i}>
                                    <Card>
                                        <div className='card-title'>
                                            {card.title}
                                        </div>
                                        <div className='icon'>
                                            <a
                                                href={card.link}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <FaLink />
                                            </a>

                                            <a
                                                href={card.github}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                        <div className='card-body'>
                                            {card.description}
                                        </div>
                                        <Image
                                            ratio={card.imageRatio}
                                            src={card.image}
                                        />
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </Hero>
            </div>
        </Container>
    )
}

export default Portfolio
