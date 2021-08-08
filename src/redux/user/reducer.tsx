import {
	SET_USER,
	SET_AUTHENTICATED,
	SET_UNAUTHENTICATED,
} from "./actionTypes";

const initialState = {
	authenticated: false,
	credentials: {},
};

export default function userReducer(state = initialState, action: any) {
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {
				...initialState,
				authenticated: true,
			};
		case SET_UNAUTHENTICATED:
			return initialState;
		case SET_USER:
			return {
				...initialState,
				authenticated: true,
				credentials: action.payload,
			};
		default:
			return state;
	}
}
