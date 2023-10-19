import "./SearchForm.css";
// import React, { useState } from "react";

function SearchForm() {

    return (
        <section className="search-section">
            <form className="search-section__form">
                <input
                    className="search-section__input"
                    type="text"
                    name="search-field"
                    placeholder="Фильм"
                    required
                ></input>

                <button
                    className="search-section__submit-button"
                    type="submit"
                >
                </button>
            </form>
            <span className="search-section__input-error">error</span>
        </section>
    );
}

export default SearchForm;