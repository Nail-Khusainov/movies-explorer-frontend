import { MOVIES_URL } from "./constants";

const { NODE_ENV, REACT_APP_BASE_URL } = process.env;

const BASE_URL = NODE_ENV === 'production' ? REACT_APP_BASE_URL : 'http://localhost:3000';

const ass_url = "https://api.nomoreparties.co"



class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    // Обработчик ответа сервера
    _handleResponse(res) {
        if (!res.ok) {
            return Promise.reject(`ERROR: ${res.status}`);
        }
        return res.json();
    }

    // Универсальный метод запроса с проверкой ответа
    _request(url, options) {
        return fetch(url, options)
            .then(this._handleResponse)
    }

    getUserInfoFromServer() {
        return this._request(`${this._url}/users/me`, {
            method: "GET",
            credentials: 'include',
            // headers: this._headers,
        });
    }

    setNewUserInfo(data) {
        console.log(data)
        return this._request(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        });
    }

    saveMovieCard(movie) {
        return this._request(`${this._url}/movies`, {
            method: "POST",
            headers: this._headers,
            credentials: "include",
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: ass_url + movie.image.url,
                trailerLink: movie.trailerLink + ".ru",
                thumbnail: "https://google.com",
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        });
    }

    deleteMovieCard(id) {
        return this._request(`${this._url}/movies/${id}`, {
            method: "DELETE",
            headers: this._headers,
            credentials: 'include',
        });
    }


    getSavedMovies() {
        return this._request(`${this._url}/movies`, {
            method: "GET",
            headers: this._headers,
            credentials: "include",
        });
    }

}

const mainApi = new Api({
    baseUrl: BASE_URL,
    headers: {
        // authorization: '820534b3-b689-4c68-920e-3e0fc31314d3',
        'Content-Type': 'application/json'
    }
});

export default mainApi;
