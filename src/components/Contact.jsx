import { useState } from "react";
import { profile } from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";
    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      // This demo validates locally. Connect a backend/form service to actually deliver messages.
      setForm(initialForm);
    }
  }

  return (
    <section className="section container contact-section" id="contact">
      <SectionTitle eyebrow="LET'S CONNECT" title="Have an idea? Let's talk." description="Send a message about a project, internship, collaboration, or learning opportunity." />
      <div className="contact-layout">
        <div className="contact-note">
          <div className="contact-icon">✉</div>
          <h3>Make something useful.</h3>
          <p>I'm always interested in learning from people, building practical projects, and meeting other developers.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          <p className="small-note">Replace the example email in <code>src/data/profile.js</code> with your real contact email.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Ada Okafor" aria-invalid={Boolean(errors.name)} />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell me a little about what you have in mind..." aria-invalid={Boolean(errors.message)} />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button className="button button-primary form-button" type="submit">Validate message <span aria-hidden="true">→</span></button>
          {submitted && <p className="success-message" role="status">Looks good! This demo doesn't send messages yet—connect a form service to receive them.</p>}
        </form>
      </div>
    </section>
  );
}
