import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Banner,
	ProfilePageWrapper,
	UserInfoContainer,
	AvatarContainer,
	UserPostsWrapper,
	UserDetailsContainer,
	Top,
	Bottom,
	UserDetails,
	ThingsUserLikesContainer,
} from './styles';
import userPostsAction from '../../store/Actions/userPostsAction';
import Post from '../../components/Post';
import banner from '../../assets/images/banner.jpg';
import avatar from '../../assets/images/users/romulo.jpg';
import Button from '../../style/Button';

const UserProfilePage = ({ userInfo }) => {
	const dispatch = useDispatch();

	const [posts, setPosts] = useState([]);

	const fullName = `${userInfo.first_name} ${userInfo.last_name}`;

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userPostsAction());
			setPosts(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Banner>
				<img src={banner} width='200px' alt='banner' />
			</Banner>
			<ProfilePageWrapper>
				<UserInfoContainer>
					<AvatarContainer>
						<img src={avatar} width='120px' alt='avatar' />
						<h1>{fullName}</h1>
						<p>Zürich - Switzerland</p>
						<Button editProfile>Edit profile</Button>
					</AvatarContainer>
					<UserDetailsContainer>
						<Top>
							<UserDetails>
								<span>About</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
									quis architecto beatae vitae sit, assumenda deserunt, ratione
									ipsum exercitationem possimus sed quaerat voluptas tempora
									facilis veritatis rem praesentium accusamus. Quam.
								</p>
								<div className='contactInfo'>
									<div>
										<span>Email</span>
										<p>{userInfo.email}</p>
									</div>
									<div>
										<span>Phone</span>
										<p>+410783358747</p>
									</div>
								</div>
							</UserDetails>
							<ThingsUserLikesContainer>
								<span>Things I like</span>
								<div className='things'>
									<p>Workout</p>
									<p>Code</p>
									<p>Chill</p>
									<p>Game</p>
									<p>Travel</p>
								</div>
							</ThingsUserLikesContainer>
						</Top>
						<Bottom>
							<div className='numsWrapper'>
								<p>{userInfo.amount_of_posts}</p>
								<span>Posts</span>
							</div>
							<div className='numsWrapper'>
								<p>{userInfo.amount_of_likes}</p>
								<span>Likes</span>
							</div>
							<div className='numsWrapper'>
								<p>{userInfo.amount_of_friends}</p>
								<span>Friends</span>
							</div>
							<div className='numsWrapper'>
								<p>{userInfo.amount_of_followers}</p>
								<span>Followers</span>
							</div>
							<div className='numsWrapper'>
								<p>{userInfo.amount_following}</p>
								<span>Following</span>
							</div>
						</Bottom>
					</UserDetailsContainer>
				</UserInfoContainer>
				<UserPostsWrapper>
					{posts.map(post => (
						<Post post={post} key={post.id} />
					))}
				</UserPostsWrapper>
			</ProfilePageWrapper>
		</Fragment>
	);
};

export default UserProfilePage;
