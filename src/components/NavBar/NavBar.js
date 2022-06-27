import React from 'react';
import bmoLogo from '../../assets/images/bmo-blue-pride.png'
import './NavBar.scss'

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar__top">
                <div className="nav-bar__hamburger">
                    <ul></ul>
                </div>
                <div className="right-nav">
                    <img src={bmoLogo} alt="BMO Logo" className="bmo-logo" />
                    <div className="nav-bar__links">
                        <span className="nav-bar__link"><img src="" alt="" />Find</span>
                        <span className="nav-bar__link"><img src="" alt="" />Login</span>
                    </div>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="scroll-container">
                <ul className="bottom-nav__list">
                    <li className="bottom-nav__list-items">Overview</li>
                    <li className="bottom-nav__list-items">Newcomers offers</li>
                    <li className="bottom-nav__list-items">Newcomers bank accounts</li>
                    <li className="bottom-nav__list-items">Newcomers credit cards</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;