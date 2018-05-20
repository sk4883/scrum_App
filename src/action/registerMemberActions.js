"use strict";

export function getMember() {
	return {
		type: "GET_MEMBER"
	};
}


export function postTeamMember(getTeamMember) {
	return {type: "POST_MEMBER", payload: getTeamMember};
}