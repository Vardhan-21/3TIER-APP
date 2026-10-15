import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          Pythonlife <span style={{color:"#22c55e"}}>DevOps</span> Training
        </h1>

        <p style={styles.subtitle}>
          Learn Here and lead Any Where
        </p>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Contact */}
        <h3 style={styles.sectionTitle}>Trainer Contact</h3>

        <div style={styles.contactBox}>
          <p style={styles.phone}>📞 +91 9154083255</p>
          <p style={styles.phone}>📞 +91 8639957908</p>
        </div>

        {/* Social */}
        <h3 style={styles.sectionTitle}>Follow Us</h3>

        <div style={styles.socialRow}>
          <a
            href="https://www.youtube.com/@PythonLifetelugu"
            target="_blank"
            rel="noreferrer"
            style={styles.socialBtn}
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/pythonlifetelugu/"
            target="_blank"
            rel="noreferrer"
            style={styles.socialBtn}
          >
            Instagram
          </a>
        </div>

        {/* Button */}
        <button
          style={styles.button}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
          onClick={() => nav("/login")}
        >
          Student Login
        </button>

      </div>
    </div>
  );
}


/* ================= STYLES ================= */

const styles = {

  page:{
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(135deg,#020617,#0f172a,#0b1120)",
    fontFamily:"Poppins, sans-serif"
  },

  card:{
    width:"420px",
    padding:"45px 40px",
    borderRadius:"22px",
    background:"rgba(255,255,255,0.05)",
    backdropFilter:"blur(18px)",
    border:"1px solid rgba(255,255,255,0.08)",
    textAlign:"center",
    boxShadow:"0 30px 80px rgba(0,0,0,0.6)"
  },

  title:{
    fontSize:"30px",
    fontWeight:"800",
    marginBottom:"12px",
    color:"#e2e8f0"
  },

  subtitle:{
    fontSize:"15px",
    color:"#94a3b8",
    marginBottom:"25px",
    lineHeight:"1.6"
  },

  divider:{
    height:"1px",
    background:"linear-gradient(to right,transparent,#22c55e,transparent)",
    margin:"25px 0"
  },

  sectionTitle:{
    fontSize:"18px",
    fontWeight:"600",
    color:"#22c55e",
    marginBottom:"15px"
  },

  contactBox:{
    background:"rgba(34,197,94,0.08)",
    border:"1px solid rgba(34,197,94,0.2)",
    padding:"15px",
    borderRadius:"12px",
    marginBottom:"25px"
  },

  phone:{
    margin:"8px 0",
    fontWeight:"500",
    color:"#e2e8f0"
  },

  socialRow:{
    display:"flex",
    justifyContent:"center",
    gap:"15px",
    marginBottom:"30px"
  },

  socialBtn:{
    padding:"10px 18px",
    borderRadius:"10px",
    textDecoration:"none",
    color:"#22c55e",
    border:"1px solid rgba(34,197,94,0.4)",
    fontWeight:"600",
    transition:"0.3s"
  },

  button:{
    width:"100%",
    padding:"14px",
    borderRadius:"14px",
    border:"none",
    background:"linear-gradient(135deg,#22c55e,#06b6d4)",
    fontSize:"17px",
    fontWeight:"700",
    cursor:"pointer",
    transition:"0.3s"
  }
};
