# H234 Dance Game MVP

A lightweight static browser rhythm game using the supplied H234 artwork.

## Quick local run

No npm install is required for the current MVP.

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Real assets included

- `src/assets/level-one.jpeg` — Level One title card
- `src/assets/enter-the-house.jpeg` — entry graphic
- `src/assets/h234-map.jpeg` — real H234 world map
- `src/assets/h234-menu-reference.png` — H234 menu reference
- `src/assets/h234-logo-blue.png` — blue H234 logo
- `src/assets/h234-logo-gold.png` — gold H234 logo
- `src/assets/hero-juju.png`
- `src/assets/hero-bad.png`
- `src/assets/hero-3.png`
- `src/assets/hero-4.png`

## Public deployment

This is a static site. Upload the entire project folder to a static host such as Netlify, Vercel, GitHub Pages or Cloudflare Pages. There is no database or server required for the MVP.

For Netlify Drop, drag the project folder into the deploy area. For Vercel, import the project/repository and use the project root as the deployment root. No build command is required for this version.

## Custom hero workflow

The game intentionally does not generate the character. The player receives the finished character image by email, chooses `CREATE YOUR HERO`, and uploads the image. The image is kept locally in the browser and is not sent to a server.

## Before launch

1. Test the game on desktop Chrome/Safari/Edge.
2. Test the upload flow with PNG, JPG and WebP.
3. Test the game on an iPhone and Android phone.
4. Replace/attach a real music track if one is available.
5. Confirm the map hotspot positions against the final map artwork.
6. Publish the final URL and test it from a device that has never opened the game before.
