# React Portfolio — Odono John

A responsive personal portfolio built with React, Vite, React Router, reusable components, state, form validation, and a light/dark theme toggle.

## Requirements
- Node.js (LTS recommended)
- Git
- A GitHub account

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open the integrated terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build for production
Run `npm run build`. Vite creates the production files in `dist/`.
To test the production build locally, run `npm run preview`.

## Deploy to Vercel
1. Push this project to a public GitHub repository named `react-portfolio`.
2. Sign in to Vercel and import the repository.
3. Vercel should detect Vite automatically.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy and copy the live URL for your submission.

## Deploy to Netlify
1. Import the GitHub repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

## Customize
- Update the name, bio, email and social links in `src/data/profile.js`.
- Add or edit project objects in `src/data/projects.js`.
- Update the skills list in `src/data/skills.js`.
- Replace placeholder project links with real GitHub/live URLs before submitting.

## Features
- Reusable Header, Footer, Hero, ProjectCard, Skills and Contact components
- React Router pages: Home, Projects and About
- Project list managed with React state and category filtering
- Contact form with basic client-side validation
- Persistent light/dark mode using localStorage
- Responsive layout for mobile and desktop

Note: the contact form validates input in the browser; it does not send email until connected to a backend or form service.
