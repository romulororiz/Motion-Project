import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/theme';
import * as theme from './style/theme';
import store from './store';
import { setToken } from './store/Actions/loginAction';
import { Provider } from 'react-redux';
import Routes from './routes';

console.log('in da fuckin shit')
const token = localStorage.getItem('token');
// const user = localStorage.getItem('user');
if (token) {
	store.dispatch(setToken(token));
}

const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</Provider>,
	root
);
