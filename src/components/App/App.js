import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css';

import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MainPage from '../../pages/MainPage/MainPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage/SavedMoviesPage';
import NotFound from '../../pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SigninPage from '../../pages/SignInPage/SigninPage';
import SignupPage from '../../pages/SignUpPage/SignupPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../../components/Popup/Popup';


import { register, authorize, userTokenCheck, signOut } from '../../utils/Auth';
import mainApi from '../../utils/MainApi';
import { getMovieCards } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';

function App() {

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const [appIsReady, setAppIsReady] = useState(false);


  const tokenCheck = () => {
    userTokenCheck()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setEmail(res.email);
          // navigate("/movies", { replace: true });
        }
        setAppIsReady(true);
      })
      .catch(console.error)
  };

  React.useEffect(() => {
    if (
      window.location.pathname.includes("/movies") ||
      window.location.pathname.includes("/saved-movies") ||
      window.location.pathname.includes("/profile")
    ) {
      tokenCheck(); // Проверяем токен только для защищенных путей
    } else {
      setAppIsReady(true); // Для других путей сразу показываем приложение
    }
  }, []);

  React.useEffect(tokenCheck, [navigate]);

  function onLogin(email, password) {
    authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setEmail(email);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // В случае ошибки регистрации покажем попап с сообщением об ошибке
        setShowErrorPopup(true);
        console.error(error);
      });
  };

  function onRegister(name, email, password) {
    register(name, email, password)
      .then(() => {
        // После успешной регистрации покажем попап с сообщением
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        // В случае ошибки регистрации покажем попап с сообщением об ошибке
        setShowErrorPopup(true);
        console.error(error);
      });
  }

  function handleErrorPopupOpen() {
    setShowErrorPopup(true);
  }

  function handleSuccessPopupOpen() {
    setShowSuccessPopup(true);
  }

  function handlePopupClose() {
    setShowSuccessPopup(false);
    setShowErrorPopup(false);
  }

  async function handleSignOut() {
    try {
      await signOut();
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleGetMovies() {
    try {
      if (isLoggedIn) {
        const cards = await getMovieCards();
        setCards(cards);
        localStorage.setItem("allMovies", JSON.stringify(cards));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedAllMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (storedAllMovies) {
      setCards(storedAllMovies);
    }
  }, []);

  useEffect(() => {
    mainApi
      .getUserInfoFromServer()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  //АПДЕЙТ СОХРАНЕННЫХ КАРТОЧЕК
  async function updateSavedMovies() {
    try {
      const response = await mainApi.getSavedMovies();

      if (response) {
        const userSavedMovies = response.filter(
          (movie) => movie.owner._id === currentUser._id
        );

        setSavedMovies(userSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(userSavedMovies));
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    updateSavedMovies();
  }, [currentUser]);

  //СОХРАНЕНИЕ КАРТОЧКИ
  async function handleSaveMovieСard(movie) {
    try {
      console.log(movie);
      const newSavedMovieCard = await mainApi.saveMovieCard(movie);
      if (!newSavedMovieCard) {
        throw new Error("Произошла ошибка");
      }
      const newSavedMovies = [newSavedMovieCard, ...savedMovies];
      setSavedMovies(newSavedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    } catch (error) {
      console.error(`Render error: ${error}`);
    }
  }

  //УДАЛЕНИЕ КАРТОЧКИ
  async function handleDeleteMovieCard(movie) {
    try {
      const movieId = movie.id || movie.movieId;
      const currentMovie = savedMovies.find((m) => m.movieId === movieId);

      if (!currentMovie) {
        throw new Error("Фильм не найден");
      }

      await mainApi.deleteMovieCard(currentMovie._id);
      updateSavedMovies();
    } catch (error) {
      console.error(`Render error: ${error}`);
    }
  }

  async function handleUpdateUser(userData) {
    try {
      const response = await mainApi.setNewUserInfo(userData);
      setCurrentUser(response);
      console.log(response)
    } catch (error) {
      console.error("User update error:", error);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className={`page ${isBurgerOpened ? 'page_blocked' : ''}`}>
          <Header
            isLoggedIn={isLoggedIn}
            isBurgerOpened={isBurgerOpened}
            setIsBurgerOpened={setIsBurgerOpened}
          />
          <main>
            {appIsReady ? (
              <Routes>

                <Route
                  path='/movies'
                  element={
                    <ProtectedRoute
                      component={MoviesPage}
                      isLoggedIn={isLoggedIn}
                      movieCards={cards}
                      onSaveMovie={handleSaveMovieСard}
                      onDeleteMovie={handleDeleteMovieCard}
                      searchResult={searchResult}
                      savedMovies={savedMovies}
                      getMovies={handleGetMovies}
                    />
                  }
                />

                <Route path='/' element={<MainPage />} />

                <Route
                  path='/saved-movies'
                  element={
                    <ProtectedRoute
                      component={SavedMoviesPage}
                      isLoggedIn={isLoggedIn}
                      movieCards={savedMovies}
                      onDeleteMovie={handleDeleteMovieCard}
                      updateSavedMovies={updateSavedMovies}
                      searchResult={searchResult}
                      savedMovies={savedMovies}
                      getMovies={handleGetMovies}
                    />
                  }
                />
                <Route path='*' element={<NotFound />} />

                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute
                      component={ProfilePage}
                      onSignOut={handleSignOut}
                      isLoggedIn={isLoggedIn}
                      onUpdateUser={handleUpdateUser}
                    />
                  }
                />

                <Route
                  path='/signin'
                  element={
                    <SigninPage
                      onLogin={onLogin}
                      showErrorPopup={showErrorPopup}
                      closeErrorPopup={setShowErrorPopup}
                    />
                  }
                />

                <Route
                  path="/signup"
                  element={
                    isLoggedIn ? (
                      <Navigate to="/" />
                    ) : (
                      <SignupPage
                        // isFormBlocked={isFormBlocked}
                        onRegister={onRegister}
                        showSuccessPopup={showSuccessPopup}
                        showErrorPopup={showErrorPopup}
                        closeErrorPopup={setShowErrorPopup}
                        closeSuccessPopup={setShowSuccessPopup}
                      />
                    )
                  }
                />

              </Routes>
            ) : (
              <Preloader />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
