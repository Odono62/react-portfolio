import { skillGroups } from "../data/skills.js";
import SectionTitle from "./SectionTitle.jsx";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionTitle eyebrow="MY TOOLKIT" title="Skills I'm growing" description="The tools I use today and the skills I'm deliberately practising next." />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-icon">{group.title === "Frontend" ? "⌘" : group.title === "Tools" ? "⚙" : "↗"}</div>
            <h3>{group.title}</h3>
            <div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
