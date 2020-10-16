import baseUrl from '../../helper/url_helper';

export const userInfoAction = () => async (dispatch, getState) => {
	const { token } = getState();
	const url = `${baseUrl}/backend/api/users/me/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default userInfoAction;
