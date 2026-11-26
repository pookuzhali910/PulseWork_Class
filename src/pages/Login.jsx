
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
function Login() {
 
  const [formdata, setFormdata] = useState({
    username:"",password:""
  });
  const navigate=useNavigate();
  const handlechange=(e)=>{

    setFormdata({...formdata,[e.target.name]:e.target.value});
  };
  
  const handleSubmit=(event)=> {
    event.preventDefault();
    console.log(formdata);
    alert("Login Successfully");
    navigate("/dashboard");
    state.formdata;
  };
  return (
       <form onSubmit={handleSubmit}>
    <div><input type="text"required placeholder="Enter your username" name="username" onChange={handlechange} /><br/> <br/>
         <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange}/><br/> <br/>
         <button type="submit" >Login</button>
    </div>
    </form>
  );

}

export default Login;