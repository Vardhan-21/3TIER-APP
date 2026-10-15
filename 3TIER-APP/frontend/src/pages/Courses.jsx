import Navbar from "../components/Navbar";

export default function Courses(){

  const courses=[
    "Linux","Shell Scripting","Git & GitHub","Maven","Tomcat",
    "Apache / Nginx","SonarQube","Nexus","Jenkins","Ansible",
    "AWS","Docker","Kubernetes","Terraform","Prometheus & Grafana",
    "DevSecOps","SRE"
  ];

  return(
    <>
    <Navbar/>
    <div className="container">
      <h1 className="title">DevOps Master Program</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
        gap:"20px"
      }}>
        {courses.map(c=>(
          <div key={c} className="card" style={{textAlign:"center"}}>
            <h3>{c}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
