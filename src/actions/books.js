import axios from 'axios';
import { createMessage } from './messages';

import { GET_BOOKS, ADD_BOOK, GET_BOOK, DELETE_BOOK, EDIT_BOOK } from './types';

//getting books
export const getBooks = () => (dispatch) => {
	axios
		.get('http://127.0.0.1:8000/api/books')
		.then((res) => {
			dispatch({
				type: GET_BOOKS,
				payload: res.data.data
			});
			console.log('books', res.data);
		})
		.catch((err) => console.log(err));
};

//get a book
export const getBook = (id) => (dispatch) => {
	axios
		.get(`http://127.0.0.1:8000/api/books/${id}`)
		.then((res) => {
			dispatch({
				type: GET_BOOK,
				payload: res.data.data
			});
		})
		.catch((err) => console.log(err));
};

//adding books

export const addBook = (book) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/books', book)
		.then((res) => {
			dispatch(createMessage({ addBook: 'book added successfully' }));
			dispatch({
				type: ADD_BOOK,
				payload: res.data.data
			});
			console.log('response', res.data);
		})
		.catch((err) => console.log(err));
};

//edit books

export const editBook = (id, updateBook) => (dispatch) => {
	axios
		.put(`http://127.0.0.1:8000/api/books/${id}`, updateBook)
		.then((res) => {
			dispatch(createMessage({ updateBook: 'book updated successfully' }));
			dispatch({
				type: EDIT_BOOK,
				payload: res.data
			});
		})
		.catch((err) => console.log(err));
};

//delete books

export const deleteBook = (id) => (dispatch) => {
	axios
		.delete(`http://127.0.0.1:8000/api/books/${id}`)
		.then((res) => {
			dispatch(createMessage({ deleteBook: 'book deleted successfully' }));
			dispatch({
				type: DELETE_BOOK,
				payload: id
			});
		})
		.catch((err) => console.log(err));
};
