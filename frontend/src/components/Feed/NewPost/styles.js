import styled from 'styled-components';

export const NewPostContainer = styled.section`
	/* background-color: green; */
	max-width: 560px;
	width: 100%;
	height: 140px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 4px;
	background: #fff;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.15);
	margin-top: 3rem;

	img {
		border-radius: 100px;
	}

	input {
		letter-spacing: 0.03rem;
		font-size: ${props => props.theme.fontNormal};
		width: 60%;
		height: 30px;
		outline: none;
		border: none;
	}
`;
