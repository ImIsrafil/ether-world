import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>EtherWorld</div>
        <nav>
            <a href="/">home</a>
            <a href='/services'>services</a>
            <a href='/portfolio'>portfolio</a>
            <a href='/about'>about</a>
            <a href='/contact'>contact</a>
        </nav>
    </header>
  )
}

export default Header
