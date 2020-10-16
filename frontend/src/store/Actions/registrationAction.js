import baseUrl from '../../helper/url_helper';

export const registrationAction = regEmail => async (dispatch, getState) => {
	const url = `${baseUrl}/backend/api/auth/registration`;
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({ regEmail }),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default registrationAction;
