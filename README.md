# Sowmya Narayan — Platform Engineering Portfolio

Astro static portfolio for `https://sowmyanarayan.com`. The project can be deployed free on GitHub Pages or packaged as a Docker container for another host.

## Local development

Requirements: Node.js 22.12+ and npm.

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd install` and `npm.cmd run dev` if script execution blocks `npm.ps1`.

## Build and preview

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Docker

Build and run locally:

```bash
docker build -t sowmya-portfolio .
docker run --rm -p 8080:80 sowmya-portfolio
```

Open `http://localhost:8080`. The image uses a Node build stage and a small Nginx runtime stage; Node/npm are not included in the final runtime image.

## GitHub Actions / free hosting

`.github/workflows/deploy.yml` builds the static site on pull requests and pushes to `main`, verifies the Docker image builds, and deploys to GitHub Pages after a successful build on `main`.

One-time GitHub setup:

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. In **Settings → Environments → github-pages**, check that the deployment environment is permitted.
4. Keep `public/CNAME` containing `sowmyanarayan.com`; the workflow publishes it as the custom-domain file.
5. Configure DNS at your domain registrar only when ready to switch the live site. For an apex/root domain, GitHub Pages typically uses A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and optional AAAA records from GitHub's current documentation. Alternatively, use a `www` CNAME pointing to `<your-github-username>.github.io`. Replace placeholders with your actual GitHub username and verify current GitHub Pages DNS instructions before changing DNS.
6. Once DNS has propagated, use **Settings → Pages → Custom domain** to set `sowmyanarayan.com`, then enable **Enforce HTTPS** when available.

GitHub Pages hosting is free for eligible public repositories. DNS/domain renewal is still paid to your registrar. Do not change DNS until the GitHub Pages build is green and you are ready to switch from the current website.

## About Nextcloud and other hosts

Nextcloud is primarily a file collaboration platform; it generally does not run arbitrary Docker containers or act as a conventional static-site host unless your administrator has configured a suitable web-serving setup. Use GitHub Pages for the free static site, and keep the Docker image for a VPS, self-hosted server, or a cloud/container service if you later choose one. Always check that provider's current free-tier limits before deploying.

## Where to edit

- Homepage: `src/pages/index.astro`
- Styles: `src/styles/global.css`
- Project cards: `src/pages/projects.astro`
- Technical guides: `src/pages/guides/`
- Contact links: `src/pages/contact.astro`
- Site metadata: `src/layouts/BaseLayout.astro`

## Content accuracy and security

Review starter project cards and social links before publishing. Do not commit credentials, tokens, private infrastructure details, or confidential employer/client information.


## Latest portfolio updates

- Homepage intro uses the requested Senior DevOps Engineer wording.
- Projects page uses four key DevOps project cards.
- Navigation includes a prominent Tech-Galary GitHub button and a Book Session button.
- GitHub opens `https://github.com/Tech-Galary/` in a new tab.
- Book Session opens the consultation page in a new tab.
- Consultation cards cover Opportunity Card personal-experience guidance, Priority DM, Ask Me Anything, and 1:1 career mentorship. Prices and testimonials are intentionally omitted until confirmed.


## v20 design direction

- Site-wide palette: midnight blue and teal, dark theme.
- Skills page heading and introduction updated to describe hands-on cloud and DevOps work.
- Project and consultation cards use matching dark surfaces and teal accents.
- Contact form remains planned; it must be connected to a working form endpoint before public launch.
