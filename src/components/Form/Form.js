import React from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";


function Form({ title, numInputs, inputLabels, buttonText, caption, path, submitBtnClass, linkText }) {
  return (
      <section className="form-page">
          <form className="form" title={title} name="form">
              <NavLink to="/" className="form__logo"></NavLink>
              <h2 className="form__title">{title}</h2>

              {[...Array(numInputs)].map((_, index) => (
                  <label key={index} className="form__input-label">
                      {inputLabels[index] || `Инпут ${index + 1}`}
                      <input
                          className="form__input"
                          id={`input-${index}`}
                          name={`input-${index}`}
                          type="text"
                          minLength="2"
                          maxLength="30"
                          required
                      />
                      <span id={`error-input-${index + 3}`} className="form__input-error"></span>
                  </label>
              ))}

              <button className={submitBtnClass} type="submit">{buttonText}</button>
              <p className="form__caption">
                  {caption}
                  <NavLink className="form__link" to={path}>{linkText}</NavLink>
              </p>
          </form>
      </section>
  )
}

export default Form;
