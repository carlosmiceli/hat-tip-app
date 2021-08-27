import { useForm } from "react-hook-form";
import { signUpUser } from "../../redux/user/actionCreators";
import { useDispatch } from "react-redux";
import "./styles.scss";

export default function Signup() {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const signup = (data: object) => dispatch(signUpUser(data));

	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit(signup)}>
				<input {...register("name")} placeholder="Name" />
				<input {...register("email")} placeholder="Email" />
				<input {...register("password")} placeholder="Password" />
				<input type="submit" />
			</form>
		</div>
	);
}
