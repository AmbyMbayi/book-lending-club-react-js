import { combineReducers } from 'redux';
import members from './membersReducer';
import books from './bookReducer';

import borrowInfo from './borrowInfoReducer';

import errors from './errorsReducer';
import messages from './messagesReducer';
import categories from './categoryReducer';
import auth from './authReducer';

export default combineReducers({
	members,
	books,
	errors,
	auth,
	messages,
	categories,
	borrowInfo
});
