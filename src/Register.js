import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() 
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(e)
  {   
      e.preventDefault(); 
      const Item = {name,email,password};
      console.warn(Item);
      try
      {
        let result = await fetch("http://localhost:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: 'application/json'
            },
          body: JSON.stringify(Item),
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/login");
    }
    catch (error) {
      console.error("Error:", error);
    }
    finally {
      console.log("finally");
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={signUp} className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
