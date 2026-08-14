# H234 Dance Game — Real Asset Deployment Guide

## 1. What has changed

The MVP now uses the supplied H234 artwork instead of the previous placeholders.

### Real assets mapped into the game

| File | Purpose |
|---|---|
| `src/assets/level-one.jpeg` | Opening Level One title card |
| `src/assets/enter-the-house.jpeg` | Opening entry graphic |
| `src/assets/h234-map.jpeg` | Main world/map screen |
| `src/assets/h234-menu-reference.png` | H234 menu visual reference retained in assets |
| `src/assets/h234-logo-blue.png` | Blue H234 logo asset |
| `src/assets/h234-logo-gold.jpeg` | Gold H234 logo used in the map/results UI |
| `src/assets/hero-juju.png` | Preset hero 1 |
| `src/assets/hero-bad.png` | Preset hero 2 |
| `src/assets/hero-3.png` | Preset hero 3 |
| `src/assets/hero-4.png` | Preset hero 4 |

The custom-player workflow still expects the finished character image to be generated and emailed before the player enters the game. The browser only handles the upload and local selection.

## 2. Folder you deploy

Deploy the **contents of this project folder**, not the parent folder containing the ZIP.

The important structure is:

```text
H234_Dance_Game_MVP/
├── index.html
├── app.js
├── styles.css
├── package.json
├── README.md
├── DEPLOYMENT_GUIDE.md
└── src/
    └── assets/
        ├── level-one.jpeg
        ├── enter-the-house.jpeg
        ├── h234-map.jpeg
        ├── h234-menu-reference.png
        ├── h234-logo-blue.png
        ├── h234-logo-gold.jpeg
        ├── hero-juju.png
        ├── hero-bad.png
        ├── hero-3.png
        └── hero-4.png
```

`index.html` must remain at the top level because the game is a static site.

## 3. Test it locally first

Open a terminal inside the project folder and run:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Test this exact path:

```text
Boot → Map → Destination → Hero Select → Dance Battle → Results → Map
```

Also test:

- Arrow keys
- Touch controls
- Sound toggle
- All three map destinations
- All four preset heroes
- `CREATE YOUR HERO`
- PNG/JPG/WebP upload
- Invalid/oversized upload
- Replay
- Back to Map
- Settings
- Reset Hero

## 4. Recommended first public deployment: Netlify

This MVP is static, so Netlify's drag-and-drop deployment is the easiest route. Netlify supports publishing a project folder directly and gives it a `netlify.app` URL. See the official Netlify deployment documentation for the current interface.

### Steps

1. Create/sign into a Netlify account.
2. Open the Netlify Drop/deploy area.
3. Unzip this project on your computer.
4. Drag the **uncompressed project folder** into the deploy area.
5. Wait for deployment to finish.
6. Open the generated `netlify.app` URL.
7. Test the game from a different device/browser.
8. Rename/customize the site URL if desired.

No build command is needed for this version because `index.html`, `app.js`, `styles.css` and the assets are already deployable static files.

## 5. Alternative: Vercel Drop

Vercel also supports deploying a folder directly through Vercel Drop. For this static MVP, no framework build is required.

1. Open Vercel Drop.
2. Sign in.
3. Drag the uncompressed project folder into the upload area.
4. Choose the project name.
5. Deploy.
6. Open the generated public URL.

For ongoing development, connect the project to Git later so that updates can be deployed automatically.

## 6. Alternative: Cloudflare Pages

Cloudflare Pages supports Direct Upload for prebuilt static assets.

For this project:

- Build command: none / `exit 0` if the interface requires one
- Output directory: the project folder containing `index.html`

You can use the dashboard's drag-and-drop Direct Upload flow.

## 7. Custom domain — play.h234.online (Namecheap)

You already own `h234.online` on Namecheap. To make the game live at
`play.h234.online`, deploy to a static host first (Netlify is the fastest —
see section 4), then point a subdomain at it. Steps below use Netlify;
Vercel/Cloudflare Pages are nearly identical (see their custom-domain docs
if you go that route instead).

### 7a. Deploy the site and get its default URL

1. Follow section 4 (Netlify Drop) or connect this project via GitHub for
   auto-deploys.
2. Confirm the game works at the temporary `*.netlify.app` URL first.
3. In Netlify: **Site settings → Domain management → Add a domain** and
   type `play.h234.online`. Netlify will show you the exact DNS target
   (usually a CNAME value like `your-site-name.netlify.app`).

### 7b. Add the DNS record in Namecheap

1. Log into Namecheap → **Domain List** → click **Manage** next to `h234.online`.
2. Go to the **Advanced DNS** tab.
3. Click **Add New Record** and create:
   - Type: `CNAME Record`
   - Host: `play`
   - Value: the target Netlify gave you (e.g. `your-site-name.netlify.app`)
   - TTL: Automatic
4. Save. Do **not** create an A record for `play` if you're using a CNAME —
   use one or the other, not both.
5. DNS propagation usually takes a few minutes, sometimes up to a few
   hours. `play.h234.online` will 404 or fail to resolve until it
   propagates — that's expected, not a bug.

### 7c. HTTPS

Once DNS resolves, Netlify (or Vercel/Cloudflare Pages) will auto-issue a
free HTTPS certificate for `play.h234.online` — no action needed beyond
waiting for it to provision (usually minutes after DNS resolves).

### 7d. Verify

- Visit `https://play.h234.online` from your phone on cellular data (not
  just wifi where a cached DNS entry might mislead you).
- Confirm the padlock/HTTPS is active.
- Run through the full flow: boot → map → drag/zoom the map → pick a site
  → hero select → battle → results.

## 8. How the custom hero actually works

The intended production flow is:

```text
Character generated externally
        ↓
Character image sent to player by email
        ↓
Player saves image to device
        ↓
H234 Game
        ↓
CREATE YOUR HERO
        ↓
Upload image
        ↓
Preview
        ↓
USE THIS HERO
        ↓
Dance Battle
```

The game does **not** need the image-generation API for the MVP.

This keeps the game deployable as a static site and avoids exposing an image-generation API key in browser code.

## 9. Important limitation before calling this production-ready

The current game is a playable MVP, not a full production game platform.

Still to consider after the first public test:

1. Replace the temporary rhythm audio with the actual game track.
2. Tune the note chart to the final track's BPM/structure.
3. Map hotspots are now pixel-matched to the real artwork — recheck only if the map image itself changes.
4. Test image memory usage on mobile Safari.
5. Consider resizing uploaded character images before storing them in localStorage if large images cause browser storage issues.
6. Add analytics only if you actually need player metrics.
7. Add a proper externally hosted character-generation/email workflow separately from the game.
8. Add a privacy notice if the external character-generation workflow transmits personal photos.

## 10. Updating the game later

For a simple manual workflow:

```text
Edit files
   ↓
Test locally
   ↓
Replace the deployed project with the updated folder
   ↓
Test public URL
```

For a more professional workflow:

```text
GitHub repository
      ↓
Netlify / Vercel / Cloudflare Pages
      ↓
Push to main
      ↓
Automatic deployment
```

Use Git-based deployment once the game starts changing regularly.

## 11. Launch checklist

- [ ] Real H234 map appears on the Map screen
- [ ] Real H234 logo appears correctly
- [ ] Level One opening artwork appears
- [ ] Enter the House artwork appears
- [ ] Four supplied preset heroes appear
- [ ] All 10 map sites open a battle (accurate hotspot positions)
- [ ] Arrow controls work
- [ ] Touch controls work
- [ ] PERFECT / GOOD / MISS work
- [ ] Results screen works
- [ ] Replay works
- [ ] Custom hero upload works
- [ ] Game works in a fresh private/incognito browser
- [ ] Game works on a phone
- [ ] Public URL works over HTTPS
- [ ] No API secrets are present in frontend files
- [ ] Final public URL is tested from another device

## 12. Fastest route

If the goal is simply **"I want people to play this today"**, use this sequence:

```text
1. Download the updated H234 project
2. Unzip it
3. Open the folder
4. Deploy the folder through Netlify Drop
5. Open the generated URL
6. Test on your phone
7. Send the URL to players
```

Then move to Git-based deployment when you begin making regular updates.
