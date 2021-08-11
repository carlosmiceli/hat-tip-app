import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import nodlinksReducer from "./nodlink/reducer";

const initialState = {};
//this is for redux devtool purpose
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export const reducer = combineReducers({
	user: userReducer,
	nodlinks: nodlinksReducer,
});

export type RootState = ReturnType<typeof store.getState>;

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;
