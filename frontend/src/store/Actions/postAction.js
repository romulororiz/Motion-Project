import baseUrl from '../../helper/url_helper';

export const postAction = content => async (dispatch, getState) => {
	const { token } = getState();
	const url = `${baseUrl}/backend/api/social/posts/`;
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
		body: JSON.stringify({ text_content: content }),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default postAction;
