import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import MediumPosts from './pages/MediumPosts'
import Contact from './pages/Contact'
import GlobalStyle from './globalStyles'

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/mediumPosts' element={<MediumPosts />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </>
    )
}

export default App
