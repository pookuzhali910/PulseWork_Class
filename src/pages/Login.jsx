import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");
  const location = useLocation();
  const [logindata, setLogindata] = useState({
    username:" ",
    password:" "
  })
  const navigate = useNavigate();
  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
  })
  }
  const formsubmit = (e) => {
    const registerdata = location.state
    e.preventDefault();
    console.log("Login data", logindata)
    console.log("Register data", registerdata)
    if(logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("if success")
      navigate("/dashboard", {
        state: logindata
      })
    }else{
      console.log("Inavalid crendentials")
    }
  }
  return (
    <>
    {/* <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" onClick={ console.log({ email, password })}>Submit</button>
    <button type="submit" onClick={() => print()}>Submit</button>
    */}
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-600 px-3 sm:px-6 py-6 sm:py-10">

    <form onSubmit={formsubmit}   className="w-full max-w-md bg-white p-2 sm:p-8 rounded-2xl shadow-xl space-y-4 sm:space-y-5">
       <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-5 sm:mb-6">
    Login
  </h1>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange} className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange} className="w-full min-w-0 border border-blue-500 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"/>
      <button type="submit" className="w-full py-3 text-sm sm:text-base bg-blue-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md">Submit</button> 
    </form>
    </div>
    </>
    );
}

export default Login