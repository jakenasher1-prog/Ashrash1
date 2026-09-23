# Ashrash18

A basic static games website built with HTML, CSS, and vanilla JavaScript.

## Features

- Game catalog stored in `games.json`
- Each game opens in an iframe
- Search/filter games
- Responsive layout
- No AI features
- No API keys or secrets
- No build step or dependencies
- GitHub Pages friendly

## Add a game

Open `games.json` and add an object:

```json
{
  "id": "unique-game-id",
  "title": "My Game",
  "description": "Short description",
  "icon": "🎯",
  "tags": ["arcade"],
  "url": "https://your-authorized-game-host.example/game.html"
}
```

Use game URLs that you own or have permission to embed. Some websites block iframe embedding with security headers; the site cannot override those restrictions.

## Run locally

Because the site loads `games.json` with `fetch()`, use a local web server rather than opening `index.html` directly.

For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

1. Create a public GitHub repository named `Ashrash18`.
2. Upload the contents of this folder.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

The site contains no credentials, API keys, or server-side code, so it is suitable for a public static repository.

## TypeScript → JavaScript

This version is already written in plain JavaScript. There are no TypeScript files, `tsconfig.json`, or TypeScript build dependencies to remove.
