import styled from 'styled-components';

export const SearchWrapper = styled.section`
	background-color: #F2F2F2;
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Search = styled.div`
	/* background-color: red; */
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	input {
		font-size: ${props => props.theme.fontNormal};
		border: none;
		outline: none;
		margin-left: 1.2rem;
		height: 30px;
		background: transparent;
	}
`;

export const Interactions = styled.div`
	/* background-color: blue; */
	height: 100%;
	width: 30%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	a {
		text-decoration: none;
		color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		height: 100%;
	}

	a:nth-child(1) {
		color: #000;
		border-bottom: 2px solid #000;
	}

	a:nth-child(2) {
		margin: 0 2.4rem;
	}
`;
