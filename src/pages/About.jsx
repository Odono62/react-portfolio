import { profile } from "../data/profile.js";
import SectionTitle from "../components/SectionTitle.jsx";
import Skills from "../components/Skills.jsx";

export default function About() {
  return (
    <>
      <section className="section container page-top about-page">
        <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Developer in progress." description="A quick introduction to the person behind the projects." />
        <div className="about-card">
          <div className="avatar">OJ</div>
          <div>
            <h3>{profile.name}</h3>
            <p className="hero-role">{profile.role}</p>
            <p>{profile.about}</p>
            <p><strong>Based in:</strong> {profile.location}</p>
          </div>
        </div>
        <div className="values-grid">
          <article className="value-card"><span>01</span><h3>Keep learning</h3><p>Understand why code works, not only how to copy it.</p></article>
          <article className="value-card"><span>02</span><h3>Build to learn</h3><p>Use small projects to practise one concept at a time.</p></article>
          <article className="value-card"><span>03</span><h3>Improve with feedback</h3><p>Review mistakes, make changes, and keep moving forward.</p></article>
        </div>
      </section>
      <Skills />
    </>
  );
}
