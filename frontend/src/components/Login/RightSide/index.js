import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginAction from '../../../store/Actions/loginAction';
import {
	LoginContainer,
	RightSideContainer,
	Navbar,
	InputBase,
} from './styles';
import userImg from '../../../assets/svgs/avatar.svg';
import password from '../../../assets/svgs/password.svg';
import Button from '../../../style/Button';
import Form from '../../../style/Form';
// import registrationAction from '../../../store/Actions/registrationAction';

const RightSideContent = () => {
	// const [showForm, setShowForm] = useState(false);
	const [formInputs, setFormInputs] = useState({
		email: 'rnmroriz@gmail.com',
		password: 'password',
	});
	// const [regEmail, setRegEmail] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const data = await dispatch(registrationAction(regEmail));
	// 	};
	// 	getData();
	// }, []);

	const submitHandler = e => {
		e.preventDefault();
		setFormInputs({
			...formInputs,
			email: '',
			password: '',
		});
	};

	// const regEmailHandler = e => {
	// 	setRegEmail(e.currentTarget.value);
	// 	console.log(regEmail);
	// };

	// const regSubmitHandler = e => {
	// 	e.preventDefault();
	// }

	const updateField = e => {
		setFormInputs({
			...formInputs,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const login = () => {
		dispatch(loginAction(formInputs, history));
	};

	// const showFormHandler = () => {
	// 	setShowForm(showForm => !showForm);
	// };

	return (
		<RightSideContainer>
			<Navbar>
				<p>Don't have an account?</p>
				<Button signUp>
					Sign Up
				</Button>
			</Navbar>
			<LoginContainer>
				<Form onSubmit={submitHandler}>
					<h2>Sign In</h2>
					<div>
						<InputBase
							name='email'
							type='text'
							placeholder='Username'
							value={formInputs.email}
							onChange={updateField}
						/>
						<img src={userImg} alt='avatar_img' />
					</div>
					<div>
						<InputBase
							name='password'
							type='password'
							placeholder='Password'
							value={formInputs.password}
							onChange={updateField}
						/>
						<img src={password} alt='password_img' />
					</div>
				</Form>

				<Button signIn onClick={login}>
					Sign in
					{/* {showForm ? 'Sign in' : 'Sign Up'} */}
				</Button>
			</LoginContainer>
		</RightSideContainer>
	);
};

export default RightSideContent;

// (
// 	<LoggedInContainer>
// 		<h1>
// 			Hello, {reduxState.user.first_name} {reduxState.user.last_name}
// 		</h1>
// 		<p>Welcome back</p>
// 		{/* <Link to='/feed' style={{color: '#000'}}>take me to feed</Link> */}
// 	</LoggedInContainer>
// )

// (
// 	<Form onSubmit={regSubmitHandler}>
// 		<h3>Create an account</h3>
// 		<InputBase
// 			type='text'
// 			name='email_reg'
// 			onChange={regEmailHandler}
// 			value={regEmail}
// 		/>
// 		{/* <img src={userImg} alt='avatar_img' /> */}
// 	</Form>
// )
