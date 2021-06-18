import { useForm } from "react-hook-form";
import './styles.scss'

export default function Login() {
  const { register, handleSubmit } = useForm();
  const login = (data: object) => alert(data);

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(login)}>
            <input {...register("email")} placeholder="Email" />
            <input {...register("password")} placeholder="Password" />
            <input type="submit" />
        </form>
    </div>
  );
}