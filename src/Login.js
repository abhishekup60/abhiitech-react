import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
      
function Login(){
      const navigate = useNavigate();
      useEffect(() => {
        if (localStorage.getItem("user-info")) {
          navigate("/dashboard");
        }
      });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function login(e)
    {   
        e.preventDefault(); 
        const Item = {email,password};
        try
        {
            let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
                },
            body: JSON.stringify(Item),
            });
            result = await result.json();
            // console.log(result);
            localStorage.setItem('authToken', JSON.stringify(result.data.token));
            localStorage.setItem("user_name", JSON.stringify(result.data.name));
            navigate("/dashboard");
        }
        catch (error) {
        console.error("Error:", error);
        }
        finally {
        console.log("finally");
        }
    }

       
    
    return(
        <>
            <Header />
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Username" />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    <button onClick={login} className="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;
// This is a simple login form component in React. It includes two input fields for username and password, and a submit button.
