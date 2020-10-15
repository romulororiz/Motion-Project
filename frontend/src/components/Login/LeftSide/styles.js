import styled from 'styled-components';
import backgroundImg from '../../../assets/images/background_image.png';

export const LeftSideContainer = styled.section`
	text-align: center;
	width: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-image: url(${backgroundImg}), ${props => props.theme.gradient};
	background-repeat: no-repeat;
	background-size: cover;
	/* background-color: red; */
`;

export const LeftSideContentWrapper = styled.section`
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center ;
	color: #fff;
`;

export const Title = styled.h1`
	font-size: ${props => props.theme.fontLarge};
	margin: 12px 0 22px 0;
	letter-spacing: 0.2rem;
	font-weight: 400;
`;

export const Description = styled.p`
	font-size: ${props => props.theme.fontNormal};
	width: 60%;
	color: ${props => props.theme.perano};
	line-height: 24px;
	font-weight: 500;
`;

export const BtnWrapper = styled.div`
	width: ${props => (props.social ? '50%' : '80%')};
	display: flex;
	justify-content: space-evenly;
	margin-top: ${props => (props.social ? '0' : '40px')};
	position: ${props => (props.social ? 'absolute' : 'relative')};
	bottom: ${props => (props.social ? '75px' : '0')};

	i {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.3rem;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		color: ${props => props.theme.slateBlue};
		background-color: ${props => props.theme.perano};
		cursor: pointer;
		font-size: 1.2rem;
	}

	i.fa-instagram {
		font-size: 1.5rem;
	}

	i.fa-twitter {
		margin: 0 -60px 0 -60px;
	}
`;

export const Footer = styled.footer`
	position: absolute;
	bottom: 32px;

	p {
		font-size: 12px;
	}
`;
