import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./login.css";
const Login: React.FC = () => {
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
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700"></label>
        <input
          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        <p className="text-red-500 text-center mb-4">
          {errors && errors.email?.message}
        </p>
        <label className="block text-sm font-medium text-gray-700"></label>
        <input
          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />
        <p className="text-red-500 text-center mb-4">
          {errors && errors.password?.message}
        </p>
        <button
          className="border p-1 rounded-md w-full bg-blue-500 text-white hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
