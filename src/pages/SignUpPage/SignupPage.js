import React, { useState } from "react";
import "./SignupPage.css";
import Form from "../../components/Form/Form";
import Popup from "../../components/Popup/Popup";

function SignupPage({ onRegister, showSuccessPopup, showErrorPopup, closeErrorPopup, closeSuccessPopup }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, password } = userData;
        onRegister(
            name,
            email,
            password,
        );
    }

    const closePopups = () => {
        closeErrorPopup(false)
        closeSuccessPopup(false)
    };

    const inputLabels = ["Имя", "E-mail", "Пароль"];
    const buttonText = "Зарегистрироваться";
    const caption = "Уже зарегистрированы?";
    const submitBtnClass = "form__signup-button";
    const submitBtnClassDisabled = "form__signup-button form__signup-button_disabled";
    const path = "/signin";
    const linkText = "Войти";
    const inputTypes = ["text", "email", "password"];
    const values = [userData.name, userData.email, userData.password];
    const names = ["name", "email", "password"];

    return (
        <div className="signup-page">
            <Form
                title="Добро пожаловать!"
                numInputs={3}
                inputLabels={inputLabels}
                buttonText={buttonText}
                caption={caption}
                errorMessages={[]}
                submitBtnClass={submitBtnClass}
                submitBtnClassDisabled={submitBtnClassDisabled}
                path={path}
                linkText={linkText}
                inputTypes={inputTypes}
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                names={names}
            />
            {showSuccessPopup && (
                <Popup text="Вы успешно зарегистрировались!" onClose={closePopups} />
            )}
            {showErrorPopup && (
                <Popup text="Что-то пошло не так" onClose={closePopups} />
            )}
        </div>

    );
}

export default SignupPage;
