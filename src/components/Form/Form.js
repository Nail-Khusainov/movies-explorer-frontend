import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";
import "./Form.css";

function Form({
    title,
    numInputs,
    inputLabels,
    buttonText,
    caption,
    path,
    submitBtnClass,
    submitBtnClassDisabled,
    linkText,
    inputTypes,
    values,
    handleChange,
    handleSubmit,
    names,
}) {
    const [errors, setErrors] = useState(Array(numInputs).fill(""));

    function validateInput(name, value) {
        const validationFunctions = {
            name: (val) => /^[A-Za-zА-Яа-яЁё0-9\s]{2,30}$/.test(val),
            email: validator.isEmail,
            password: (val) => val.length >= 6,
        };

        const validationMessages = {
            name: "Введите минимум два символа",
            email: "Введите корректный email",
            password: "Пароль должен содержать минимум 6 символов",
        };

        const isValid = validationFunctions[name](value.replace(/\s/g, ""));
        return isValid ? "" : validationMessages[name];
    }

    function handleInputChange(e, index) {
        const { name, value } = e.target;
        const errorMessage = validateInput(name, value);
        setErrors((prev) => prev.map((error, i) => (i === index ? errorMessage : error)));
        handleChange(e);
    }

    const isFormValid = errors.every((error) => error === "");

    return (
        <section className="form-page">
            <form className="form" title={title} name="form" onSubmit={handleSubmit}>
                <NavLink to="/" className="form__logo"></NavLink>
                <h2 className="form__title">{title}</h2>

                {[...Array(numInputs)].map((_, index) => (
                    <label key={index} className="form__input-label">
                        {inputLabels[index] || `Инпут ${index + 1}`}
                        <input
                            className={`form__input ${errors[index] ? "form__input_invalid" : ""}`}
                            id={`input-${index}`}
                            name={names[index]}
                            type={inputTypes[index] || "text"}
                            value={values[index]}
                            minLength="2"
                            maxLength="30"
                            onChange={(e) => handleInputChange(e, index)}
                            required
                        />
                        <span id={`error-input-${index + 3}`} className="form__input-error">
                            {errors[index]}
                        </span>
                    </label>
                ))}

                <button className={isFormValid ? submitBtnClass : submitBtnClassDisabled} type="submit" disabled={!isFormValid}>
                    {buttonText}
                </button>
                <p className="form__caption">
                    {caption}
                    <NavLink className="form__link" to={path}>
                        {linkText}
                    </NavLink>
                </p>
            </form>
        </section>
    );
}

export default Form;
