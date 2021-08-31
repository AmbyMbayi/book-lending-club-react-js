import axios from 'axios';
import { returnErrors, createMessage } from './messages';

import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER, GET_ERRORS, GET_MEMBER, GET_MEMBERS } from './types';

//get members

export const getMembers = () => (dispatch) => {
	axios
		.get('http://127.0.0.1:8000/api/members')
		.then((res) => {
			dispatch({
				type: GET_MEMBERS,
				payload: res.data.data
			});
		})
		.catch((err) => console.log(err));
};

//get single member
export const getMember = (id) => (dispatch) => {
	axios
		.get(`http://127.0.0.1:8000/api/members/${id}`)
		.then((res) => {
			dispatch({
				type: GET_MEMBER,
				payload: res.data.data
			});
			console.log('response', res.data);
		})
		.catch((err) => console.log(err));
};

//add member
export const addMember = (member) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/members', member)
		.then((res) => {
			dispatch(createMessage({ addMember: 'member added successfully' }));
			dispatch({
				type: ADD_MEMBER,
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

//edit member
export const editMember = (id, updatedMember) => (dispatch) => {
	axios
		.put(`http://127.0.0.1:8000/api/members/${id}`, updatedMember)
		.then((res) => {
			dispatch(createMessage({ updateMember: 'member updated successfully' }));
			dispatch({
				type: EDIT_MEMBER,
				payload: res.data.member
			});
		})
		.catch((err) => console.log(err));
};

//delete Member
export const deleteMember = (id) => (dispatch) => {
	axios
		.delete(`http://127.0.0.1:8000/api/members/${id}`)
		.then((res) => {
			dispatch(createMessage({ deleteMember: 'member deleted successfully' }));
			dispatch({
				type: DELETE_MEMBER,
				payload: id
			});
		})
		.catch((err) => console.log(err));
};
