import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Default = () => {
	const token = useSelector(state => state.token);
	const history = useHistory();

	useEffect(() => {
		if (token) {
			history.push('/feed');
		} else history.push('/login');
	});

	return <div></div>;
};

export default Default;
