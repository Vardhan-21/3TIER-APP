import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const register = async ()=>{
    try{
      await axios.post("/auth/register",{name,email,password});
      alert("Registered successfully");
      navigate("/");
    }catch{
      alert("Registration failed");
    }
  };

  return(
    <>
    <Navbar/>
    <div className="container">
      <div className="card">
        <h2 className="title">Create Account</h2>

        <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>

        <br/><br/>
        <button onClick={register}>Signup</button>
      </div>
    </div>
    </>
  );
}
