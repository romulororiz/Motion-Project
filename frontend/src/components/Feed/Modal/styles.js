import styled from 'styled-components';

export const ModalExtContainer = styled.main`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
`;

export const ModalIntContainer = styled.section`
	width: 40%;
	height: 55%;
	border-radius: 4px;
	background: #fff;
	position: absolute;
	top: 25%;
	left: 12%;
	i {
		cursor: pointer;
		color: #fff;
		font-size: ${props => props.theme.fontLarge};
		position: absolute;
		top: -25px;
		right: -25px;
	}
`;

export const ContentSection = styled.section`
	/* background-color: green; */
	display: flex;
	align-items: flex-start;
	height: 80%;
	padding: 1.5rem 1rem;
    position: relative;

	img:nth-child(1){
		border-radius: 100px;
	}

    img:nth-child(2){
        position: absolute;
        top: 60%;
        left: 15%;
        max-width: 140px;
    }

	textarea {
		font-size: ${props => props.theme.fontMedium};
		margin-top: 5px;
        margin-left: 18px;
		overflow: hidden;
		border: none;
		resize: none;
		outline: none;
	}
`;

export const ActionsModal = styled.section`
	/* background-color: green; */
	display: flex;
	align-items: center;
	width: 100%;
	height: 20%;
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	position: relative;

	button {
		position: absolute;
		right: 3rem;
	}
`;

export const AttachmentsModal = styled.div`
	/* background: red; */
    height: 100%;
	width: 30%;
	display: flex;
    align-items: center;
	justify-content: space-evenly;

	img {
		cursor: pointer;
	}

	input {
		display: none;
	}
`;
