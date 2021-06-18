import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const signup = (data: object) => alert(data);

  return (
    <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(signup)}>
            <input {...register("userName")} placeholder="Username" />
            <input {...register("email")} placeholder="Email" />
            <input {...register("password")} placeholder="Password" />
            <input type="submit" />
        </form>
    </div>
  );
}