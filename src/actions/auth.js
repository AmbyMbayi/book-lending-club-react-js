import axios from 'axios';
import { returnErrors, createMessage } from './messages';

import {
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	USER_LOADED,
	USER_LOADING
} from './types';

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING });
	axios
		.get('http://127.0.0.1:8000/api/user', tokenConfig(getState))
		.then((res) => {
			try {
				console.log('response from user', res.data.user);
				dispatch({
					type: USER_LOADED,
					payload: res.data.user
				});
			} catch (e) {
				console.log(res, e);
			}
		})
		.catch((err) => {
			try {
				dispatch(returnErrors(err.response.data, err.response.status));
			} catch (e) {
				console.log('error being displayed', err);
			}
			dispatch({
				type: AUTH_ERROR
			});
		});
};

export const login = (email, password) => (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ email, password });
	console.log('body:', body);
	axios
		.post('http://127.0.0.1:8000/api/login', body, config)
		.then((res) => {
			console.log('response', res.data.user.name);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			console.log('eror', err.response.data);

			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL
			});
		});
};

export const register = ({ name, email, password }) => (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify({ name, email, password });

	axios
		.post('http://127.0.0.1:8000/api/register', body, config)
		.then((res) => {
			dispatch(createMessage({ registerUser: 'registered successfully' }));
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: REGISTER_FAIL
			});
		});
};

export const logout = () => (dispatch, getState) => {
	axios
		.post('http://127.0.0.1:8000/api/logout', null, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ logout: 'you are logged out' }));
			dispatch({ type: 'LOGOUT_SUCCESS' });
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

export const tokenConfig = (getState) => {
	const token = getState().auth.token;

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};
