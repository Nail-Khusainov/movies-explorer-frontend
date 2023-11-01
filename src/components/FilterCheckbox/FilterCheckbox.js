import React, { useEffect, useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onShortFilmToggle, initChecked }) {
  const [isChecked, setIsChecked] = useState(initChecked);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    onShortFilmToggle(isChecked);
  };

  useEffect(() => {
    setIsChecked(initChecked)
  }, [initChecked]);

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          type="checkbox"
          name="short-movies"
          id="short-movies"
          className="filter-checkbox__input"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Короткометражки
        <span className="filter-checkbox__toggle"></span>
      </label>
    </section>
  );
}

export default FilterCheckbox;
