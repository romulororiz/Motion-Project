import React from 'react';
import Login from '../pages/Login';
import Feed from '../pages/Feed';
import Default from '../pages/Default';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import authHOC from '../components/authHOC';
import UserProfile from '../pages/UserProfile';
const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Default} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/feed' component={authHOC(Feed)} />
				<Route exact path='/user-profile' component={authHOC(UserProfile)} />
			</Switch>
		</Router>
	);
};

export default Routes;
