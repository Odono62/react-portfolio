import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</p>
        <h1>Hi, I'm <span className="gradient-text">{profile.name}.</span><br />I build for the web.</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-description">{profile.intro}</p>
        <div className="button-row">
          <Link className="button button-primary" to="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
          <a className="button button-secondary" href="#contact">Contact me</a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.x} target="_blank" rel="noreferrer">X ↗</a>
        </div>
      </div>
      <div className="hero-art" aria-label="Decorative code card">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-card">
          <div className="code-card-top"><span></span><span></span><span></span><small>developer.js</small></div>
          <pre><code><span className="code-purple">const</span> developer = {"{"}{'\n'}  name: <span className="code-green">"Odono John"</span>,{'\n'}  focus: <span className="code-green">"Frontend"</span>,{'\n'}  learning: <span className="code-green">"React"</span>,{'\n'}  building: <span className="code-green">true</span>{'\n'}{"};"}{'\n\n'}<span className="code-purple">while</span> (curious) {"{"}{'\n'}  learn();{'\n'}  build();{'\n'}  improve();{'\n'}{"}"}</code></pre>
          <div className="code-card-footer"><span className="status-dot" /> Always learning, always building</div>
        </div>
        <div className="floating-badge badge-react">⚛ React</div>
        <div className="floating-badge badge-js">JS</div>
      </div>
    </section>
  );
}
