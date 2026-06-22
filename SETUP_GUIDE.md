# Setting up the visual editor for phooktheory.com

This turns your one-time-drag-and-drop site into one with a real admin panel at **phooktheory.com/admin**, where you can edit text, prices, and lists through a form — no code. It's a one-time setup with four parts.

## What changed under the hood

The site's design (HTML/CSS) didn't change at all — it looks and behaves identically to what's live now. The difference is that all the *content* (headlines, prices, book titles, principles, testimonials, etc.) now lives in one file, `src/_data/site.json`, and the page is generated from it. The admin panel just edits that file for you and saves it back to GitHub, which triggers Netlify to rebuild the site automatically.

## Part 1 — Put the project on GitHub

1. Download **GitHub Desktop** (free): https://desktop.github.com — no command line needed.
2. Sign in with your existing GitHub account.
3. In GitHub Desktop: **File → Add Local Repository**, and point it at the `phook-theory-site` folder you received.
4. If it says the folder isn't a repo yet, click **"create a repository"** when prompted.
5. Click **Publish repository** (top right). Name it something like `phook-theory-site`. You can leave it public or make it private — either works.
6. Note the exact name shown as **yourusername/phook-theory-site** — you'll need it in Part 3.

## Part 2 — Create a GitHub OAuth App (lets the admin panel log in)

1. Go to https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**.
2. Fill in:
   - **Application name**: Phook Theory CMS
   - **Homepage URL**: `https://phooktheory.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Click **Register application**.
4. Copy the **Client ID**. Click **Generate a new client secret** and copy that too — you'll paste both into Netlify next.

## Part 3 — Connect Netlify to GitHub and the OAuth App

On your **existing** Netlify site (the one already pointed at phooktheory.com — don't create a new site):

1. **Site settings → Build & deploy → Link repository** (or "Link site to Git" if it's still showing as a manual-deploy site). Choose GitHub, authorize Netlify if asked, and pick the `phook-theory-site` repo you just published.
2. Confirm the build settings (they should auto-fill from `netlify.toml`, but double check):
   - Build command: `npm run build`
   - Publish directory: `_site`
3. Go to **Project configuration → Access & security → OAuth**. Click **Install provider → GitHub**, and paste in the Client ID and Client Secret from Part 2. Save.

## Part 4 — Point the admin panel at your repo

Before your first deploy, open `src/admin/config.yml` in the project and change this line:

```
repo: REPLACE-WITH-your-github-username/phook-theory-site
```

to your actual GitHub username/repo, e.g.:

```
repo: pamala123/phook-theory-site
```

Save, then in GitHub Desktop: **Commit** the change and **Push origin**. This triggers Netlify's first automatic build.

## Using it from now on

1. Go to **phooktheory.com/admin**.
2. Click **Login with GitHub** and authorize once.
3. You'll see every section of the site (Hero, About, Shop, Principles, Crystals, Phook the Drama, App, Series, Testimonials, Affiliate, Newsletter, Footer) as editable forms — change text, prices, add/remove list items.
4. Click **Publish** (or **Save** then **Publish**) when done. Netlify rebuilds automatically — your change goes live in about a minute.

You will never need to touch raw HTML again for content changes. If you ever want a structural change (new section, different layout, new colors), just come back and ask — that part still goes through code.
