import React, { useState, Fragment, useLayoutEffect } from 'react';
import { NewPostContainer } from './styles';
import Button from '../../../style/Button';
import avatar from '../../../assets/images/users/romulo.jpg';
import send from '../../../assets/svgs/send_button.svg';
import ModalBox from '../../Feed/Modal/';

const NewPost = () => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(value => !value);
	};

	return (
		<Fragment>
			{showModal ? <ModalBox /> : null}
			<NewPostContainer>
				<img src={avatar} width='70px' alt='avatar' />
				<input
					onClick={showModalHandler}
					type='text'
					placeholder="What's on your mind, Romulo?"
				/>
				<Button newPost>
					<img src={send} alt='send' />
				</Button>
			</NewPostContainer>
		</Fragment>
	);
};

export default NewPost;
