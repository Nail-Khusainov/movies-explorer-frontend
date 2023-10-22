import "./Navigation.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import NotAuthNavigation from "../NotAuthNavigation/NotAuthNavigation";


function Navigation({isLoggedIn}) {
    return (
        <>
            {isLoggedIn ? <AuthNavigation /> : <NotAuthNavigation />}
        </>
    );
}

export default Navigation;