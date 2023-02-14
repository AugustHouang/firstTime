import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { NavLink, Routes, Route } from 'react-router-dom'
import Contract from '../Screen/Contract'
import News from '../Screen/News'
import About from '../Screen/About'
import './Navigation.css'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div >
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    outline: 'none'
                }} >
                    <li><NavLink to='/' style={{ color: theme.color }}>Home</NavLink></li>
                    <li><NavLink to='/news' style={{ color: theme.color }}>News</NavLink></li>
                    <li><NavLink to='/about' style={{ color: theme.color }}>About</NavLink></li>
                    <li><NavLink to='/Contract' style={{ color: theme.color }}>Contact</NavLink></li>
                    <li style={{ position: 'relative', float: 'right' }}>
                        <a className='switch-mode' href='#mode' onClick={toggle}
                            style={{ color: theme.color }}
                            data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </li></ul>
                <Routes>
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/contract" element={<Contract />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </ nav>
        </div>
    )
}
