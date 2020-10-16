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

	const fullName = post.author.first_name + ' ' + post.author.last_name;

	return (
		<UserPost>
			<PostInfo>
				<UserAvatar>
					{/* {post.users.avatar ? (
						<img src={post.users.avatar} alt='user-avatar' width='45px' />
					) : ( */}
					<img src={avatar} width='45px' alt='' />
					{/* )} */}
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
			<PostContent>{post.text_content}</PostContent>
			<PostActions>
				<Actions>
					<img src={heart} alt='like' />
					<p>Like</p>
					<img src={share} alt='share' />
					<p>Share</p>
				</Actions>
				<Likes>
					<span>{post.likes_counter} likes</span>
				</Likes>
			</PostActions>
		</UserPost>
	);
};
export default Post;
