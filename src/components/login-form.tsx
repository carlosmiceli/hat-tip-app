import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const login = (data: object) => alert(data);

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(login)}>
            <input {...register("firstName")} placeholder="First name" />
            <input {...register("lastName")} placeholder="Last name" />
            <input type="submit" />
        </form>
    </div>
  );
}