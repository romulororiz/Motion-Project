import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import feedAction from '../store/Actions/feedAction';
import Post from '../components/Post';
import Navbar from '../components/Feed/Navbar';
import SearchBar from '../components/Feed/Search';
import NewPost from '../components/Feed/NewPost';
import PostsWrapper from '../style/PostsWrapper';
import Spinner from '../components/Feed/Spinner';

const Feed = () => {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(feedAction());
			setPosts(data);
		};
		getData();
	}, []);

	return (
		<Fragment>
			<Navbar posts={posts} />
			<SearchBar />
			<PostsWrapper>
				<NewPost />
				{posts.length ? (
					posts.map(post => <Post post={post} key={post.id} />)
				) : (
					<h3>Loading...</h3>
				)}
			</PostsWrapper>
		</Fragment>
	);
};
export default Feed;
