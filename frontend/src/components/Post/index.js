import React, { useState } from 'react';
import {
	UserPost,
	PostInfo,
	UserAvatar,
	UserInfo,
	Menu,
	PostContent,
	PostActions,
	Actions,
	Likes,
	EditWrapper,
	DeleteWrapper,
} from './styles';
import { DropdownMenuPost } from './styles';
import avatar from '../../assets/svgs/avatar.svg';
import menu from '../../assets/svgs/menu.svg';
import heart from '../../assets/svgs/heart.svg';
import share from '../../assets/svgs/share.svg';
import editIcon from '../../assets/svgs/icon-edit.svg';
import deleteIcon from '../../assets/svgs/icon-delete.svg';

const Post = ({ post }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const fullName = post.user.first_name + ' ' + post.user.last_name;

	return (
		<UserPost>
			<PostInfo>
				<UserAvatar>
					{post.user.avatar ? (
						<img src={post.user.avatar} alt='user-avatar' width='45px' />
					) : (
						<img src={avatar} width='45px' alt='' />
					)}
				</UserAvatar>
				<UserInfo>
					<span>{fullName}</span>
					<span>{post.created}</span>
				</UserInfo>
				<Menu>
					<img
						src={menu}
						alt='menu-post'
						onClick={() => setShowDropdown(showDropdown => !showDropdown)}
					/>
					{showDropdown ? (
						<DropdownMenuPost>
							<EditWrapper>
								<img src={editIcon} width='22px' alt='profile' />
								Edit
							</EditWrapper>
							<DeleteWrapper>
								<img src={deleteIcon} width='22px' alt='profile' />
								Delete
							</DeleteWrapper>
						</DropdownMenuPost>
					) : null}
				</Menu>
			</PostInfo>
			<PostContent>{post.content}</PostContent>
			<PostActions>
				<Actions>
					<img src={heart} alt='like' />
					<p>Like</p>
					<img src={share} alt='share' />
					<p>Share</p>
				</Actions>
				<Likes>
					<span>{post.amount_of_likes} likes</span>
				</Likes>
			</PostActions>
		</UserPost>
	);
};
export default Post;
