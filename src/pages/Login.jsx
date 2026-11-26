import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");
  const [formdata, setFormdata] = useState({
    username:" ",
    password:" "
  })
  const navigate = useNavigate();
  function handlechange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
  })
  }
  const formsubmit = (e) => {
    e.preventDefault();
    alert("Login successful");
    navigate("/dashboard",{
      state:formdata
    })
    console.log(formdata);
  }
  return (
    <>
    {/* <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" onClick={ console.log({ email, password })}>Submit</button>
    <button type="submit" onClick={() => print()}>Submit</button>
    */}
    <form onSubmit={formsubmit}>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange} />
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange} />
      <button type="submit">Submit</button> 
    </form>
    </>
    );
}

export default Login