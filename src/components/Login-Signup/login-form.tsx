import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/user/actionCreators";
import { useDispatch } from "react-redux";
import "./styles.scss";

export default function Login() {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const login = (data: object) => dispatch(loginUser(data));

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(login)}>
				<input {...register("name")} placeholder="Name" />
				<input {...register("password")} placeholder="Password" />
				<input type="submit" />
			</form>
		</div>
	);
}
