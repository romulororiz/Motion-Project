export const postAction = content => async (dispatch, getState) => {

	const { token } = getState();
		// 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAxMjA3MzU5LCJqdGkiOiI5MTFjYzcxZGIxMmE0NWIyOWEzMzk1OGMyNDc4ZjYwMCIsInVzZXJfaWQiOjE3fQ.ul0c1d3DfaqMpjCbSXBc66J2Cx7d91Rv3EsQPFZCZFs';

	const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
		body: JSON.stringify({content}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default postAction;
