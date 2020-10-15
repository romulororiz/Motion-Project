import styled from 'styled-components';

const Button = styled.button`
	appearance: none;
	outline: none;
	font-size: ${props => props.theme.fontSmall};
	padding: 12px 28px;
	border-radius: 100px;
	border: 2px solid rgba(187, 184, 234, 0.5);
	cursor: pointer;

	${props => {
		if (props.store) {
			return `
			color: #fff;
			background: transparent;
			`;
		}

		if (props.signUp) {
			return `
			color: #000;
			font-size: ${props.theme.fontSmall};
			background: transparent;
			margin: 0 20px 0 20px;
			text-transform: uppercase;
			letter-spacing: .05rem;
			`;
		}

		if (props.signIn) {
			return `
			position: absolute;
			bottom: 0;
			padding: 20px 86px;
			color: #000;
			text-transform: uppercase;
			letter-spacing: .08rem;
			border: none;
			font-size: ${props.theme.fontSmall};
			color: white;
			background: ${props.theme.gradient};
			`;
		}

		if (props.newPost) {
			return `
			font-size: ${props.theme.fontSmall};
			width: 60px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background: ${props.theme.gradient};
			cursor: pointer;
			`;
		}

		if (props.sendModal){
			return `
			font-size: ${props.theme.fontSmall};
			width: 60px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background: ${props.theme.gradient};
			cursor: pointer;
			`;
		}

		if (props.editProfile){
			return `
			background: #fff;
			padding: 12px 40px;
			letter-spacing: .08rem;
			&:hover{
				background: ${props.theme.perano};
				color: #fff;
			}
			`;
		}
	}}
`;

export default Button;
