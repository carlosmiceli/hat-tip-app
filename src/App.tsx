import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./auth/private-route";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/user/actionCreators";
import Navbar from "./components/navbar";
import Landing from "./components/Landing/landing";
import LoginPage from "./components/Login-Signup/login-page";
import Dashboard from "./components/Dashboard/dashboard";
import Settings from "./components/Settings/settings";

function App() {
	const [checkLogin, setCheckLogin] = useState(
		localStorage.getItem("user") || "" ? true : false
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!checkLogin) {
			checkUser(dispatch);
		}
	}, [checkLogin, dispatch]);

	return (
		<div className="App">
			<div className="wrapper">
				<Navbar />
				<BrowserRouter>
					<Route exact path="/" component={Landing} />
					<PrivateRoute
						path="/login"
						isLoggedIn={checkLogin}
						component={LoginPage}
					/>
					<PrivateRoute
						isLoggedIn={checkLogin}
						path="/dashboard"
						component={Dashboard}
					/>
					<PrivateRoute
						isLoggedIn={checkLogin}
						path="/settings"
						component={Settings}
					/>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
