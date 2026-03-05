# The Table by B.B. — Deployment Ready Build

This repo contains a single-file static site (`index.html`) with embedded CSS/JS, including an accessible animated Application modal and Formspree submission.

## Production checklist

- [x] Single static entrypoint (`index.html`)
- [x] No build step required
- [x] Responsive layout + reduced-motion support
- [x] Client-side form validation + async submit
- [x] Form endpoint configured: `https://formspree.io/f/maqpwkaq`
- [x] Security headers configured for Netlify (`netlify.toml`)

## Deploy options

### Netlify (recommended)
1. Create a new Netlify site from this repo.
2. Build command: **(leave empty)**
3. Publish directory: `.`
4. Deploy.

Netlify will automatically use `netlify.toml` headers.

### Vercel
1. Import this repo into Vercel.
2. Framework preset: **Other**.
3. Build command: **none**.
4. Output directory: `.` (or leave default for static).
5. Deploy.

### GitHub Pages
1. Push to `main` (or preferred branch).
2. In repo settings, enable GitHub Pages and set source to the branch root.
3. Site will be served from `index.html`.

## Post-deploy smoke test

- Open homepage and verify page content loads.
- Open **Application** modal from both buttons.
- Verify:
  - overlay click closes modal
  - `Esc` closes modal
  - focus returns to trigger button
  - city `Other` reveals custom city input
  - phone formatting works as `(xxx)-xxx-xxxx`
- Submit with valid data and confirm success message.
