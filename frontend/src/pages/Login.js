import React from 'react';
import { MainWrapper } from '../components/Login/styles';
import LeftSideContent from '../components/Login/LeftSide';
import RightSideContent from '../components/Login/RightSide';

const Login = () => {
	return (
		<MainWrapper>
			<LeftSideContent />
			<RightSideContent />
		</MainWrapper>
	);
};

export default Login;
