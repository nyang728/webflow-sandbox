# OneTrust Sandbox Inc

A fictional Next.js 15 + React 19 test site (JavaScript), themed white / black / green,
built to deploy to **Webflow Cloud** and mount on a **Webflow** site.

## Pages

| Route        | File                         | Notes                                       |
|--------------|------------------------------|---------------------------------------------|
| `/`          | `app/page.js`                | Home / index                                |
| `/about`     | `app/about/page.js`          | Mission, values, services, team             |
| `/contact`   | `app/contact/page.js`        | Form posts to `/api/contact` (test only)    |
| `/search`    | `app/search/page.js`         | Client-side search over `lib/content.js`    |
| `/resources` | `app/resources/page.js`      | Downloads `public/downloads/*.pdf`          |

Add more PDFs by dropping them in `public/downloads/` and adding an entry to
`resources` in `lib/content.js` (they become searchable automatically).

## Run locally

Requires Node.js 22+ and npm (Webflow Cloud only supports npm).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Webflow Cloud

### Option A: Webflow CLI

```bash
npm install -g @webflow/webflow-cli
webflow auth login
webflow cloud deploy
```

On the first deploy pick **Existing site** (mounts the app at a path such as `/app`
on your Webflow site) or **New domain**. For CI use `--no-input --site-id <id>`.

### Option B: GitHub (auto-deploy on every push)

1. Push this folder to a GitHub repo:
   ```bash
   git init && git add . && git commit -m "Initial OneTrust Sandbox site"
   git remote add origin https://github.com/<you>/onetrust-sandbox.git
   git push -u origin main
   ```
2. In Webflow: Workspace → **New Project → App** → authorize GitHub →
   **Import a GitHub repository** → choose the repo and branch → **Deploy**.
3. Each commit to that branch redeploys (about 2 minutes).

## Webflow Cloud notes

- `webflow.json` pins the framework to `nextjs`.
- Do **not** set `basePath`/`assetPrefix` in `next.config.mjs`. Webflow Cloud injects
  them from your mount path. `next/link` handles it automatically; plain links to
  `public/` files and `fetch()` calls use `withBase()` from `lib/basePath.js`,
  which reads `NEXT_PUBLIC_BASE_PATH`.
- Webflow Cloud ignores the `build` script and runs `opennextjs-cloudflare build`
  (Cloudflare Workers runtime). `npm run preview` reproduces that locally.
- The contact API only validates and echoes; nothing is stored or emailed.
