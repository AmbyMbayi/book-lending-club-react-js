import { GET_BOOKS, GET_BOOK, ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../actions/types';

const initialState = {
    books: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            }

        case GET_BOOK:
            return {
                ...state,
                book: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            }

        case EDIT_BOOK: {
            return {
                ...state,
                books: action.payload
            }
        }

        case DELETE_BOOK: {
            return {
                ...state,
                books: [...state.books.filter(book => +book.id !== +action.payload)],
                book: null
            }
        }

        default:
            return state;

    }
}