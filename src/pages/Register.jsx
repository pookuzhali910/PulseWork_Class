import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("Registration successful")
        navigate("/", {
            state: data
        })
    }
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-600 px-3 sm:px-6 py-6 sm:py-10">

            <form onSubmit={handleSubmit(onSubmit1)}
            className="w-full max-w-md bg-white p-2 sm:p-8 rounded-2xl shadow-xl space-y-4 sm:space-y-5">
                  
                  <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-5 sm:mb-6">
                        Create Account
                    </h1>

            <input type="text" placeholder="Enter your name:" {...register("name")}
            className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
            <p className="text-sm text-red-500">{errors.name?.message}</p>

            <input type="email" placeholder="Enter your email:" {...register("email")}
            className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
            <p  className="text-sm text-red-500">{errors.email?.message}</p>

            <input type="password" placeholder="Enter your password:" {...register("password")} className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
            <p className="text-sm text-red-500">{errors.password?.message}</p>

            <input type="number" placeholder="Enter your age:" {...register("age")} className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
            <p className="text-sm text-red-500">{errors.age?.message}</p>

            <button type="submit"  className="w-full py-3 text-sm sm:text-base bg-blue-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md">
                Register</button>
        </form>
        </div>
        </>
    );
}

export default Register;