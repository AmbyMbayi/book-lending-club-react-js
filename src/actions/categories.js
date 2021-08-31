import axios from 'axios';
import { createMessage } from './messages';
import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, GET_CATEGORY, GET_ERRORS } from './types';

export const getCategories = () => (dispatch) => {
	axios
		.get('http://127.0.0.1:8000/api/categories')
		.then((res) => {
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data.data
			});
		})
		.catch((err) => console.log(err));
};

export const getCategory = (id) => (dispatch) => {
	axios
		.get(`http://127.0.0.1:8000/api/categories/${id}`)
		.then((res) => {
			dispatch({
				type: GET_CATEGORY,
				payload: res.data.data
			});
			console.log('response', res.data);
		})
		.catch((err) => console.log(err));
};

export const addCategory = (category) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/categories', category)
		.then((res) => {
			dispatch(createMessage({ addCategory: 'category added successfully' }));
			dispatch({
				type: ADD_CATEGORY,
				payload: res.data.data
			});
		})
		.catch((err) => {
			const errors = {
				msg: err.response.data.data,
				status: err.response
			};
			dispatch({
				type: GET_ERRORS,
				payload: errors
			});
		});
};

export const deleteCategory = (id) => (dispatch) => {
	axios
		.delete(`http://127.0.0.1:8000/api/categories/${id}`)
		.then((res) => {
			dispatch(createMessage({ deleteCategory: 'category deleted successfully' }));
			dispatch({
				type: DELETE_CATEGORY,
				payload: id
			});
		})
		.catch((err) => console.log(err));
};
