# Vijayalakshmi R. — Portfolio

## Folder structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── resume.pdf
├── README.md
└── assets/
    └── hero-photo img.png   ← add your photo here
```

## Before you run it

1. **Resume** — `resume.pdf` is currently a placeholder file. Replace it with
   your real resume, keeping the exact filename `resume.pdf` in the project
   root so the "Download Resume" button keeps working.
2. **Hero photo** — add your photo to `assets/hero-photo img.png` (same
   filename, including the space). The hero section is already wired to it.
3. **GitHub link** — the GitHub icon in the Contact section points to `#`
   as a placeholder. Swap it for your real GitHub profile URL once you have one.

## Run it locally

No build step needed — it's plain HTML/CSS/JS.

- Easiest: double-click `index.html` to open it in your browser.
- Recommended (avoids browser file-path quirks): serve it locally, e.g.
  - VS Code: install the "Live Server" extension → right-click `index.html` → "Open with Live Server"
  - Or run `python3 -m http.server` inside the `portfolio/` folder, then visit `http://localhost:8000`

## Deploy

**GitHub Pages**
1. Create a new GitHub repository and push the `portfolio/` folder contents to it.
2. Go to Settings → Pages → set the source branch to `main` and the folder to `/root`.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Vercel**
1. Push the project to a GitHub repository.
2. Go to vercel.com → New Project → import the repository.
3. Framework preset: "Other" (no build command needed, it's static).
4. Deploy — Vercel will host it at a `*.vercel.app` URL, and you can attach a custom domain afterward.
