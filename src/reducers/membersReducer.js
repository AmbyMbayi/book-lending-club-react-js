import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER, GET_MEMBER, GET_MEMBERS } from '../actions/types'

const initialState = {
    members: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
            }
        case GET_MEMBER:
            return {
                ...state,
                member: action.payload
            }
        case ADD_MEMBER:
            return {
                ...state,
                members: [...state.members, action.payload]
            }
        case EDIT_MEMBER: {
            return {
                ...state,
                member: action.payload
            }
        }
        case DELETE_MEMBER: {
            return {
                ...state,
                members: [...state.members.filter(member => +member.id !== +action.payload)],
                member: null
            }
        }

        default:
            return state;
    }
}