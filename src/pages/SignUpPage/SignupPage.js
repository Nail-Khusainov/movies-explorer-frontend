import React from "react";
import "./SignupPage.css";
import Form from "../../components/Form/Form";

function SignupPage() {
    const inputLabels = ["Имя", "E-mail", "Пароль"];
    const buttonText = "Зарегистрироваться";
    const caption = "Уже зарегистрированы?";
    const errorMessages = ["Ошибка 1", "Ошибка 2", "Ошибка 3"];
    const submitBtnClass = "form__signup-button";
    const path = "/signin";
    const linkText = "Войти";
    const inputTypes = ["text", "email", "password"];

    return (
        <Form 
            title="Добро пожаловать!" 
            numInputs={3} 
            inputLabels={inputLabels} 
            buttonText={buttonText} 
            caption={caption} 
            errorMessages={errorMessages}
            submitBtnClass={submitBtnClass}
            path={path}
            linkText={linkText}
            inputTypes={inputTypes}
        />
    )
}

export default SignupPage;

