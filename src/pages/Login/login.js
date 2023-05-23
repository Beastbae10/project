import React  from "react";
import "./login.css"
import { FaApper } from "react-icons/fa";


const Login = () => {
    
        return (
            <div className="page">

            
     
        <div className="cover">
            <h1>Welcome Back!</h1>
            <input type="text" placeholder="user id" />
            <input type="password" placeholder="password" />

            <div className="login-btn"><a href="http://localhost:3004/pages/Dashboard/overview" >Login</a></div>
            <p> <a href="#">Forgotten your password?</a></p>

            </div>
           </div>
               

    )
}

export default Login
