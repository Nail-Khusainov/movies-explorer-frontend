import "./Navigation.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const isMain = location.pathname === '/';

    return (
        <nav className={`${isMain ? 'header__nav--main' : 'header__nav'}`}>        
            <NavLink to="/movies" className="header__nav-link">
                Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__nav-link">
                Сохранённые фильмы
            </NavLink>
        </nav>
    );
}

export default Navigation;