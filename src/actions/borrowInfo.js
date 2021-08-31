import axios from 'axios';
import { GET_BORROWINFO, BORROW_BOOK } from './types';

export const getBorrowBookInfo = () => (dispatch) => {
	axios
		.get('http://127.0.0.1:8000/api/booksinfo')
		.then((res) => {
			dispatch({
				type: GET_BORROWINFO,
				payload: res.data.data.data
			});
			console.log('borrowed books', res.data.data.data);
		})
		.catch((err) => console.log(err));
};

export const borrowBook = (borrow_book) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/borrowbook', borrow_book)
		.then((res) => {
			//dispatch(createMessage({ addBook: 'book added successfully' }));
			dispatch({
				type: BORROW_BOOK,
				payload: res.data.data
			});
			console.log('response', res.data);
		})
		.catch((err) => console.log(err));
};
