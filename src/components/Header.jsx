import { NavLink, Link } from "react-router-dom";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="Odono John home">
          <span className="brand-mark">OJ</span>
          <span>Odono<span className="accent">.</span></span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <a href="/#contact">Contact</a>
        </nav>

        <button className="theme-toggle" type="button" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </header>
  );
}
