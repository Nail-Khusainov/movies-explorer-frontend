import React from "react";
import "./BurgerMenu.css";
import { NavLink, useLocation } from "react-router-dom";

function BurgerMenu({ setIsBurgerOpened, isBurgerOpened, isLoggedIn }) {
    const location = useLocation();
    
    const handleChange = () => {
        setIsBurgerOpened(!isBurgerOpened);
    };

    return (

        <section className={`${isLoggedIn ? 'burger' : 'burger-disabled'}`}>
            <div className="burger__menu">

                {isBurgerOpened ?
                    (<>
                        <ul className="burger__menu-list">
                            <li>
                                <NavLink
                                    to='/'
                                    onClick={handleChange}
                                    className={`burger__menu-item ${location.pathname === '/' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/movies'
                                    onClick={handleChange}
                                    className={`burger__menu-item ${location.pathname === '/movies' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/saved-movies'
                                    onClick={handleChange}
                                    className={`burger__menu-item ${location.pathname === '/saved-movies' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                            <NavLink
                                to="/profile"
                                onClick={handleChange}
                                className='burger__button-account'>
                                Аккаунт
                            </NavLink>
                            <button
                                className="burger__close-button"
                                onClick={handleChange}
                            >
                            </button>
                        </ul>
                        <div className="burger-overlay"></div>
                    </>) :
                    (<button
                        onClick={handleChange}
                        className={`burger__button ${location.pathname === '/' ? 'burger__button_main' : ''}`}
                    />)}
            </div>
        </section>
    );
}

export default BurgerMenu;
