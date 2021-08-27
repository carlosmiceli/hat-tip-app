import { Route, Redirect, RouteProps } from "react-router-dom";

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
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: routeProps.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
