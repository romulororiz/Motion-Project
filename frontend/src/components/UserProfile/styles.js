import styled from 'styled-components';

export const ProfilePageWrapper = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const Banner = styled.section`
	width: 100vw;
	height: 45vh;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const UserInfoContainer = styled.section`
	background: #fff;
	max-width: 1300px;
	width: 80%;
	height: 450px;
	display: flex;
	margin-top: -12rem;
	border-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.15);
`;

export const AvatarContainer = styled.section`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-right: 2px solid rgba(0, 0, 0, 0.1);

	img {
		border-radius: 50%;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: ${props => props.theme.fontMedium};
	}

	p {
		font-size: ${props => props.theme.fontNormal};
		margin-top: 0.5rem;
	}

	button {
		text-transform: uppercase;
		margin-top: 2.5rem;
	}
`;

export const UserDetailsContainer = styled.section`
	/* background: red; */
	width: 70%;
	height: 100%;
`;

export const Top = styled.section`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: row;
	border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const UserDetails = styled.div`
	width: 50%;
	height: 100%;
	padding: 3rem 2rem;
	line-height: 20px;

	span {
		font-size: 0.9rem;
	}

	p {
		margin-top: 0.5rem;
	}

	.contactInfo {
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
`;

export const ThingsUserLikesContainer = styled(UserDetails)`
	.things {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	p {
		margin-top: 1rem;
		cursor: pointer;
		font-size: 0.8rem;
		border-radius: 100px;
		padding: 0.5rem 1.5rem;
		background: rgba(0, 0, 0, 0.05);
	}
`;

export const Bottom = styled.section`
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;

	.numsWrapper {
		padding-right: 1.5rem;
		p {
			font-size: ${props => props.theme.fontMedium};
			margin-bottom: 0.5rem;
		}
		span {
			color: ${props => props.theme.dimBlack};
		}
	}

	.numsWrapper:nth-child(1) {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 3px solid #ad73fd;
		span {
			color: #000;
		}
	}
`;

export const UserPostsWrapper = styled.section`
padding: 0 12rem;
max-width: 1600px;
width: 100%;
margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 2.5rem;
	grid-column-gap: 5rem;
`;
