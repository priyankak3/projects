# Personal Portfolio

A premium, responsive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project status

This portfolio is designed as a polished, editable foundation. The resume content and profile details are kept in a structured data file so updates are simple.

## Key files

- `src/data/portfolio.ts` – profile, skills, projects, experience, education, and links
- `src/app/page.tsx` – homepage sections and interaction logic
- `src/app/globals.css` – visual system and orbital animation styling
- `public/resume.pdf` – downloadable resume placeholder

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Production build

```bash
npm run build
npm run start
```

## Deployment

This project is ready to deploy to Vercel.

1. Push the project to GitHub.
2. Import it into a Vercel project.
3. Use the default Next.js settings.
4. If you want a custom domain, configure it in the Vercel dashboard.

## Update your content

Edit the following file to replace placeholder data with your actual resume and professional details:

```ts
src / data / portfolio.ts;
```

Update links, skills, experience, education, and contact data there to keep the design intact while customizing the content.

## Notes

- The project uses functional `mailto:` and external social links.
- Resume download points to `/resume.pdf` in the public folder.
- No environment variables are required unless you later add a real contact backend.
