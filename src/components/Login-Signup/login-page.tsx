import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Login from "./login-form";
import Signup from "./signup-form";
// import { useHistory } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

export default function LoginPage() {
	const [loginOrSignup, changeLoginOrSignup] = useState(true);
	const loggedIn = useSelector((state: RootState) => state.user.authenticated);
	const history = createBrowserHistory({ forceRefresh: true });

	useEffect((): any => {
		if (loggedIn) {
			history.push("/dashboard");
		}
	}, [loggedIn, history]);

	const changeLoginScreen = () => changeLoginOrSignup(!loginOrSignup);

	return (
		<div>
			{loginOrSignup ? <Login /> : <Signup />}
			<button onClick={changeLoginScreen}>Change</button>
		</div>
	);
}
