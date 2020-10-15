import React from 'react';
import logo from '../../../assets/images/logo_white.png';
import apple from '../../../assets/svgs/apple.svg';
import google from '../../../assets/svgs/google.svg';
import {
	LeftSideContainer,
	Title,
	Description,
	BtnWrapper,
	Footer,
	LeftSideContentWrapper,
} from './styles';
import Button from '../../../style/Button';

const LeftSideContent = () => {
	return (
		<LeftSideContainer>
			<LeftSideContentWrapper>
				<img src={logo} alt='' />
				<Title>Motion</Title>
				<>
					<Description>
						Connect with friends and the world around you with Motion
					</Description>
				</>
				<BtnWrapper>
					<Button store>
						<img src={apple} alt='' />
					</Button>
					<Button store>
						<img src={google} alt='' />
					</Button>
				</BtnWrapper>
				<BtnWrapper social>
					<i className='fab fa-facebook-f'></i>
					<i className='fab fa-twitter'></i>
					<i className='fab fa-instagram'></i>
				</BtnWrapper>
				<Footer>
					<p>&copy; Motion 2018. All rights reserved.</p>
				</Footer>
			</LeftSideContentWrapper>
		</LeftSideContainer>
	);
};

export default LeftSideContent;
