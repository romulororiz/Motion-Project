import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	NavbarFeed,
	NavbarLinkWrapper,
	LogoWrapper,
	PostLinkWrapper,
	FindFriendsWrapper,
	ActionsWrapper,
	NotificationsWrapper,
	AvatarWrapper,
	MenuWrapper,
	DropdownMenu,
	ProfileWrapper,
	LogoutWrapper,
} from './styles';
import logo from '../../../assets/images/logo.png';
import postsImg from '../../../assets/images/posts_logo.png';
import findFriendsImg from '../../../assets/svgs/icon-friends.svg';
import bell from '../../../assets/svgs/notification_bell.svg';
import avatar from '../../../assets/images/users/romulo.jpg';
import menu from '../../../assets/svgs/menu.svg';
import profileImg from '../../../assets/svgs/icon-profile.svg';
import logoutImg from '../../../assets/svgs/icon-logout.svg';

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const dropdownHandler = () => {
		setShowDropdown(showDropdown => !showDropdown);
	};

	return (
		<NavbarFeed>
			<NavbarLinkWrapper>
				<LogoWrapper>
					<Link to='/feed'>
						<img src={logo} width='26px' height='26px' alt='logo' />
						<h1>Motion</h1>
					</Link>
				</LogoWrapper>
				<PostLinkWrapper>
					<Link to='/feed'>
						<img src={postsImg} alt='posts' />
						<span href=''>Posts</span>
					</Link>
				</PostLinkWrapper>
				<FindFriendsWrapper>
					<Link to='#'>
						<img src={findFriendsImg} alt='find-friends' />
						<span href=''>Friends</span>
					</Link>
				</FindFriendsWrapper>
			</NavbarLinkWrapper>
			<ActionsWrapper>
				<NotificationsWrapper>
					<img src={bell} alt='notifications' />
					<span>3</span>
				</NotificationsWrapper>
				<AvatarWrapper>
					<Link to='/user-profile'>
						<img src={avatar} width='50px' alt='avatar' />
					</Link>
				</AvatarWrapper>
				<MenuWrapper>
					<img src={menu} alt='menu' onClick={dropdownHandler} />
					{showDropdown ? (
						<DropdownMenu>
							<ProfileWrapper>
								<Link to='/user-profile'>
									<img src={profileImg} width='22px' alt='profile' />
									Profile
								</Link>
							</ProfileWrapper>
							<LogoutWrapper>
								<Link to='#'>
									<img src={logoutImg} width='22px' alt='profile' />
									Logout
								</Link>
							</LogoutWrapper>
						</DropdownMenu>
					) : null}
				</MenuWrapper>
			</ActionsWrapper>
		</NavbarFeed>
	);
};

export default Navbar;
