import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import postAction from '../../../store/Actions/postAction';
import useLockBodyScroll from './useLockBodyScroll';
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
	ActionsModal,
	AttachmentsModal,
} from './styles';
import imgIcon from '../../../assets/svgs/icon-image.svg';
import linkIcon from '../../../assets/svgs/icon-link.svg';
import avatar from '../../../assets/images/users/romulo.jpg';
import send from '../../../assets/svgs/send_button.svg';
import Button from '../../../style/Button';

const ModalBox = () => {
	useLockBodyScroll();

	const [showModal, setShowModal] = useState(true);
	const [picture, setPicture] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useDispatch();

	const closeModalHandler = () => {
		setShowModal(false);
	};

	const addPicHandler = e => {
		setPicture(URL.createObjectURL(e.target.files[0]));
	};

	const submitPost = () => {
		const getData = async () => {
			const data = await dispatch(postAction(content));
			console.log(data);
		};
		getData();
	};

	return (
		<Fragment>
			{showModal ? (
				<ModalExtContainer>
					<ModalIntContainer>
						<ContentSection>
							<img src={avatar} width='70px' alt='avatar' />
							<img src={picture} />
							<textarea
								name=''
								id=''
								cols='50'
								rows='5'
								onChange={e => setContent(e.currentTarget.value)}
							></textarea>
						</ContentSection>
						<ActionsModal>
							<AttachmentsModal>
								<label htmlFor='img-attach'>
									<img src={imgIcon} width='35px' alt='attach-img' />
								</label>
								<input type='file' id='img-attach' onChange={addPicHandler} />
								<label htmlFor='link-attach'>
									<img src={linkIcon} width='35px' alt='attach-link' />
								</label>
								<input type='file' id='link-attach' />
							</AttachmentsModal>
							<Button sendModal>
								<img src={send} alt='send' onClick={submitPost} />
							</Button>
						</ActionsModal>
						<i onClick={closeModalHandler} className='fas fa-times'></i>
					</ModalIntContainer>
				</ModalExtContainer>
			) : null}
		</Fragment>
	);
};

export default ModalBox;
