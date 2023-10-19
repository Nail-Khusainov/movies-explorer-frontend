import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";



function Header() {
    const location = useLocation();
    const isMain = location.pathname === '/';

    return (
        // <header className="header header--logged header--logged-maian">
        <header className={`header ${isMain ? 'header--main' : ''}`}>
            <NavLink to="/" className="header__logo"></NavLink>
            <div className="header__center">
                <Navigation />
            </div>
            <div className="header__account-section">
                <NavLink to="/signup" className={`${isMain ? 'header__link--main' : 'header__link'}`}>Регистрация</NavLink>
                <NavLink to="/signin" className={`${isMain ? 'header__button-main' : 'header__button-none'}`}>Войти</NavLink>
                <NavLink to="/profile" className={`${isMain ? 'header__button-none' : 'header__button-logged'}`}>Аккаунт</NavLink>
            </div>
            <BurgerMenu />
        </header>
    );
}
export default Header;