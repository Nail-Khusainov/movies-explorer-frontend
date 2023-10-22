import './ProfilePage.css';
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';

function ProfilePage() {
  return (
    <section className="profile">
      <main>
        <div className="profile-container">
          <h2 className="profile__greeting">Привет, Виталий!</h2>
          <form className="profile__form-container">
            <div className="profile__input-container">
              <p className="profile__input-label-name">Имя</p>
              <input
                type="text"
                className="profile__input"
                name="name"
                required
                placeholder='Виталий'
              ></input>
            </div>

            <div className="profile__input-container">
              <p className="profile__input-label-name">E-mail</p>
              <input
                className="profile__input"
                type="email"
                name="email"
                placeholder='pochta@yandex.ru'
              ></input>
            </div>

            <button 
              type="submit"
              className='profile__form-submit-btn'
            >
              Редактировать
            </button>
          </form>
          <NavLink to="/signin" className="profile__exit">
            Выйти из аккаунта
          </NavLink>
        </div>
      </main>
    </section>
  );
}

export default ProfilePage;