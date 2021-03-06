import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Profile from '../images/profile.jpg'
// import Profile from '../images/profile.png'
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 14px;
`
const LeftLinks = styled.div`
    padding: 10px;
    margin-left: 10px;
`
const RightLinks = styled.div`
    padding: 10px;
    margin-right: 16px;
    display: flex;
    align-items: center;
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

const Navbar = () => {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/portfolio'>Portfolio</NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks to='/mediumPosts'>Medium Posts</NavLinks>
                <NavLinks to='/contact'>Contact</NavLinks>
                <NavLinks
                    to='/'
                    css={`
                        padding-right: 20px;
                    `}
                >
                    <svg focusable='false' viewBox='0 0 24 24'>
                        <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
                    </svg>
                </NavLinks>
                <Link to='/'>
                    <img
                        src={Profile ?? 'https://picsum.photos/200/300'}
                        alt='profile'
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                        }}
                        // style={{
                        //     width: '32px',
                        //     height: '32px',
                        // }}
                    />
                </Link>
            </RightLinks>
        </Nav>
    )
}

export default Navbar
