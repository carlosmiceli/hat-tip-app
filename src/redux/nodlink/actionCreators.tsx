import * as actionTypes from "./actionTypes";
// import {
// 	NodLink,
// 	NodLinkAction,
// 	DispatchType,
// } from "../../interfaces/nodlink-types";

// export function addNodLink(link: NodLink) {
// 	const action: NodLinkAction = {
// 		type: actionTypes.ADD_NODLINK,
// 		link,
// 	};
// 	return simulateHttpRequest(action);
// }

export function getLinksByUser(dispatch: any) {
	const nodLinkExample = {
		id: 123123123,
		original: "https://www.youtube.com/watch?v=TkHr9sd41q8",
		nod: "https://www.youtube.com/watch?v=TkHr9sd41q8".concat("/" + 123123123),
		description: "Link de prueba harcodeado",
		tipper: "John",
	};

	let user = localStorage.getItem(JSON.parse("user"));
	if (user) {
		dispatch({
			type: actionTypes.GET_NODLINKS_BY_USER,
			payload: nodLinkExample,
		});
	}

	// <th>l.original</th>
	// 						<th>l.nod</th>
	// 						<th>l.reward</th>
	// 						<th>l.description</th>
	// 						<th>l.tipper</th>
	// 						<th>l.stats</th>
}
