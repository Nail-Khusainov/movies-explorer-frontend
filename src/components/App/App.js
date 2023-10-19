import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MainPage from '../../pages/MainPage/MainPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage/SavedMoviesPage';
import NotFound from '../../pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SigninPage from '../../pages/SignInPage/SigninPage';
import SignupPage from '../../pages/SignUpPage/SignupPage';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/saved-movies' element={<SavedMoviesPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/signin' element={<SigninPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
