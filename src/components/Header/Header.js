import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { useLocation } from 'react-router-dom';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ isLoggedIn }) {
    const location = useLocation();
    const allowedPaths = ['/', '/profile', '/movies', '/saved-movies'];
    const shouldShowHeader = allowedPaths.includes(location.pathname);

    return (
        shouldShowHeader && (
            <header className={`header ${location.pathname === '/' ? 'header_main' : ''}`}>
                <Navigation isLoggedIn={isLoggedIn} />
                <BurgerMenu />
            </header>
        )
    );
}

export default Header;