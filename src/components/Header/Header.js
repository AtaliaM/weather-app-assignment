import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <h1 className="app-name">Weather App</h1>
            <div className="header-btn-container">
                <a className="icon" href="https://github.com/AtaliaM"><i className="github icon"></i></a>
            </div>
        </header>
    )
}

export default Header;
