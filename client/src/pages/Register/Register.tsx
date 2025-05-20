import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const schema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(4, "Min. characters should be atleast 4"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="name" placeholder="Enter name" {...register("name")} />
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
