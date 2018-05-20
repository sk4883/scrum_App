import {createStore} from "redux";


export function registerMemberReducers (state = { members: [] } , action) {
	switch(action.type) {

	case "GET_MEMBER":
		break;

	case "POST_MEMBER" : 
		if (state.members.length) {
			return Object.assign({}, { members: [...state.members, action.payload]} );
		} else {
			return Object.assign({}, { members: [action.payload]} );
		}
		break;
	}

	return state;   
}