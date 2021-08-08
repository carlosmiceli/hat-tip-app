import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/Landing/landing";
import LoginPage from "./components/Login-Signup/login-page";
import Dashboard from "./components/Dashboard/dashboard";
import Settings from "./components/Settings/settings";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Navbar />
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/settings">
							<Settings />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
