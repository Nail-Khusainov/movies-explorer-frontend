import { MOVIES_URL } from "./constants";

function _handleResponse(res) {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`)
    }
    return res.json();
};


export const getMovieCards = () => {
    return fetch(`${MOVIES_URL}`, {
        method: "GET",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // credentials: "include",
    }).then((res) => {
        return _handleResponse(res);
    });
};

