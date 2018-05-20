"use strict";

import {combineReducers} from "redux";
import {registerUserReducers} from "./registerUserReducers";
import {registerMemberReducers} from "./registerMemberReducers";

export default combineReducers({
	users: registerUserReducers,
	members: registerMemberReducers
});
