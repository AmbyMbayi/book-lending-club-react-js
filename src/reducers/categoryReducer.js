import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY } from '../actions/types';

const initialState = {
	categories: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};

		case GET_CATEGORY:
			return {
				...state,
				category: action.payload
			};
		case ADD_CATEGORY:
			return {
				...state,
				categories: [ ...state.categories, action.payload ]
			};

		case DELETE_CATEGORY: {
			return {
				...state,
				categories: [ ...state.categories.filter((category) => +category.id !== +action.payload) ],
				category: null
			};
		}

		default:
			return state;
	}
}
