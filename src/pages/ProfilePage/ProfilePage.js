import React, { useState, useContext, useEffect } from 'react';
import './ProfilePage.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import validator from 'validator';
import Popup from '../../components/Popup/Popup';

function ProfilePage({ onSignOut, onUpdateUser, showSuccessPopup, showErrorPopup, closeErrorPopup, closeSuccessPopup }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    onUpdateUser({ name, email });
    setIsButtonDisabled(true);
    console.log({ name, email });
  };


  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setIsButtonDisabled(true);
  }, [currentUser]);

  const closePopups = () => {
    closeErrorPopup(false)
    closeSuccessPopup(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const isNameValid = validator.isLength(value, { min: 2, max: 30 });
      setName(value);

      if (isNameValid) {
        setNameError('');
      } else {
        setNameError('Имя должно содержать от 2 до 30 символов');
      }

      setIsButtonDisabled(!isNameValid || value === currentUser.name || !!emailError);
    } else if (name === "email") {
      const isEmailValid = validator.isEmail(value);
      setEmail(value);

      if (isEmailValid) {
        setEmailError('');
      } else {
        setEmailError('Некорректный email');
      }

      setIsButtonDisabled(!isEmailValid || value === currentUser.email || !!nameError);
    }
  };

  return (
    <section className="profile">
      <main>
        <div className="profile-container">
          <h2 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h2>
          <form className="profile__form-container" onSubmit={handleUpdateProfile}>
            <div className="profile__input-container">
              <p className="profile__input-label-name">Имя</p>
              <input
                type="text"
                className="profile__input"
                name="name"
                required
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className='profile__input-error-container'>
              {nameError && <span className="profile__input-error">{nameError}</span>}
            </div>

            <div className="profile__input-container">
              <p className="profile__input-label-name">E-mail</p>
              <input
                className="profile__input"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className='profile__input-error-container'>
              {emailError && <span className="profile__input-error">{emailError}</span>}
            </div>

            <button
              type="submit"
              className={isButtonDisabled ? "profile__form-submit-btn profile__form-submit-btn_disabled" : "profile__form-submit-btn profile__form-submit-btn_enabled"}
              disabled={isButtonDisabled}
            >
              Редактировать
            </button>
          </form>
          <button to="/signin" className="profile__exit" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
          {showSuccessPopup && (
            <Popup text="Профиль обновлён!" onClose={closePopups} />
          )}
          {showErrorPopup && (
            <Popup text="Что-то пошло не так" onClose={closePopups} />
          )}
        </div>
      </main>
    </section>
  );
}

export default ProfilePage;
