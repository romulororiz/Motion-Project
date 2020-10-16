export const userPostsAction = () => async (dispatch, getState) => {
	const { token } = getState();

	const url =
		'https://motion-backend.propulsion-learn.ch/backend/api/social/posts/users/1/';
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

export default userPostsAction;
