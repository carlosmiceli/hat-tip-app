import {
	ADD_NODLINK,
	GET_NODLINKS_BY_USER,
	REMOVE_NODLINK,
} from "./actionTypes";
import { NodLinksList } from "../../interfaces/nodlink-types";

const dashboard: NodLinksList = [];

const initialState = {
	dashboard,
};

export default function nodlinksReducer(state = initialState, action: any) {
	switch (action.type) {
		case ADD_NODLINK:
			return {
				...initialState,
				dashboard: [...initialState.dashboard, action.payload],
			};
		case GET_NODLINKS_BY_USER:
			return {
				...initialState,
				dashboard: action.payload,
			};
		case REMOVE_NODLINK:
			return {
				...initialState,
				dashboard: initialState.dashboard.filter(
					(nodlink) => nodlink !== action.payload
				),
			};
		default:
			return state;
	}
}
