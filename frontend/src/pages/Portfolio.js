import React, { useState, useRef } from 'react'
import { Container } from '../styles/center'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'

function Card({ children }) {
    // We add this ref to card element and use in onMouseMove event ...
    // ... to get element's offset and dimensions.
    const ref = useRef()

    // Keep track of whether card is hovered so we can increment ...
    // ... zIndex to ensure it shows up above other cards when animation causes overlap.
    const [isHovered, setHovered] = useState(false)

    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            // Array containing [rotateX, rotateY, and scale] values.
            // We store under a single key (xys) instead of separate keys ...
            // ... so that we can use animatedProps.xys.interpolate() to ...
            // ... easily generate the css transform value below.
            xys: [0, 0, 1],
            // Setup physics
            config: {
                mass: 10,
                tension: 400,
                friction: 40,
                precision: 0.00001,
            },
        }
    })

    return (
        <animated.div
            ref={ref}
            className='card'
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX ||
                            window.pageXOffset ||
                            document.body.scrollLeft))

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY ||
                            window.pageYOffset ||
                            document.body.scrollTop))

                // Set animated values based on mouse position and card dimensions
                const dampen = 50 // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.07, // Scale
                ]

                // Update values to animate to
                setAnimatedProps.start({ xys: xys })
            }}
            onMouseLeave={() => {
                setHovered(false)
                // Set xys back to original
                setAnimatedProps.start({ xys: [0, 0, 1] })
            }}
            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.to(
                    (x, y, s) =>
                        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                ),
            }}
        >
            {children}
        </animated.div>
    )
}

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
