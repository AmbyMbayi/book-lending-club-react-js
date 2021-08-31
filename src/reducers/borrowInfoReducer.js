import { BORROW_BOOK, GET_BORROWINFO } from '../actions/types';

const initialState = {
	borrowInfo: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BORROWINFO:
			return {
				...state,
				borrowInfo: action.payload
			};
		case BORROW_BOOK:
			return {
				...state,
				borrowInfo: [ ...state.borrowInfo, action.payload ]
			};

		default:
			return state;
	}
}
