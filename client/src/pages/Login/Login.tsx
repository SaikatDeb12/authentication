import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Enter email" {...register("email")} />
        <input
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
      </form>
    </div>
  );
};

export default Login;
