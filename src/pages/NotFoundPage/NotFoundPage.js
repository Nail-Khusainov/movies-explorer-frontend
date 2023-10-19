import "./NotFoundPage.css";
import React from "react";
import { useNavigate } from "react-router-dom"

function NotFound() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__content">Страница не найдена</p>
      <button className="not-found__button" onClick={handleGoBack} >Назад</button>
    </div>
  );
}

export default NotFound;