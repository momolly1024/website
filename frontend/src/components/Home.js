import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Resume from '../resume/MollyChi.pdf'

import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { GoSearch } from 'react-icons/go'

const options = [
    { value: 'about', label: 'about' },
    { value: 'portfolio', label: 'portfolio' },
    { value: 'mediumPosts', label: 'medium posts' },
    {
        value: 'contact',
        label: 'contact',
    },
]

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 290px;
    height: calc(100% - 560px);
    img {
        width: 272px;
        height: 92px;
        margin-top: auto;
    }
`

const SearchSection = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.form``

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 14px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
    max-width: 584px;
    box-shadow: 0px 1px 6px 0px rgb(32 33 36 / 28%);
`

const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    padding-top: 18px;
    top: 53px;
    z-index: 0;
    button {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        color: #3c4043;
        font-family: Roboto, arial, sans-serif;
        font-size: 14px;
        margin: 11px 4px;
        padding: 0 16px;
        line-height: 27px;
        height: 36px;
        min-width: 54px;
        text-align: center;
        cursor: pointer;
        user-select: none;
    }
    button a {
        color: #34383b;
    }
    button a:active {
        color: #34383b;
    }
`

const SearchIcon = styled.span`
    color: #9aa0a6;
    height: 30px;
    width: 30px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    & svg {
        fill: #9aa0a6;
    }
`

const SearchInput = styled.input`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    height: 40px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 34px;
    font-size: 16px;
`

const MicIcon = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0;
    background: transparent;
    outline: none;
    padding: 0 8px;
    width: 40px;
    line-height: 44px;
    height: 44px;
    svg {
        height: 24px;
        width: 24px;
        vertical-align: middle;
    }
`
const NavLinks = styled(Link)`
    padding: 0 8px;
    text-decoration: none;
    color: #000;

    svg {
        height: 24px;
        width: 20px;
    }
`
const selectStyles = {
    placeholder: (styles) => ({
        ...styles,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // color: 'black',
        lineHeight: '1.3rem',
        // paddingLeft: '0.5rem',
        marginLeft: '0rem',
        color: '#c8c8c8',
    }),
    control: (styles, state) => ({
        ...styles,
        fontSize: '14',
        textAlign: 'left',
        marginLeft: '1rem',
        paddingLeft: '40px',
        display: 'flex',
        // alignItems: 'left',
        justifyContent: 'left',

        height: '49px',
        width: '584px',
        border: '0.1rem solid #c8c8c8',
        fontWeight: 'regular',
        boxShadow: '0px 1px 6px 0px rgb(32 33 36 / 28%)',
        // background: "#023950",
        borderRadius: state.menuIsOpen ? '3px 3px 0 0' : '50px',
        borderColor: state.isFocused ? 'white' : 'white',
        '&:hover': {
            cursor: 'text',
        },
    }),
    option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isSelected ? '#b3b1b1' : 'white',
        padding: '24px',
        fontSize: '13',
        textAlign: 'left',
        color: 'bkack',
        borderBottom: '0.1rem solid #c8c8c8',
        ':last-of-type': {
            borderBottom: 'none',
        },
        ':hover': {
            fontWeight: 'regular',
            background: '#ebe8e8',
        },
        '&::after': {
            // content: 'hi',
            color: 'green',
        },
    }),
    menu: (styles) => ({
        ...styles,
        fontSize: '16px',
        marginLeft: '1rem',
        border: '0.1rem solid #c8c8c8',
        width: '584px',
        backgroundColor: 'white',
    }),
    input: (styles) => ({
        ...styles,
        position: 'absolute',
        left: 40,
        top: 10,
        color: 'black',
    }),
    valueContainer: (styles) => ({
        ...styles,
        paddingLeft: 24,
    }),
}

const ValueContainer = ({ children }) => {
    return (
        <>
            {!!children && (
                <GoSearch
                    style={{
                        position: 'absolute',
                        left: 20,
                        top: 15,
                        color: '#9aa0a6',
                    }}
                />
            )}
            {children}
        </>
    )
}
const Home = () => {
    const [selectedOption, setSelectedOption] = useState({
        value: '',
        label: 'hello world :>',
    })
    const navigate = useNavigate()

    useEffect(() => {
        // navigate(`/${selectedOption.value}`)
        console.log(selectedOption.value)
        setTimeout(() => {
            navigate(`/${selectedOption.value}`)
        }, 300)
    }, [selectedOption])

    return (
        <Container>
            <LogoSection>
                <img
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                    alt='google-logo'
                />
            </LogoSection>
            <SearchSection>
                <Form action='/' method='GET' role='search'>
                    <div
                        style={{
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center',
                            textAlign: 'left',
                        }}
                    >
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            styles={selectStyles}
                            components={{
                                DropdownIndicator: () => (
                                    <MicIcon
                                        style={{
                                            position: 'absolute',
                                            right: 20,
                                        }}
                                    >
                                        <svg
                                            focusable='false'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill='#4285f4'
                                                d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
                                            />
                                            <path
                                                fill='#34a853'
                                                d='m11 18.08h2v3.92h-2z'
                                            />
                                            <path
                                                fill='#fbbc05'
                                                d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
                                            />
                                            <path
                                                fill='#ea4335'
                                                d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
                                            />
                                        </svg>
                                    </MicIcon>
                                ),
                                IndicatorSeparator: () => null,
                                ValueContainer,
                            }}
                        />
                    </div>
                    {/* <Search>
                        <SearchIcon>
                            <svg
                                focusable='false'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                            </svg>
                        </SearchIcon>
                        <SearchInput
                            type='text'
                            onFocus={() => console.log('a')}
                        />

                        <MicIcon>
                            <svg
                                focusable='false'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill='#4285f4'
                                    d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
                                />
                                <path fill='#34a853' d='m11 18.08h2v3.92h-2z' />
                                <path
                                    fill='#fbbc05'
                                    d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
                                />
                                <path
                                    fill='#ea4335'
                                    d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
                                />
                            </svg>
                        </MicIcon>
                    </Search> */}
                </Form>
                <ButtonSection>
                    <NavLinks to='/about'>
                        <button>Molly Chi</button>
                    </NavLinks>

                    <button>
                        <a
                            href='https://molly1024.medium.com/'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            My Medium
                        </a>
                    </button>

                    <button className='downloadResumeBTN'>
                        <a href={Resume} download>
                            Download my Resume
                        </a>
                    </button>
                    <button>
                        <a
                            href='https://github.com/momolly1024'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            My Github
                        </a>
                    </button>

                    <NavLinks to='/contact'>
                        <button>Contact me</button>
                    </NavLinks>
                </ButtonSection>
            </SearchSection>
        </Container>
    )
}

export default Home
