import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./auth/private-route";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/user/actionCreators";
// import { useSelector } from "react-redux";
// // import { RootState } from "./redux/store";
import Navbar from "./components/navbar";
import Landing from "./components/Landing/landing";
import LoginPage from "./components/Login-Signup/login-page";
import Dashboard from "./components/Dashboard/dashboard";
import Settings from "./components/Settings/settings";

function App() {
	const loggedIn = false;
	const dispatch = useDispatch();

	dispatch(checkUser);

	return (
		<div className="App">
			<div className="wrapper">
				<Navbar />
				<BrowserRouter>
					<PrivateRoute
						isLoggedIn={!loggedIn}
						exact
						path="/"
						component={Landing}
					/>
					<PrivateRoute
						isLoggedIn={!loggedIn}
						path="/login"
						component={LoginPage}
					/>
					<PrivateRoute
						isLoggedIn={loggedIn}
						path="/dashboard"
						component={Dashboard}
					/>
					<PrivateRoute
						isLoggedIn={loggedIn}
						path="/settings"
						component={Settings}
					/>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
