import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard(){
  const navigate = useNavigate();

  return(
    <>
    <Navbar/>
    <div className="container">
      <div className="card" style={{textAlign:"center"}}>
        <h1>Welcome to Pythonlife DevSecops with AI</h1>
        <p style={{margin:"15px 0"}}>Your DevOps Learning Platform</p>

        <button onClick={()=>navigate("/courses")}>
          Browse Courses
        </button>
      </div>
    </div>
    </>
  );
}
