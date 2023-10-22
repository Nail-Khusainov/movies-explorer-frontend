import React from "react";
import "./SigninPage.css";
import Form from "../../components/Form/Form";

function SigninPage() {
    const inputLabels = ["E-mail", "Пароль"];
    const buttonText = "Войти";
    const caption = "Еще не зарегистрированы?";
    const errorMessages = ["Ошибка 1", "Ошибка 2", "Ошибка 3"];
    const submitBtnClass = "form__signin-button";
    const path = "/signup";
    const linkText = "Регистрация"
    const inputTypes = ["email", "password"];

    return (
        <Form 
            title="Рады видеть!" 
            numInputs={2} 
            inputLabels={inputLabels} 
            buttonText={buttonText} 
            caption={caption} 
            errorMessages={errorMessages}
            submitBtnClass={submitBtnClass}
            path={path}
            linkText = {linkText}
            inputTypes={inputTypes}
        />
    )
}

export default SigninPage;

