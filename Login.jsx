
import {useState} from 'react';

function Login() {
 
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const handleSubmit=(event)=> {
    event.preventDefault();
    console.log(email, pass);
  };
  return (
       <form onSubmit={handleSubmit}>
    <div><input type="email"required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/> <br/>
         <input type="password" required placeholder="Enter your password" value={pass} onChange={(e) => setPassword(e.target.value)}/><br/> <br/>
         <button type="submit" >submit</button>
    </div>
    </form>
  );

}

export default Login;