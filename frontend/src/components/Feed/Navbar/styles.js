import styled from 'styled-components';

export const NavbarFeed = styled.nav`
	/* background-color: blue; */
	color: #000 !important;
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
	position: relative;
`;

export const NavbarLinkWrapper = styled.section`
	/* background-color: red; */
	font-size: ${props => props.theme.fontNormal};
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const LogoWrapper = styled.div`
	/* background-color: green; */
	height: 100%;
	display: flex;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #000;
	}
	h1 {
		font-size: ${props => props.theme.fontMedium};
		margin-left: 12px;
		font-weight: 400;
	}
`;

export const PostLinkWrapper = styled.div`
	/* background: yellow; */
	max-width: 120px;
	width: 12%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	border-bottom: 2px solid #ad73fd;
	span {
		margin-left: 12px;
	}
	a {
		width: 100%;
		text-decoration: none;
		color: #000;
		display: flex;
	}
`;

export const FindFriendsWrapper = styled.div`
	/* background: yellow; */
	width: 15%;
	max-width: 120px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	span {
		margin-left: 12px;
	}
	a {
		width: 100%;
		text-decoration: none;
		color: #000;
		display: flex;
	}
`;

export const ActionsWrapper = styled.section`
	/* background-color: red; */
	width: 60%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const NotificationsWrapper = styled.div`
	/* background-color: blue; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5%;
	height: 50%;
	position: relative;

	img {
		cursor: pointer;
	}

	span {
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding: 0.75rem;
		position: absolute;
		top: -6px;
		right: -8px;
		color: #fff;
		background: ${props => props.theme.gradientFeed};
	}
`;

export const AvatarWrapper = styled.div`
	margin: 0 2.5rem 0 3rem;

	img {
		border-radius: 100px;
		cursor: pointer;
	}
`;

export const MenuWrapper = styled.div`
	margin-right: 3rem;

	img {
		cursor: pointer;
	}
`;

export const DropdownMenu = styled.section`
	background: #fff;
	width: 180px;
	height: 100px;
	position: absolute;
	top: 80px;
	right: 35px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50%;

	img {
		margin-right: 1rem;
	}
	a {
		padding-left: 1rem;
		width: 100%;
		text-decoration: none;
		color: #000;
		display: flex;
		align-items: center;
		&:hover {
			background: #f2f2f2;
		}
	}
`;

export const LogoutWrapper = styled(ProfileWrapper)``;
