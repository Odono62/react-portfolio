import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { initialProjects } from "../data/projects.js";

export default function ProjectsPage() {
  // useState stores the current project list and selected filter.
  const [projects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section container page-top">
      <SectionTitle eyebrow="MY WORK" title="Projects" description="Small, practical projects that help me turn concepts into real code." />
      <div className="filter-row" aria-label="Filter projects">
        {filters.map((filter) => (
          <button key={filter} className={`filter-button ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)} type="button" aria-pressed={activeFilter === filter}>
            {filter}
          </button>
        ))}
      </div>
      <p className="result-count">Showing {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}</p>
      <div className="projects-grid">
        {visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
      <p className="small-note projects-note">Before submitting, make sure the project links point to the correct repositories and demos.</p>
    </section>
  );
}
