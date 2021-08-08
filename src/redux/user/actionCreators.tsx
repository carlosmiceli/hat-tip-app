import * as actionTypes from "./actionTypes";
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
		dispatch(getUserData());
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
	const userSample = {
		u_id: 123,
		name: "Carlos",
		password: "carlos123",
	};
	dispatch({
		type: actionTypes.SET_USER,
		payload: userSample,
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
		type: actionTypes.SET_UNAUTHENTICATED,
	});
	window.location.href = "/login";
};
