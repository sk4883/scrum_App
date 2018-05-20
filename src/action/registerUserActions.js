"use strict";

export function postUser(getUserValue) {
	return {type: "POST_USER", payload: getUserValue};
}
