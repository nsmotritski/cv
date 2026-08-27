# CV

Personal CV and professional profile for Mikalai Smatrytski, published as a
static website with GitHub Pages.

**Live site:** [nsmotritski.github.io/cv](https://nsmotritski.github.io/cv/)

## Final design

The site uses a responsive sidebar layout with:

- A circular, optimized profile photo.
- Contact details, education, certifications, skills, and languages in the
  sidebar.
- A professional profile, work experience, projects, volunteering, and awards
  in the main content area.
- Typography, spacing, colors, and timeline styling based on the JSON Resume
  sidebar theme.
- Responsive mobile and tablet layouts and print-specific styles.

The site is implemented with plain HTML, CSS, and JavaScript and has no runtime
dependencies or tracking.

## Project structure

- `index.html` contains the page structure and asset references.
- `resume-data.js` contains the CV content.
- `script.js` renders the CV sections from the resume data.
- `styles.css` contains the layout, typography, responsive, and print styles.
- `assets/profile-photo.jpg` is the original profile photo.
- `assets/profile-photo-cropped.jpg` is the optimized image used by the site.

## Updating the CV

Edit `resume-data.js` to update profile details, experience, skills, education,
certifications, projects, or other CV content.

When changing `styles.css`, increment the version in the stylesheet URL in
`index.html` so browsers and GitHub Pages do not reuse a stale cached copy:

```html
<link rel="stylesheet" href="styles.css?v=3" />
```

## Local preview

Open `index.html` directly in a browser, or start a local static server from the
repository directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys the site to
GitHub Pages whenever changes are pushed to the `develop` branch. The workflow
can also be started manually from the Actions tab in GitHub.
