import "./AuthNavigation.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function AuthNavigation() {
    const location = useLocation();
    const isMain = location.pathname === '/';

    return (
        <nav className='header__nav'>
            <NavLink to="/" className="header__logo"></NavLink>
            <div className="header__nav-links">
                <NavLink to="/movies" className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link_main' : ''}`}>
                    Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link_main' : ''}`}>
                    Сохранённые фильмы
                </NavLink>
            </div>
            <NavLink to="/profile" className='header__button-logged'>Аккаунт</NavLink>
        </nav>
    );
}

export default AuthNavigation;