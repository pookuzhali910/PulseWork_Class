import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/"

function Register() {

  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: zodResolver(registerschema)
  });

  function onSubmit1(data) {console.log(data);
    alert("register success");
    navigate("/");
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit1)}>
        <input type="text" placeholder="Enter you name" {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type="email" placeholder="Enter you email"{...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Enter you password" {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="number" placeholder="Enter you number" {...register("age")}/>
        <p>{errors.age?.message}</p>
     <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Register;