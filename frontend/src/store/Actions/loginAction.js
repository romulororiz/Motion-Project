import { SET_USER, SET_TOKEN } from './actionTypes'

export const setUser = data => {
    return {
        type: SET_USER,
        payload: [data.access, data.user]
    }
}

export const setToken = data => {
    return {
        type: SET_TOKEN,
        payload: data
    }
}

const loginAction = (userCredentials, history) => (dispatch, getState) => {
	const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
		}),
		body: JSON.stringify(userCredentials),
	};
	fetch(url, config)
		.then(res => res.json())
		.then(data => {
			dispatch(setUser(data));
			// console.log(data.user);
			localStorage.setItem('token', data.access);
			localStorage.setItem('user', data.user);
			if (data.access) {
				history.push('/feed');
			}
		});
};

export default loginAction;