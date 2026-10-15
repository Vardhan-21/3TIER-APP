import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const login = async ()=>{
    try{
      const res = await axios.post("/auth/login",{email,password});
      localStorage.setItem("token",res.data.token);
      navigate("/dashboard");
    }catch{
      alert("Invalid credentials");
    }
  };

  return(
    <>
    <Navbar/>
    <div className="container">
      <div className="card">
        <h2 className="title">Student Login</h2>

        <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>

        <br/><br/>
        <button onClick={login}>Login</button>

        <br/><br/>
        <button onClick={()=>navigate("/register")}>Create Account</button>
      </div>
    </div>
    </>
  );
}
