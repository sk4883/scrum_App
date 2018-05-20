import {createStore} from "redux";


export function registerUserReducers (state = { users:[] } , action) {
	switch(action.type) {

	case "POST_USER" : 
	 	let users = state.users.concat(action.payload);
	 	return {users};
		break;

	// case "GET_AIRPORTS": 
	// 	  // let airportsGet = {[...state.airports]};
	// 	  // return airportsGet;
	// 	break;
	// case "POST_AIRPORTS":
	// 	let airports = state.airports.concat(action.payload);
	// 	return {airports};
	// 	break;

	// case "UPDATE_AIRPORT":
	// 	let updateAirport = [...state.airports];
	// 	const indexToUpdate = updateAirport.findIndex(
	// 		function(airport) {
	// 			return (
	// 				airport.id === action.payload.id
	// 			);
	// 		}
	// 	);
	// 	// let compare = [...state.airports][indexToUpdate];
	// 	const newAirportToUpdate = {
	// 		id: action.payload.id,
	// 		location: action.payload.location,
	// 		flightAvailable: action.payload.flightAvailable,
	// 	};
	// 	return {airports: [...updateAirport.slice(0, indexToUpdate), newAirportToUpdate, 
	// 		...updateAirport.slice(indexToUpdate + 1)]};
	// 	break;
	// case "DELETE_AIRPORTS":
	// 	let deleteAirport = [...state.airports];
	// 	const indexToDelete = deleteAirport.findIndex(
	// 		function(airport) {
	// 			return airport.id === action.payload;
	// 		});
	// 	console.log("indexToDelete in airports", indexToDelete);
	// 	return {airports: [...deleteAirport.slice(0, indexToDelete),
	// 		...deleteAirport.slice(indexToDelete + 1)]};
	// 	break;

	}

	return state;   
}