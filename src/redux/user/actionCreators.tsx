import * as userActionTypes from "./actionTypes";
import { GET_NODLINKS_BY_USER } from "../nodlink/actionTypes";
// import axios from "axios"
// import { NodLink, NodLinkAction, DispatchType } from "../../interfaces/nodlink-types"

export const loginUser = (userData: any) => (dispatch: any) => {
	// axios.post("login", userData)
	//  .then((res) => {
	const userSample = {
		u_id: 123,
		name: "Carlos",
		password: "carlos123",
	};

	if (
		userData.name === userSample.name &&
		userData.password === userSample.password
	) {
		//  const token = `Bearer ${res.data.token}`;
		// localStorage.setItem("token", token)
		localStorage.setItem("user", JSON.stringify(userSample));
		//  localStorage.setItem("token", `Bearer ${res.data.token}`);//setting token to local storage
		//  axios.defaults.headers.common["Authorization"] = token;//setting authorize token to header in axios

		const nodLinkExample = {
			id: 123123123,
			original: "https://www.youtube.com/watch?v=TkHr9sd41q8",
			nod: "https://www.youtube.com/watch?v=TkHr9sd41q8".concat(
				"/" + 123123123
			),
			description: "Link de prueba harcodeado",
			tipper: "John",
		};

		dispatch({
			type: GET_NODLINKS_BY_USER,
			payload: nodLinkExample,
		});
		window.location.href = "/dashboard"; //redirecting to index page after login success
		// })
		//  .catch((err) => {
		//  console.log(err);
		// });
	} else alert("Wrong login info");
};

//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
	//  axios.get("/user")
	//  .then(res => {
	// const userSample = {
	// 	u_id: 123,
	// 	name: "Carlos",
	// 	password: "carlos123",
	// };
	let user = localStorage.getItem(JSON.parse("user")); //remove when api cookies are setup
	dispatch({
		type: GET_NODLINKS_BY_USER,
		payload: user,
	});
	// }).catch(err => {
	//  console.log(err);
	// });
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
