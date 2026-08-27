# CV

Personal CV and professional profile, published as a public static website with
GitHub Pages.

## Goals

- Publish the CV for free on GitHub Pages and share it with a stable web link.
- Present a clear, credible, and polished profile suitable for recruiters and
	hiring managers at highly selective technology companies.
- Keep the content easy to update and the site fast, responsive, accessible,
	and maintainable.
- Provide a print-friendly, downloadable PDF version alongside the web version.
- Reserve a clearly designed photo area, leaving it empty until a photo is
	supplied.

## Template shortlist

These were starting points to compare before implementation. The selected
direction is the JSON Resume `sidebar` theme, which places profile details in a
left rail and the main career story in the wider right column.

| Option | Style | Why consider it |
| --- | --- | --- |
| [Modern Resume Theme](https://github.com/sproogen/modern-resume-theme) ([demo](https://sproogen.github.io/modern-resume-theme/)) | Modern, compact Jekyll | Designed specifically for resumes and GitHub Pages; a strong default for a professional one-page CV. |
| [Jekyll Resume Template](https://github.com/jglovier/resume-template) | Minimal Jekyll | Simple, readable, and close to a traditional resume; useful when content should do most of the work. |
| [Start Bootstrap Resume](https://github.com/StartBootstrap/startbootstrap-resume) ([demo](https://startbootstrap.github.io/startbootstrap-resume/)) | Visual fixed-sidebar HTML | More distinctive online presentation with a straightforward static build and MIT license. |
| [al-folio](https://github.com/alshedivat/al-folio) ([demo](https://alshedivat.github.io/al-folio/)) | Full personal site, Jekyll | Best for a CV plus projects, writing, publications, and a longer-term personal website; its CV is data-driven. |
| [JSON Resume themes](https://jsonresume.org/themes/) | Data-driven theme system | Lets one structured resume power multiple visual themes and makes future PDF or format changes easier. |

### Selection criteria

We should choose the template that best balances:

- A strong first screen and quick scanning on mobile and desktop.
- An ATS-friendly content structure and an excellent print/PDF result.
- Clear hierarchy without decorative UI competing with evidence of impact.
- Simple GitHub Pages deployment with no paid services or private runtime.
- Easy content updates, accessible semantics, good contrast, and fast loading.
- A photo placeholder that can be removed or populated without redesigning the
	page.

## Recommended CV content

The initial version should be concise and evidence-led:

1. Name, target role, location or time zone, email, LinkedIn, GitHub, and
	 optional personal site.
2. A short professional summary tailored to the roles being pursued.
3. Work experience in reverse chronological order, with achievement bullets
	 describing action, scope, and measurable outcome where possible.
4. Selected projects showing the problem, contribution, technology, and result,
	 with links to live work or source code.
5. Technical skills grouped by proficiency-relevant categories rather than a
	 long keyword cloud.
6. Education, certifications, languages, and relevant community or leadership
	 work when they strengthen the application.

Avoid age, marital status, full street address, generic objectives, skill bars,
unverifiable claims, and dense paragraphs. The photo is optional and will remain
empty for now; it should never reduce readability or become the primary signal.

## Quality requirements

- Semantic HTML and accessible labels, landmarks, focus states, and contrast.
- Responsive layout tested at mobile, tablet, and desktop widths.
- No important information conveyed only by color, animation, or the photo.
- Print stylesheet or export path that produces a clean one- or two-page PDF.
- Valid links, descriptive page metadata, Open Graph metadata, and a sensible
	page title.
- Automated GitHub Actions checks for build, links, and basic accessibility or
	performance regressions where practical.
- No secrets, tracking by default, or unnecessary third-party runtime
	dependencies.

## Deployment

The target deployment is GitHub Pages from this repository. Once the repository
is public and the Pages workflow is enabled, the site will be available at:

`https://<github-username>.github.io/<repository-name>/`

A custom domain can be added later, but it is not required for the first release.

## Source CV analysis

The supplied April 2024 CV provides a strong starting point:

- Target profile: Data Engineer, with earlier QA and Data Quality Engineer
	experience.
- Experience: Coherent Solutions Poland (2021-present), ISsoft (2015-2021,
	including BI Engineering from 2018-2021), and Allied Testing (2008-2015
	across WEX Health, Monte Titoli, Thomson Reuters, and Renaissance projects).
- Core areas: Azure data services, Databricks, Snowflake, Synapse, SQL, Python,
	TypeScript, data quality, test automation, ETL, BI, and cloud deployment.
- Education: Bachelor's Degree in Actuary Mathematics, Faculty of Applied
	Mathematics and Computer Science, Belarusian State University.
- Certifications: Microsoft Certified: Azure Data Engineer Associate,
	Coursera Introduction to Data Science, Coursera Google IT Support, Certified
	Tester Foundation Level, and ISTQB Advanced Level Test Manager.

### Information to add or confirm

- Preferred target role wording and the short professional summary.
- Email, phone, city/country or time zone, LinkedIn, GitHub, and personal
	website links.
- Exact employment dates and confirmation of the current role and employer
	naming; the source CV uses both employer and project headings.
- Two to four measurable outcomes per recent role: scale, performance gains,
	cost reduction, reliability, delivery speed, defect reduction, or business
	impact.
- Education dates and confirmation of the official English degree title.
- Certification dates, credential links, and whether each certificate is still
	current.
- Languages and proficiency; the source CV does not list them.
- Selected projects that can be publicly linked, especially work that shows
	architecture, ownership, or open-source contribution.
- Optional volunteering, awards, publications, and references.
- Whether the alternate name should appear in the visible heading, metadata,
	or only in an ATS/search-friendly alias field. The current placeholder uses
	`Mikalai Smatrytski (Nikolai Smotritsky)` visibly as requested.
- The supplied LinkedIn URL has been added to the CV, but LinkedIn redirected
	to its public auth wall, so the profile contents could not be independently
	verified.
- The available Copilot session history contains only this CV-building thread;
	it provided no additional career facts beyond the source CV and confirmed
	details already recorded here.

The original DOCX is intentionally excluded by `.gitignore` and has been
removed from this repository. The photo placeholder remains empty.

## Status

- [x] Define hosting and quality requirements
- [x] Compare initial template directions
- [x] Select the JSON Resume sidebar direction
- [ ] Add personal content and links
- [x] Implement the empty photo placeholder
- [x] Add project details from the source CV
- [ ] Add PDF/print output
- [ ] Configure GitHub Pages deployment
