import React from 'react'
import logo from '../../logo.svg';
import './Header.css'

function Header() {
    return (
        <div className="header flex flex-space-between flex-align-center">
            <div className="flex flex-align-center">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="app-name">Meme Generator</h1>
            </div>
            <div className="project-number">
                React Course - Project 3
            </div>
        </div>
    )
}

export default Header;