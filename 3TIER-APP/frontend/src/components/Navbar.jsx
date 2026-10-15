import { useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2>PYTHONLIFE-KRISHNA-DEVOPS</h2>
      <div>
        <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
      </div>
    </div>
  );
}
