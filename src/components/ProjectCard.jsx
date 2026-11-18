export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <span className="project-number">PROJECT / {String(project.id).padStart(2, "0")}</span>
        <span className="project-symbol" aria-hidden="true">{project.category === "UI Concept" ? "✳" : project.category === "Website" ? "▤" : "⌘"}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a>
          <a href={project.demo}>Details ↗</a>
        </div>
      </div>
    </article>
  );
}
