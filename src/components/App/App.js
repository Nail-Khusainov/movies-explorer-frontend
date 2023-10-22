import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  return (
    <div className="App">
      <div className={`page ${isBurgerOpened ? 'page_blocked' : ''}`}>
        <Header
          isLoggedIn={true}
          isBurgerOpened={isBurgerOpened}
          setIsBurgerOpened={setIsBurgerOpened}
        />
        <main>
          <Routes>
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/saved-movies' element={<SavedMoviesPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/signin' element={<SigninPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
