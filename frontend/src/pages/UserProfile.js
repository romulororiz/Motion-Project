import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userInfoAction from '../store/Actions/userInfoAction';
import Navbar from '../components/Feed/Navbar';
import UserProfilePage from '../components/UserProfile';

const UserProfile = () => {
	const dispatch = useDispatch();
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userInfoAction());
			setUserInfo(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar />
			<UserProfilePage userInfo={userInfo}/>
		</Fragment>
	);
};

export default UserProfile;
