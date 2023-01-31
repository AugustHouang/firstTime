import React from 'react'
import './Navigation.css'
export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a className='active' href='#home'>Home</a></li>
                <li><a className='active' href='#news'>News</a></li>
                <li><a className='active' href='#about'>About</a></li>
                <li><a className='active' href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}
