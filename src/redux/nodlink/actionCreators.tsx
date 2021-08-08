import * as actionTypes from "./actionTypes";
import {
	NodLink,
	NodLinkAction,
	DispatchType,
} from "../../interfaces/nodlink-types";

export function addNodLink(link: NodLink) {
	const action: NodLinkAction = {
		type: actionTypes.ADD_NODLINK,
		link,
	};
	return simulateHttpRequest(action);
}

export function removeArticle(link: NodLink) {
	const action: NodLinkAction = {
		type: actionTypes.REMOVE_NODLINK,
		link,
	};
	return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: NodLinkAction) {
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action);
		}, 500);
	};
}
