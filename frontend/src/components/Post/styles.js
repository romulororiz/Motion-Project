import styled from 'styled-components';
import { NewPostContainer } from '../../components/Feed/NewPost/styles';
import {
	DropdownMenu,
	ProfileWrapper,
} from '../Feed/Navbar/styles';

export const UserPost = styled(NewPostContainer)`
	/* background-color: green; */
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin-bottom: 0;
	position: relative;
`;

export const DropdownMenuPost = styled(DropdownMenu)`
	background: #fff;
	width: 180px;
	height: 100px;
	position: absolute;
	top: -4rem;
	right: -9rem;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const EditWrapper = styled(ProfileWrapper)`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 50%;
	padding-left: 1rem;
	color: #000;
	cursor: pointer;
		&:hover {
			background: #f2f2f2;

	img {
		margin-right: 1rem;
	}
`;

export const DeleteWrapper = styled(EditWrapper)``;

export const PostInfo = styled.section`
	/* background-color: red; */
	width: 100%;
	padding: 1rem;
	display: flex;
	/* justify-content: flex-start; */
`;

export const UserAvatar = styled.div`
	/* background-color: green; */
	width: 15%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const UserInfo = styled.div`
	display: flex;
	width: 65%;
	flex-direction: column;
	justify-content: center;
	line-height: 24px;
	span:nth-child(2) {
		color: ${props => props.theme.dimBlack};
	}
`;

export const Menu = styled.div`
	/* background: purple; */
	width: 20%;
	display: flex;
	justify-content: flex-end;
	padding-right: 25px;
	align-items: center;
	img {
		cursor: pointer;
	}
`;

export const PostContent = styled.section`
	/* background-color: red; */
	text-align: justify;
	width: 100%;
	margin-top: -20px;
	padding: 1.5rem 2.5rem;
`;

export const PostActions = styled.section`
	/* background-color: red; */
	width: 100%;
	height: 15%;
	padding: 0 1.5rem 1rem 1.5rem;
	display: flex;
	align-items: center;
	img {
		cursor: pointer;
	}
`;

export const Actions = styled.div`
	/* background-color: green; */
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 40%;
`;

export const Likes = styled.div`
	/* background-color: green; */
	width: 60%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: ${props => props.theme.dimBlack};
`;
