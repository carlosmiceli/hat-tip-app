import { Route, Redirect, RouteProps } from "react-router-dom";
import LoginPage from "../components/Login-Signup/login-page";

interface PrivateRouteProps extends RouteProps {
	component: any;
	isLoggedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, isLoggedIn, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				isLoggedIn ? (
					routeProps.location.pathname !== "/login" ? (
						<Component {...routeProps} />
					) : (
						<Redirect
							to={{
								pathname: "/dashboard",
								state: { from: routeProps.location },
							}}
						/>
					)
				) : (
					<LoginPage />
					// <Redirect
					// 	to={{
					// 		pathname: "/login",
					// 		state: { from: routeProps.location },
					// 	}}
					// />
				)
			}
		/>
	);
};

export default PrivateRoute;
