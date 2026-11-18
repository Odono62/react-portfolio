import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import { initialProjects } from "../data/projects.js";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <SectionTitle eyebrow="SELECTED WORK" title="Projects with a purpose" description="A few learning projects where I practise turning an idea into a usable interface." />
        <div className="projects-grid">
          {initialProjects.slice(0, 3).map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
        <div className="center-action"><Link className="button button-secondary" to="/projects">View all projects →</Link></div>
      </section>
      <Skills />
      <section className="learning-banner container">
        <div><p className="eyebrow">THE JOURNEY</p><h2>Progress comes from building.</h2><p>I'm learning the fundamentals, writing code, debugging mistakes, and improving one project at a time.</p></div>
        <Link className="button button-primary" to="/about">More about me ↗</Link>
      </section>
      <Contact />
    </>
  );
}
