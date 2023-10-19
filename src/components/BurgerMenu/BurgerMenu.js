import React from "react";
import "./BurgerMenu.css";
import { NavLink, useLocation } from "react-router-dom";

function BurgerMenu() {
    const location = useLocation();
    const isMain = location.pathname === '/';

    return (
        <section className={`${isMain ? 'burger--main' : 'burger'}`}>
            <div className="burger__menu">
                <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                <label htmlFor="burger-checkbox" className="burger__button"></label>
                <ul className="burger__menu-list">
                    <li><NavLink to='/' className="burger__menu-item">Главная</NavLink></li>
                    <li><NavLink to='/movies' className="burger__menu-item">Фильмы</NavLink></li>
                    <li><NavLink to='/saved-movies' className="burger__menu-item">Сохранённые фильмы</NavLink></li>
                    <NavLink to="/profile" className='burger__button-account'>Аккаунт</NavLink>
                </ul>
                <div className="burger-overlay"></div>
            </div>
        </section>
    );
}

export default BurgerMenu;
