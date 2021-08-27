import * as userActionTypes from "./actionTypes";
import { User } from "../../interfaces/users-types";
import { SET_AUTHENTICATED } from "../user/actionTypes";
import axios from "axios";
// import { NodLink, NodLinkAction, DispatchType } from "../../interfaces/nodlink-types"

const api = "http://localhost:3001/";

export const loginUser = (userData: any) => {
	axios
		.post(api + "login", userData)
		.then((res: any) => {
			if (res.data === true) {
				//  const token = `Bearer ${res.data.token}`;
				// localStorage.setItem("token", token)
				localStorage.setItem("user", JSON.stringify(userData));
				//  localStorage.setItem("token", `Bearer ${res.data.token}`);//setting token to local storage
				//  axios.defaults.headers.common["Authorization"] = token;//setting authorize token to header in axios

				// dispatch({
				// 	type: GET_NODLINKS_BY_USER,
				// 	payload: nodLinkExample,
				// });
				window.location.href = "/dashboard"; //redirecting to index page after login success
			} else {
				alert("WRONG!");
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signUpUser = (userData: any) => {
	console.log();
	axios
		.post(api + "signup", userData)
		.then((res: any) => {
			if (res.data === true) {
				//  const token = `Bearer ${res.data.token}`;
				// localStorage.setItem("token", token)
				localStorage.setItem("user", JSON.stringify(userData));
				//  localStorage.setItem("token", `Bearer ${res.data.token}`);//setting token to local storage
				//  axios.defaults.headers.common["Authorization"] = token;//setting authorize token to header in axios

				// dispatch({
				// 	type: GET_NODLINKS_BY_USER,
				// 	payload: nodLinkExample,
				// });
				window.location.href = "/dashboard"; //redirecting to index page after login success
			} else {
				alert("WRONG!");
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

//for fetching authenticated user information
export const checkUser = (dispatch: any) => {
	const userSample = {
		u_id: 123,
		name: "Carlos",
		password: "carlos123",
	};
	axios
		.get(api + "auth", {
			auth: { username: userSample.name, password: userSample.password },
		})
		.then((res) => {
			console.log(res);
			//  .then(res => {

			// let user = localStorage.getItem(JSON.parse("user")); //remove when api cookies are setup
			dispatch({
				type: SET_AUTHENTICATED,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const logoutUser = () => (dispatch: any) => {
	//  localStorage.removeItem("token");
	localStorage.removeItem("user");
	//  delete axios.defaults.headers.common["Authorization"]
	dispatch({
		type: userActionTypes.SET_UNAUTHENTICATED,
	});
	window.location.href = "/login";
};
