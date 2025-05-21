import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Register: React.FC = () => {
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
    <div className="h-screen flex items-center justify-center gap-4 m-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="name" placeholder="Enter name" {...register("name")} />
        <p>{errors && errors.name?.message}</p>
        <input type="email" placeholder="Enter email" {...register("email")} />
        <p>{errors && errors.email?.message}</p>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
        <p>{errors && errors.password?.message}</p>
      </form>
    </div>
  );
};

export default Register;
