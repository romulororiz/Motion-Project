import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const authHOC = WrappedComponent => {
	return () => {
		const token = useSelector(state => state.token);
		const history = useHistory();
		// console.log(token)
		if (token) {
			return <WrappedComponent />;
		} else {
			history.push('/login');
			return null;
		}
	};
};

export default authHOC;
