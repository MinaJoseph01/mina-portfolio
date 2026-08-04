# Mina Joseph — Healthcare Data Analyst Portfolio

A premium, single-page portfolio site built for a Healthcare Data Analyst /
Power BI Developer targeting recruiters in the UAE, Saudi Arabia, and
international healthcare organizations.

Built with plain **HTML5 / CSS3 / vanilla JavaScript** — no build step, no
dependencies, deploys straight to GitHub Pages. (A React rebuild is
straightforward later; see "Moving to React" at the bottom.)

---

## 1. Design notes

- **Palette:** Navy `#0B213E` (primary) · Teal `#0F8A82` (secondary) ·
  Accent teal `#23C9B8` · Sky blue `#4FB6E8` (accent) · White / soft gray
  `#F4F8FA` (background). Chosen to read as enterprise healthcare-technology,
  not a generic dev portfolio.
- **Type:** Space Grotesk (headings), Inter (body), IBM Plex Mono (stats,
  KPI numbers, tags) — the monospace numerals are the signature detail; they
  make every stat and KPI on the page read like it came out of a BI tool,
  reinforcing "Power BI Developer" without literally embedding a Power BI
  screenshot in the hero.
- **Hero signature element:** a mock live dashboard panel (KPI cards,
  sparkline, bar chart, radial progress) instead of a plain headshot —
  this is the "thesis" of the page: data, not a photo, is the lead visual.
- Motion is restrained: animated KPI counters, scroll-reveal on cards, and
  a scroll-spy nav — no gimmicks, no scroll-jacking.
- Fully responsive (mobile nav, stacked grids, respects
  `prefers-reduced-motion`) and keyboard-focus-visible throughout.

---

## 2. Folder structure

```
mina-portfolio/
├── index.html              # all sections, semantic HTML, SEO + JSON-LD
├── css/
│   └── style.css           # design tokens + all component styles
├── js/
│   └── script.js           # nav, scroll-spy, counters, reveal, tabs
├── assets/
│   ├── resume/
│   │   ├── Mina-Joseph-Resume.pdf   ← ADD YOUR REAL RÉSUMÉ HERE
│   │   └── README.txt
│   └── images/
│       ├── og-cover.jpg             ← ADD FOR SOCIAL SHARE PREVIEW
│       ├── dashboards/              ← ADD REAL DASHBOARD SCREENSHOTS
│       └── README.txt
└── README.md
```

## 3. What you need to add before launch

1. **Résumé PDF** → `assets/resume/Mina-Joseph-Resume.pdf`
2. **Dashboard screenshots** (Power BI, redact any patient/contract data)
   for the 5 project cards and 3 case-study panels — currently styled
   navy/teal placeholder blocks with a dashed "Screenshot placeholder" tag,
   easy to spot and swap.
3. **OG cover image** (1200×630) for LinkedIn/WhatsApp link previews.
4. Optional: a real headshot, if you'd like one added alongside or
   instead of the dashboard hero visual.
5. Replace `https://minajoseph.dev/` in `index.html`'s `<head>` (canonical,
   Open Graph, JSON-LD) with your actual domain once you have one — or your
   `https://<username>.github.io/<repo>/` URL if you're not using a custom
   domain.

---

## 4. Deploy on GitHub Pages

1. **Create a repository** on GitHub, e.g. `mina-portfolio` (or
   `<your-username>.github.io` if you want it at the root of your GitHub
   Pages domain).

2. **Push the code:**
   ```bash
   cd mina-portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/MinaJoseph01/mina-portfolio.git
   git push -u origin main
   ```

3. **Enable Pages:**
   - Go to your repo → **Settings** → **Pages**.
   - Under "Build and deployment", set **Source** to `Deploy from a branch`.
   - Branch: `main`, folder: `/ (root)`. Save.
   - GitHub will publish at:
     - `https://minajoseph01.github.io/mina-portfolio/` (project repo), or
     - `https://minajoseph01.github.io/` (if the repo is named
       `minajoseph01.github.io`).
   - First deploy takes 1–2 minutes; refresh the Pages settings page for
     the live link.

4. **Every future push to `main` auto-redeploys** — no extra steps.

---

## 5. Connect a custom domain (e.g. `minajoseph.com`)

1. **Buy a domain** (Namecheap, GoDaddy, Google Domains successor, etc.).
   Something like `minajoseph.com` or `minajoseph.dev` reads well on a CV.

2. **Add a `CNAME` file** to the repo root containing just your domain:
   ```
   minajoseph.com
   ```
   (GitHub Pages auto-generates this if you set the domain in Settings →
   Pages → "Custom domain" instead — either way works.)

3. **DNS records** — in your domain registrar's DNS settings, add:
   - For an **apex domain** (`minajoseph.com`), add four `A` records
     pointing to GitHub's Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a **subdomain** (`www.minajoseph.com`), add a `CNAME` record:
     ```
     www → minajoseph01.github.io
     ```
   - Most people set up both: apex redirects to `www`, or vice versa.

4. Back in **Settings → Pages**, enter your custom domain and save.
   Wait for DNS to propagate (minutes to ~24h), then tick **Enforce HTTPS**
   once it becomes available — GitHub issues a free TLS certificate
   automatically.

5. Update the canonical/OG URLs in `index.html` to match your live domain.

---

## 6. Recruiter-conversion suggestions

These will do more for callback rates than any visual polish:

1. **Put numbers in the résumé PDF, not just the site.** Recruiters skim
   the PDF first. Mirror the site's stats (30% automation reduction, 15%
   turnaround improvement, 20%+ efficiency gain) directly into your résumé
   bullet points.
2. **Add real dashboard screenshots as soon as possible.** A portfolio for
   a BI role with placeholder cards signals "in progress" — even 2–3 real
   (redacted) screenshots outweigh a perfect layout with none.
3. **Make the "impact" line consistent everywhere** — CV, LinkedIn headline,
   site hero, and case studies should use the same three or four numbers so
   a recruiter builds pattern recognition across touchpoints in under 10s.
4. **Add 1–2 short client/manager testimonials** if you can get them
   (even a LinkedIn recommendation quote) — a "Testimonials" section between
   Case Studies and Certifications is a strong, easy addition and one of the
   highest-converting elements on analyst portfolios.
5. **Localize for UAE/KSA recruiters explicitly.** Consider a one-line
   "Open to relocation across GCC" or "NOC available" note near Contact if
   applicable — recruiters in this market often filter on visa/relocation
   status first.
6. **Use a real custom domain**, not just the GitHub Pages URL — it reads
   as more senior on a CV and business card and is worth the ~$10–15/year.
7. **Add a `/resume` direct-download link on LinkedIn** ("Featured" section)
   pointing straight at the hosted PDF — many recruiters won't click through
   to a portfolio site at all, so the résumé needs to work as a standalone
   asset too.
8. **Track link performance.** Add a simple privacy-respecting analytics
   tag (e.g. Plausible or GoatCounter) so you know whether recruiters are
   actually opening the site from your CV/LinkedIn — useful signal for
   which channel is working.
9. **Keep dashboard images sharp but redacted.** Blur or replace patient
   names/MRNs and payer contract rates with placeholder values before
   publishing screenshots — this also signals data-governance awareness,
   which reads well for healthcare-adjacent roles.

---

## 7. Moving to React later (optional)

The current structure maps cleanly onto components if/when you want a React
version:

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── ExperienceTimeline.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── CaseStudies.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── experience.js
│   ├── projects.js
│   └── certifications.js
├── App.jsx
└── main.jsx
```
`css/style.css`'s design tokens (`:root` variables) can be reused as-is or
converted to a Tailwind config / CSS Modules. The vanilla JS in
`script.js` maps directly to `useEffect` + `IntersectionObserver` hooks.
Happy to generate this version on request.
