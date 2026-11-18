import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" to="/"><span className="brand-mark">OJ</span><span>Odono<span className="accent">.</span></span></Link>
        <p>Designed with curiosity and built with React.</p>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </footer>
  );
}
