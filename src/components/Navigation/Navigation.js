import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
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
                    <li><a className='active' href='#home' style={{ color: theme.color }}>Home</a></li>
                    <li><a className='active' href='#news' style={{ color: theme.color }}>News</a></li>
                    <li><a className='active' href='#about' style={{ color: theme.color }}>About</a></li>
                    <li><a className='active' href='#contact' style={{ color: theme.color }}>Contact</a></li>
                    <li style={{ position: 'relative', float: 'right' }}>
                        <a className='switch-mode' href='#mode' onClick={toggle}
                            style={{ color: theme.color }}
                            data-testid="toggle-theme-btn"
                        >
                            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </li></ul>
            </ nav>
        </div>
    )
}
