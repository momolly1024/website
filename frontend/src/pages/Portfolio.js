import React, { useState, useEffect } from 'react'
import { Container } from '../styles/center'
import { useSpring, animated } from 'react-spring'
import './styles.css'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import { AiFillMediumCircle } from 'react-icons/ai'

import Card from '../components/Card'
import styled from 'styled-components'

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
                        <img src={src} alt='' width={200} />
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
        title: 'personal calendar 👩‍🎨',
        description: 'personal calendar',
        image: 'https://i.imgur.com/1yGYkvI.png',
        imageRatio: 839 / 1133,
        type: ['react', 'python', 'fast api'],
        link: 'https://molly-personal-calendar.netlify.app/',
        github: 'https://github.com/momolly1024/personal-calendar',
        medium: 'https://molly1024.medium.com/react-%E7%B5%90%E5%90%88-python-api-%E5%AF%AB%E4%B8%80%E5%80%8B%E8%A1%8C%E4%BA%8B%E6%9B%86-app-%E4%BD%BF%E7%94%A8-fastapi-google-sheet-%E7%95%B6%E8%B3%87%E6%96%99%E5%BA%AB-ec6522dc3954',
    },
    {
        title: 'Line Bot 🚀',
        description: '找謎片機器人',
        image: 'https://i.imgur.com/B8abnO6.png',
        imageRatio: 730 / 1030,
        type: ['react', 'line bot', 'nodejs'],
        link: 'https://lin.ee/buW64fHx',
        github: 'https://github.com/momolly1024/LINEBOT-FOR-AVGLE',
        medium: '',
    },

    {
        title: 'StockPrice 🚀',
        description: 'line notify stock price',
        image: 'https://i.imgur.com/FPB5YHf.jpg',
        imageRatio: 730 / 1030,
        type: ['react', 'python', 'line notify'],
        link: '',
        github: 'https://github.com/momolly1024/StockPrice_python_lineNotify',
        medium: 'https://molly1024.medium.com/%E7%94%A8python%E5%AF%AB%E4%B8%80%E5%80%8Bline-notify-%E6%8E%A5%E6%94%B6%E5%8D%B3%E6%99%82%E8%82%A1%E5%83%B9%E9%80%9A%E7%9F%A5-use-python-to-get-the-real-time-stock-trade-price-by-line-notify-4d26deec85c4',
    },

    {
        title: 'CRUD todo list 🚀',
        description: 'todo list',
        image: 'https://i.imgur.com/W6rYowE.png',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: '',
        github: 'https://github.com/momolly1024/react_crud',
        medium: 'https://molly1024.medium.com/react-%E4%B8%80%E5%80%8B-crud-%E5%A2%9E%E6%94%B9%E5%88%AA%E6%9F%A5%E5%B0%88%E6%A1%88-9874b452ae36',
    },
    {
        title: '番茄鐘 POMODORO 🚀',
        description: 'vue',
        image: 'https://i.imgur.com/O2Mn1ZG.png',
        imageRatio: 730 / 1030,
        type: ['vue'],
        link: '',
        github: 'https://momolly1024.github.io/pomodoro/#/',
        medium: '',
    },
    {
        title: 'Login page 🚀',
        description: 'login page',
        image: 'https://i.imgur.com/6YuwqKu.gif',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: '',
        github: 'https://github.com/momolly1024/react_loginPage',
        medium: '',
    },
    {
        title: 'blog 🚀',
        description: '',
        image: 'https://i.imgur.com/NOjyWMp.jpg',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: 'https://momolly1024.github.io/react-website-blog/',
        github: 'https://github.com/momolly1024/react-website-blog',
        medium: '',
    },
    {
        title: 'weight record 🚀',
        description: '',
        image: 'https://i.imgur.com/jXHDvkB.png',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: '',
        github: 'https://github.com/momolly1024/react-crud-project',
        medium: '',
    },
    {
        title: 'covid tracker🚀',
        description: '',
        image: 'https://i.imgur.com/YdddeZS.png',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: '',
        github: 'https://github.com/momolly1024/react_covid19_tracker',
        medium: '',
    },
    {
        title: 'tv show Search🚀',
        description: '',
        image: 'https://i.imgur.com/DdXwlLz.png',
        imageRatio: 730 / 1030,
        type: ['react'],
        link: '',
        github: 'https://github.com/momolly1024/react_twshowSearch',
        medium: '',
    },
    {
        title: 'TEST ⚡️',
        description:
            'description description description description description description',
        image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
        imageRatio: 784 / 1016,
        type: ['react'],
        link: 'https://molly1024.medium.com/',
        github: 'https://github.com/momolly1024',
        medium: '',
    },
]
const sortType = [
    'all',
    'react',
    'python',
    'fast api',
    'line bot',
    'line notify',
    'nodejs',
    'vue',
]

const Tags = styled.span`
    margin-right: 8px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 20px;
    background-color: #f4b400;
    &:hover {
        cursor: pointer;
        background-color: #f5dd98;
    }
`

const Portfolio = () => {
    const [sortBy, setSortBy] = useState('all')
    useEffect(() => {
        console.log(sortBy)
    }, [sortBy])
    return (
        <Container>
            <div className='box'>
                <Hero>
                    <div className='container'>
                        <Info />
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '1rem',
                            }}
                        >
                            {sortType.map((r) => (
                                <Tags
                                    style={
                                        sortBy === r
                                            ? { backgroundColor: '#edd285' }
                                            : {}
                                    }
                                    key={r}
                                    onClick={() => setSortBy(r)}
                                >
                                    {r}
                                </Tags>
                            ))}
                        </div>

                        <div className='row'>
                            {cards.map((card, i) => (
                                <div className='column' key={i}>
                                    {console.log(
                                        card.type.indexOf(sortBy) > -1
                                    )}
                                    {card.type.indexOf(sortBy) > -1 ? (
                                        <>
                                            <Card>
                                                <div className='card-title'>
                                                    {card.title}
                                                </div>
                                                <div className='icon'>
                                                    {card.link !== '' ? (
                                                        <a
                                                            href={card.link}
                                                            target='_blank'
                                                            rel='noreferrer'
                                                        >
                                                            <FaLink />
                                                        </a>
                                                    ) : null}

                                                    {card.github !== '' ? (
                                                        <a
                                                            href={card.github}
                                                            target='_blank'
                                                            rel='noreferrer'
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    ) : null}

                                                    {card.medium !== '' ? (
                                                        <a
                                                            href={card.medium}
                                                            target='_blank'
                                                            rel='noreferrer'
                                                        >
                                                            <AiFillMediumCircle />
                                                        </a>
                                                    ) : null}
                                                </div>
                                                <div className='card-body'>
                                                    {card.description}
                                                </div>
                                                <Image
                                                    ratio={card.imageRatio}
                                                    src={card.image}
                                                />
                                            </Card>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    {sortBy === 'all' ? (
                                        <Card>
                                            <div className='card-title'>
                                                {card.title}
                                            </div>
                                            <div className='icon'>
                                                {card.link !== '' ? (
                                                    <a
                                                        href={card.link}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        <FaLink />
                                                    </a>
                                                ) : null}

                                                {card.github !== '' ? (
                                                    <a
                                                        href={card.github}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                ) : null}

                                                {card.medium !== '' ? (
                                                    <a
                                                        href={card.medium}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        <AiFillMediumCircle />
                                                    </a>
                                                ) : null}
                                            </div>
                                            <div className='card-body'>
                                                {card.description}
                                            </div>
                                            <Image
                                                ratio={card.imageRatio}
                                                src={card.image}
                                            />
                                        </Card>
                                    ) : (
                                        ''
                                    )}
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
