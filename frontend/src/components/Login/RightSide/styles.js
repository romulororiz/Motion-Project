import styled from 'styled-components';

export const RightSideContainer = styled.section`
	height: 100%;
	width: 60%;
`;

export const Navbar = styled.nav`
	/* background-color: red; */
	height: 80px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	p {
		font-size: ${props => props.theme.fontNormal};
		color: #000;
	}
`;

export const LoginContainer = styled.section`
	text-align: center;
	height: 75%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: blue; */
	position: relative;

	h2 {
		font-size: 2.3rem;
		color: #000;
		letter-spacing: 0.15rem;
		/* margin-bottom: -8px; */
	}

	div {
		width: 100%;
		position: relative;
	}

	img {
		position: absolute;
		left: 24px;
		bottom: 16px;
	}
`;

export const InputBase = styled.input`
	width: 90%;
	height: 50px;
	border: none;
	outline: none;
	color: #000;
	padding-left: 2.5rem;
	font-size: ${props => props.theme.fontNormal};
	margin-top: 50px;
	border-bottom: 2px solid rgba(187, 184, 234, 0.5);
`;

export const LoggedInContainer = styled.section`
	/* background-color: red; */
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: ${props => props.theme.fontExLarge};
		color: #000;
	}

	p {
		font-size: ${props => props.theme.fontNormal};
		color: #000;
	}
`;
