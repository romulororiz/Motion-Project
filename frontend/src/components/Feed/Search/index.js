import React from 'react';
import { Link } from 'react-router-dom';
import { SearchWrapper, Search, Interactions } from './styles';
import searchIcon from '../../../assets/svgs/search_icon.svg';

const SearchBar = () => {
	return (
			<SearchWrapper>
				<Search>
					<img src={searchIcon} alt='' />
					<input type='text' placeholder='Search posts...' />
				</Search>
				<Interactions>
					<Link to='#'>Liked</Link>
					<Link to='#'>Friends</Link>
					<Link to='#'>Follow</Link>
				</Interactions>
			</SearchWrapper>
	);
};

export default SearchBar;
