const { NODE_ENV, REACT_APP_BASE_URL } = process.env;
const BASE_URL = NODE_ENV === 'production' ? REACT_APP_BASE_URL : 'http://localhost:3000';
// const BASE_URL = "http://localhost:3000";


function _handleResponse(res) {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`)
    }
    return res.json();
};

function request(endpoint, method, body) {
    return fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: body && JSON.stringify(body),
    }).then(_handleResponse);
};

export const register = (name, email, password) => {
    return request('/signup', 'POST', { name, email, password });
};

export const authorize = (email, password) => {
    return request('/signin', 'POST', { email, password });
};

export const userTokenCheck = () => {
    return request('/users/me', 'GET');
};

export const signOut = () => {
    return request('/signout', 'POST');
};
