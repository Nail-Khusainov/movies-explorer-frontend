import React, { useState } from "react";
import "./SigninPage.css";
import Form from "../../components/Form/Form";
import Popup from "../../components/Popup/Popup";

function SigninPage({ onLogin, showErrorPopup, closeErrorPopup }) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = userData;
        onLogin(email, password);
    }

    const closePopups = () => {
        closeErrorPopup(false)
    };


    const inputLabels = ["E-mail", "Пароль"];
    const buttonText = "Войти";
    const caption = "Еще не зарегистрированы?";
    const errorMessages = ["Ошибка 1", "Ошибка 2", "Ошибка 3"];
    const submitBtnClass = "form__signin-button";
    const submitBtnClassDisabled = "form__signin-button form__signin-button_disabled";
    const path = "/signup";
    const linkText = "Регистрация"
    const inputTypes = ["email", "password"];
    const names = ["email", "password"];
    const values = [userData.email, userData.password];



    return (
        <div className="signin-page">
            <Form
                title="Рады видеть!"
                numInputs={2}
                inputLabels={inputLabels}
                buttonText={buttonText}
                caption={caption}
                errorMessages={errorMessages}
                submitBtnClass={submitBtnClass}
                submitBtnClassDisabled={submitBtnClassDisabled}
                path={path}
                linkText={linkText}
                inputTypes={inputTypes}
                names={names}
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {showErrorPopup && (
                <Popup text="Неверные email или пароль" onClose={closePopups} />
            )}
        </div>
    )
}

export default SigninPage;

