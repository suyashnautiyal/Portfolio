# Suyash Nautiyal — Portfolio

One-page portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit the content

Everything on the page comes from `src/data.ts`: profile, projects, experience, skills, education.
Change the text there and the site updates. No need to touch the components.

### Add real screenshots

Project previews are drawn sketches until you add a screenshot.

1. Save a screenshot to `public/shots/`, for example `public/shots/resona.png` (1600x1000 works well).
2. In `src/data.ts`, add `image: '/shots/resona.png'` to that project.

### Add a live link

Add `live: 'https://your-app.vercel.app'` to a project in `src/data.ts`. The "Open live site" link appears automatically.

### Update the resume

Replace `public/resume.pdf` with the new file. Keep the same name.

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. On vercel.com choose "Add New Project" and import the repository.
3. Framework preset: Vite. Leave the defaults and deploy.

## Structure

```
src/
  data.ts              all content, with TypeScript types
  App.tsx              page layout
  index.css            theme colours and fonts (light and dark)
  components/
    Header.tsx  Hero.tsx  Projects.tsx  Preview.tsx
    Experience.tsx  Skills.tsx  Contact.tsx
```
