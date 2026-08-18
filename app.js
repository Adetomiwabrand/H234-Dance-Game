/* ---------- H234 Dance Game — data ---------- */
const A = 'src/assets/';

const heroes = [
  { id: '7th-rebel', name: '7TH REBEL', src: 'preset', image: A + 'heroes/7th-rebel.png' },
  { id: 'ariana', name: 'ARIANA', src: 'preset', image: A + 'heroes/ariana.png' },
  { id: 'bade', name: 'BADE', src: 'preset', image: A + 'heroes/bade.png' },
  { id: 'curl-queen', name: 'CURL QUEEN', src: 'preset', image: A + 'heroes/curl-queen.png' },
  { id: 'd-lulu', name: 'D LULU', src: 'preset', image: A + 'heroes/d-lulu.png' },
  { id: 'deola', name: 'DEOLA', src: 'preset', image: A + 'heroes/deola.png' },
  { id: 'jamie-black', name: 'JAMIE BLACK', src: 'preset', image: A + 'heroes/jamie-black.png' },
  { id: 'jasmin', name: 'JASMIN', src: 'preset', image: A + 'heroes/jasmin.png' },
  { id: 'hero-juju', name: 'JUJU', src: 'preset', image: A + 'heroes/juju.png' },
  { id: 'lizzie', name: 'LIZZIE', src: 'preset', image: A + 'heroes/lizzie.png' },
  { id: 'mummy-yin', name: 'MUMMY YIN', src: 'preset', image: A + 'heroes/mummy-yin.png' },
  { id: 'oko-madam', name: 'OKO MADAM', src: 'preset', image: A + 'heroes/oko-madam.png' },
  { id: 'oma', name: 'OMA', src: 'preset', image: A + 'heroes/oma.png' },
  { id: 'oyin', name: 'OYIN', src: 'preset', image: A + 'heroes/oyin.png' },
  { id: 'queen', name: 'QUEEN', src: 'preset', image: A + 'heroes/queen.png' },
  { id: 'rahimat', name: 'RAHIMAT', src: 'preset', image: A + 'heroes/rahimat.png' },
  { id: 'salma', name: 'SALMA', src: 'preset', image: A + 'heroes/salma.png' },
  { id: 'stylish-sinner-and-knd', name: 'STYLISH SINNER & KND', src: 'preset', image: A + 'heroes/stylish-sinner-and-knd.png' },
  { id: 'ukiyo', name: 'UKIYO', src: 'preset', image: A + 'heroes/ukiyo.png' },
  { id: 'xaddy', name: 'XADDY', src: 'preset', image: A + 'heroes/xaddy.png' },
  { id: 'zantii', name: 'ZANTII', src: 'preset', image: A + 'heroes/zantii.png' },
  { id: 'vanella', name: 'VANELLA', src: 'preset', image: A + 'heroes/vanella.png' },
  { id: 'lmnl', name: 'LMNL', src: 'preset', image: A + 'heroes/lmnl.png' },
  { id: 'kuti', name: 'KUTI', src: 'preset', image: A + 'heroes/Kuti.png' },
  { id: 'foriti', name: 'FORITI', src: 'preset', image: A + 'heroes/Foriti.png' },
  { id: 'tobi', name: 'TOBI', src: 'preset', image: A + 'heroes/Tobi.png' },
  { id: 'zaam', name: 'ZÀÁM', src: 'preset', image: A + 'heroes/Zaam.png' },
  { id: 'oma-bear', name: 'OMA BEAR', src: 'preset', image: A + 'heroes/Oma-bear.png' },
  { id: 'summer', name: 'SUMMER', src: 'preset', image: A + 'heroes/summer.png' },
  { id: 'jujuranger', name: 'JUJURANGER', src: 'preset', image: A + 'heroes/Jujuranger.png' },
  { id: 'alli', name: 'ALLI', src: 'preset', image: A + 'heroes/alli.png' },
  { id: 'axara', name: 'AXARA', src: 'preset', image: A + 'heroes/axara.png' },
  { id: 'proton', name: 'PROTON', src: 'preset', image: A + 'heroes/proton.png' }
];

// Coordinates are % of the real map artwork (850x680), hand-mapped to the
// actual painted location markers so hotspots sit exactly where they belong.
const locations = [
  { id: 'tutorial', name: 'RESPAWN POINT', difficulty: 'TUTORIAL', desc: 'Learn the ropes — no pressure', top: 28.2, left: 22.6 },
  { id: 'yabs', name: 'THE YABS', difficulty: 'EASY', desc: 'Chill starter grooves', top: 51.8, left: 23.8 },
  { id: 'badlands', name: 'THE BADLANDS', difficulty: 'EASY', desc: 'Sun-baked intro course', top: 54.0, left: 50.1 },
  { id: 'maryjane', name: 'MARYJANE FIELD', difficulty: 'EASY', desc: 'Mellow field freestyle', top: 76.2, left: 52.6 },
  { id: 'level303', name: 'LEVEL 303', difficulty: 'MEDIUM', desc: 'Floating ruins run', top: 22.1, left: 43.2 },
  { id: 'konji', name: 'KONJI FALLS', difficulty: 'MEDIUM', desc: 'Waterfall mid-tempo set', top: 53.2, left: 67.6 },
  { id: 'mollywood', name: 'MOLLYWOOD', difficulty: 'MEDIUM', desc: 'Treetop rhythm rumble', top: 25.0, left: 86.5 },
  { id: 'juju', name: 'JUJU PEAK', difficulty: 'HARD', desc: 'High-energy peak challenge', top: 36.8, left: 30.0 },
  { id: 'cloudnine', name: 'CLOUD NINE', difficulty: 'HARD', desc: 'Storm-lit castle showdown', top: 20.9, left: 73.5 },
  { id: 'mermaid', name: 'MERMAID ISLE', difficulty: 'HARD', desc: 'Bioluminescent reef battle', top: 42.6, left: 80.0 },
  { id: 'mainland', name: 'THE MAINLAND', difficulty: 'HARD', desc: 'Molten red frontier', top: 71.0, left: 91.8 }
];

const DIFFICULTY_WINDOWS = {
  TUTORIAL: { perfect: 320, good: 560 },
  EASY: { perfect: 220, good: 380 },
  MEDIUM: { perfect: 170, good: 300 },
  HARD: { perfect: 130, good: 240 }
};

// Board sides scale with difficulty: 2 for Easy (left/right), 3 for Medium
// and Hard (left/forward/right — "forward" is the jump-toward-camera side).
// Hard is capped at 3 (no natural 4th direction), so it stays harder purely
// through tighter timing windows and a faster cadence (DIFFICULTY_SPEED below).
const LANE_SYMBOLS = {
  TUTORIAL: ['←', '→'],
  EASY: ['←', '→'],
  MEDIUM: ['←', '↑', '→'],
  HARD: ['←', '↑', '→']
};
const LANE_KEYS = {
  TUTORIAL: ['ArrowLeft', 'ArrowRight'],
  EASY: ['ArrowLeft', 'ArrowRight'],
  MEDIUM: ['ArrowLeft', 'ArrowUp', 'ArrowRight'],
  HARD: ['ArrowLeft', 'ArrowUp', 'ArrowRight']
};
// <1 compresses the beat spacing (faster/harder), >1 stretches it (slower/easier).
const DIFFICULTY_SPEED = { TUTORIAL: 1.8, EASY: 1.4, MEDIUM: 1.15, HARD: 0.95 };

// SLOW_FACTOR stretches the whole chart in time — bigger gaps between notes,
// more warning before each one arrives. 2.1x turns the original ~250-500ms
// note spacing into ~525-1050ms, giving generous reaction time across the board.
const SLOW_FACTOR = 2.1;
const RAW_CHART = [[0,1100],[1,1400],[2,1700],[3,2000],[0,2300],[2,2550],[1,2800],[3,3100],[3,3500],[2,3800],
  [0,4100],[1,4400],[0,4700],[1,4950],[3,5200],[2,5450],[0,5900],[1,6200],[0,6450],[3,6700],
  [2,7000],[1,7300],[3,7600],[0,7900],[1,8400],[2,8700],[3,9000],[2,9300],[1,9600],[0,9900],
  [3,10200],[0,10500],[2,11000],[3,11300],[1,11600],[0,11900],[3,12200],[2,12500],[1,12800],[0,13100]
].map(([lane, hitTimeMs]) => ({ lane, hitTimeMs: Math.round(hitTimeMs * SLOW_FACTOR) }));
const BASE_BATTLE_LENGTH_MS = Math.round(14500 * SLOW_FACTOR);

// A short, dedicated 8-note practice pattern — deliberately much shorter than
// a real song (~13s at TUTORIAL speed) so first-timers get a quick, low-stakes
// first rep rather than a full-length round.
const TUTORIAL_CHART = [[0,1300],[1,2600],[0,3900],[1,5200],[0,6500],[1,7800],[0,9100],[1,10400]]
  .map(([lane, hitTimeMs]) => ({ lane, hitTimeMs }));
const TUTORIAL_LENGTH_MS = 12500;

// Same authored rhythm for every difficulty, remapped onto however many
// board sides that difficulty uses (original lane 0-3 wraps via modulo),
// then compressed/stretched by DIFFICULTY_SPEED so Hard genuinely feels
// faster even though it uses the same 3 sides as Medium.
function chartFor(difficulty) {
  if (difficulty === 'TUTORIAL') return TUTORIAL_CHART.map(n => ({ ...n }));
  const laneCount = LANE_SYMBOLS[difficulty].length;
  const speed = DIFFICULTY_SPEED[difficulty] ?? 1;
  return RAW_CHART.map(n => ({ lane: n.lane % laneCount, hitTimeMs: Math.round(n.hitTimeMs * speed) }));
}
function battleLengthFor(difficulty) {
  if (difficulty === 'TUTORIAL') return TUTORIAL_LENGTH_MS;
  return Math.round(BASE_BATTLE_LENGTH_MS * (DIFFICULTY_SPEED[difficulty] ?? 1));
}

// Real BPM per track, so each location's prompt rhythm is actually locked to
// its own song's tempo instead of a generic scaled pattern.
const LOCATION_BPM = {
  yabs: 124, badlands: 124, maryjane: 132, level303: 74, konji: 112,
  mollywood: 123, juju: 121, cloudnine: 122, mermaid: 126, mainland: 126
};
// How many beats apart consecutive prompts land, by difficulty — smaller
// means denser/faster. Combined with each song's own BPM this is what makes
// Hard genuinely feel faster on a 121bpm song than a slow 74bpm one, while
// staying locked to that song's actual beat grid either way.
const DIFFICULTY_SUBDIVISION = { EASY: 2, MEDIUM: 1, HARD: 0.5 };
const TARGET_ROUND_MS = 32000;

function chartForLocation(loc) {
  if (loc.difficulty === 'TUTORIAL') return TUTORIAL_CHART.map(n => ({ ...n }));
  const bpm = LOCATION_BPM[loc.id];
  if (!bpm) return chartFor(loc.difficulty);
  const laneCount = LANE_SYMBOLS[loc.difficulty].length;
  const beatMs = 60000 / bpm;
  const noteMs = beatMs * (DIFFICULTY_SUBDIVISION[loc.difficulty] ?? 1);
  const leadInMs = beatMs * 4, outroMs = beatMs * 4;
  const noteCount = Math.max(16, Math.floor((TARGET_ROUND_MS - leadInMs - outroMs) / noteMs));
  const notes = [];
  for (let i = 0; i < noteCount; i++) {
    notes.push({ lane: RAW_CHART[i % RAW_CHART.length].lane % laneCount, hitTimeMs: Math.round(leadInMs + i * noteMs) });
  }
  return notes;
}
function battleLengthForLocation(loc) {
  if (loc.difficulty === 'TUTORIAL') return TUTORIAL_LENGTH_MS;
  const bpm = LOCATION_BPM[loc.id];
  if (!bpm) return battleLengthFor(loc.difficulty);
  const chart = chartForLocation(loc);
  return Math.round(chart[chart.length - 1].hitTimeMs + (60000 / bpm) * 4);
}

/* ---------- state ---------- */
const saved = (() => { try { return JSON.parse(localStorage.getItem('h234_state') || '{}'); } catch { return {}; } })();
const validLocation = locations.some(l => l.id === saved.location);
const state = {
  screen: 'boot',
  location: validLocation ? saved.location : (locations.find(l => l.id === 'yabs') || locations[0]).id,
  hero: saved.hero || heroes[0],
  custom: saved.custom || '',
  sound: saved.sound !== false,
  result: null
};
let audioCtx = null, audioTimer = null, battle = null;
let lastHeroTap = { id: null, time: 0 };
const app = document.getElementById('app');

function save() { try { localStorage.setItem('h234_state', JSON.stringify({ location: state.location, hero: state.hero, custom: state.custom, sound: state.sound })); } catch {} }
function currentHero() { return state.hero.src === 'custom' && state.custom ? { ...state.hero, image: state.custom } : state.hero; }

// Small toast confirming a toggle happened (sound on/off, view reset, etc).
// Lives on document.body (not #app) so it survives a full render() wiping
// the app root mid-toast.
let toastTimer = null;
function notify(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}
function frame(eyebrow, body, bare) { return `<main class="frame${bare ? ' bare' : ''}">${body}</main>`; }

let lastScreen = null;
function render() {
  save();
  const s = state.screen;
  // Skip the generic page chime on the very first screen (boot) — that one
  // gets its own bigger startup chime instead, so they don't overlap.
  if (s !== lastScreen) {
    if (lastScreen !== null) sfxPageLoad();
    if (lastScreen === 'map' && s !== 'map') stopMapMusic();
    lastScreen = s;
  }
  if (s === 'boot') return boot();
  if (s === 'map') return map();
  if (s === 'heroes') return heroSelect();
  if (s === 'create') return createHero();
  if (s === 'battle') return battleScreen();
  if (s === 'results') return results();
  if (s === 'settings') return settings();
}

/* ---------- boot ---------- */
function boot() {
  sfxStartup();
  app.innerHTML = frame('H234 // ARCADE NETWORK', `<section class="boot"><div class="boot-card">
    <img class="level-one" src="${A}h234-logo-blue.png">
    <p class="enter-house-text">ARE YOU READY TO PLAY?</p>
    <p>FREEWORLD RHYTHM PLAYGROUND</p>
    <button class="primary huge" data-action="start">▶ ENTER THE HOUSE</button>
    <small>Play our dance game. Keep your sound on. Try to match the direction prompts to dance on beat.</small>
  </div></section>
  <a class="side-room-banner" href="https://paystack.shop/pay/house234" target="_blank" rel="noopener">
    <span>GET A LATE PASS to JUJUOFTHE234 EXTENDED — unlock your own character</span>
  </a>`);
}

/* ---------- map (bordered, contained viewport; header + footer outside it) ---------- */
function map() {
  const selected = locations.find(x => x.id === state.location);
  const tiers = ['TUTORIAL', 'EASY', 'MEDIUM', 'HARD'];
  app.innerHTML = frame('H234 // WORLD MAP', `
    <section class="mapscreen">
      <div class="map-header">
        <div class="map-title-row">
          <div class="map-title"><img src="${A}h234-logo-gold.png"><div>SELECT DESTINATION</div></div>
          <div class="hud-buttons">
            <button data-action="toggle-list" title="Locations">☰</button>
            <button data-action="recenter" title="Recenter view">⌖</button>
            <button data-action="sound" title="${state.sound ? 'Mute' : 'Unmute'} sound">${state.sound ? '◉' : '○'}</button>
            <button data-action="settings" title="Settings">⚙</button>
          </div>
        </div>
        <div class="map-hint"><span class="pulse-dot"></span>DRAG TO EXPLORE • SCROLL / PINCH TO ZOOM • TAP A SITE TO SELECT IT</div>
      </div>
      <div class="mapwrap" id="mapwrap">
        <div class="mapstage" id="mapstage">
          <img class="map-img" id="mapImg" src="${A}h234-map.jpeg" alt="H234 world map" draggable="false">
          ${locations.map(l => `
            <button class="hotspot diff-${l.difficulty.toLowerCase()} ${l.id === state.location ? 'selected' : ''}"
              style="top:${l.top}%;left:${l.left}%" data-location="${l.id}">
              <span class="pin"></span>
              <span class="tag">${l.name}<b>${l.difficulty}</b></span>
            </button>`).join('')}
        </div>
        <aside class="location-list" id="locationList">
          <div class="location-list-head">ALL LOCATIONS</div>
          ${tiers.map(tier => `
            <div class="location-tier">${tier}</div>
            ${locations.filter(l => l.difficulty === tier).map(l => `
              <button class="location-row diff-${l.difficulty.toLowerCase()} ${l.id === state.location ? 'selected' : ''}" data-location="${l.id}">
                <span class="dot"></span><span class="location-row-name">${l.name}</span>
              </button>`).join('')}
          `).join('')}
        </aside>
      </div>
      <div class="map-info" id="mapInfo">
        <div class="map-info-text">
          <span>DESTINATION</span>
          <strong id="mapInfoName">${selected.name}</strong>
          <em id="mapInfoDesc">${selected.desc} — ${selected.difficulty}</em>
        </div>
        <div class="map-info-actions">
          <button class="primary" data-action="heroes">ENTER ZONE →</button>
          <div class="site-scroll">
            <button data-action="prev-location" title="Previous location">‹</button>
            <button data-action="next-location" title="Next location">›</button>
          </div>
        </div>
      </div>
    </section>`, true);
  initMapPanZoom();
  startMapMusic();
}

// Lightweight selection update — changes the destination without a full
// re-render, so the map's current pan/zoom position (and the hero carousel's
// scroll position, via the equivalent hero path below) is never disturbed.
function selectLocationLight(id) {
  const loc = locations.find(l => l.id === id);
  if (!loc) return;
  state.location = id;
  save();
  document.querySelectorAll('.hotspot').forEach(el => el.classList.toggle('selected', el.dataset.location === id));
  document.querySelectorAll('.location-row').forEach(el => el.classList.toggle('selected', el.dataset.location === id));
  const nameEl = document.getElementById('mapInfoName');
  const descEl = document.getElementById('mapInfoDesc');
  if (nameEl) nameEl.textContent = loc.name;
  if (descEl) descEl.textContent = `${loc.desc} — ${loc.difficulty}`;
}

let mapAbort = null;
function initMapPanZoom() {
  if (mapAbort) mapAbort.abort();
  mapAbort = new AbortController();
  const { signal } = mapAbort;
  const wrap = document.getElementById('mapwrap');
  const stage = document.getElementById('mapstage');
  const img = document.getElementById('mapImg');
  if (!wrap || !stage || !img) return;
  const NAT_W = 850, NAT_H = 680;
  let baseScale = 1, zoom = 1, panX = 0, panY = 0;
  let dragged = false;
  const pointers = new Map();
  let pinchStartDist = 0, pinchStartZoom = 1;

  let laidOut = false;
  function layout() {
    const vw = wrap.clientWidth, vh = wrap.clientHeight;
    // "contain" fit — the whole map is visible at rest, letterboxed on
    // whichever axis doesn't match the viewport aspect. Zooming in (drag/
    // scroll/pinch) is how you get closer, matching the earlier request.
    baseScale = Math.min(vw / NAT_W, vh / NAT_H);
    stage.style.width = NAT_W + 'px';
    stage.style.height = NAT_H + 'px';
    if (!laidOut) { zoom = 1; panX = 0; panY = 0; laidOut = true; }
    clampPan();
    apply();
  }
  function totalScale() { return baseScale * zoom; }
  function clampPan() {
    const vw = wrap.clientWidth, vh = wrap.clientHeight;
    const w = NAT_W * totalScale(), h = NAT_H * totalScale();
    // Center on any axis where the map is smaller than the viewport
    // (always true at rest); clamp to cover-style bounds once zoomed past that.
    panX = w <= vw ? (vw - w) / 2 : Math.max(vw - w, Math.min(0, panX));
    panY = h <= vh ? (vh - h) / 2 : Math.max(vh - h, Math.min(0, panY));
  }
  function apply() {
    stage.style.transform = `translate(${panX}px,${panY}px) scale(${totalScale()})`;
  }
  function zoomAt(screenX, screenY, newZoom) {
    newZoom = Math.max(1, Math.min(3.2, newZoom));
    const s0 = totalScale();
    const localX = (screenX - panX) / s0, localY = (screenY - panY) / s0;
    zoom = newZoom;
    const s1 = totalScale();
    panX = screenX - localX * s1;
    panY = screenY - localY * s1;
    clampPan();
    apply();
  }

  // Deliberately avoid setPointerCapture: Chromium retargets the synthetic
  // click that follows a captured pointer to the capturing element, which
  // breaks clicks on hotspots/buttons. Track drag via window-level listeners
  // instead, which behaves identically for mouse and touch without that bug.
  wrap.addEventListener('pointerdown', e => {
    // Ignore gestures that start on the location list (or any button in it) —
    // otherwise dragging to scroll the list also pans the map underneath it.
    if (e.target.closest('.location-list')) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragged = false;
    wrap.classList.add('grabbing');
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchStartDist = Math.hypot(a.x - b.x, a.y - b.y);
      pinchStartZoom = zoom;
    }
  }, { signal });
  window.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId)) return;
    const prev = pointers.get(e.pointerId);
    const cur = { x: e.clientX, y: e.clientY };
    pointers.set(e.pointerId, cur);
    if (pointers.size === 1) {
      const dx = cur.x - prev.x, dy = cur.y - prev.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) dragged = true;
      panX += dx; panY += dy;
      clampPan(); apply();
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const rect = wrap.getBoundingClientRect();
      dragged = true;
      zoomAt(mx - rect.left, my - rect.top, pinchStartZoom * (dist / (pinchStartDist || dist)));
    }
  }, { signal });
  function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) wrap.classList.remove('grabbing');
  }
  window.addEventListener('pointerup', endPointer, { signal });
  window.addEventListener('pointercancel', endPointer, { signal });

  wrap.addEventListener('wheel', e => {
    if (e.target.closest('.location-list')) return;
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const factor = Math.exp(-e.deltaY * 0.0015);
    zoomAt(e.clientX - rect.left, e.clientY - rect.top, zoom * factor);
  }, { passive: false, signal });

  wrap.addEventListener('dblclick', e => {
    const rect = wrap.getBoundingClientRect();
    zoomAt(e.clientX - rect.left, e.clientY - rect.top, zoom > 1.4 ? 1 : 2);
  }, { signal });

  // Suppress the synthetic click that follows a drag/pinch gesture so it
  // doesn't accidentally "select" whatever hotspot is under the pointer.
  wrap.addEventListener('click', e => {
    if (dragged) { dragged = false; e.stopPropagation(); e.preventDefault(); }
  }, { capture: true, signal });

  window.addEventListener('resize', layout, { signal });
  if (img.complete) layout(); else img.addEventListener('load', layout, { signal });

  window.__mapRecenter = () => { zoom = 1; panX = 0; panY = 0; layout(); };
}

/* ---------- hero select ---------- */
function heroSelect() {
  const hero = currentHero();
  app.innerHTML = frame('H234 // HERO SELECT', `<section class="hero-select">
    <div class="screen-heading compact"><button class="icon-btn" data-action="map">‹</button><div><span>CHOOSE YOUR HERO</span><h1>CHOOSE YOUR DANCER</h1></div></div>
    <div class="howto"><strong>HOW TO PLAY</strong><p>Jump ← LEFT, ↑ FORWARD, or → RIGHT to match the direction on the lit prompt card. Time it to the beat. Make chain hits to score a bigger combo. Land as many PERFECTs as you can for the top S rank. Double-tap a hero to select and jump straight in.</p></div>
    <div class="hero-carousel" id="heroCarousel">
      ${heroes.map(h => `<button class="hero-card ${hero.id === h.id ? 'chosen' : ''}" data-hero="${h.id}"><img src="${h.image}"><strong>${h.name}</strong></button>`).join('')}
    </div>
    <div class="selection">
      <div><span>SELECTED</span><strong id="selectedHeroName">${hero.name}</strong></div>
      <div class="selection-actions">
        <div class="carousel-nav">
          <button data-action="hero-prev" title="Scroll left">‹</button>
          <button data-action="hero-next" title="Scroll right">›</button>
        </div>
        <button class="primary" data-action="battle">CONTINUE →</button>
      </div>
    </div>
  </section>`, true);
}

/* ---------- create hero ---------- */
function createHero() {
  app.innerHTML = frame('H234 // CREATE YOUR HERO', `<section class="panel-screen create">
    <div class="screen-heading"><button class="icon-btn" data-action="heroes">‹</button><div><span>PERSONAL CHARACTER</span><h1>CREATE YOUR HERO</h1></div></div>
    <div class="create-layout">
      <label class="dropzone" for="hero-file">
        <input id="hero-file" type="file" accept="image/png,image/jpeg,image/webp" hidden>
        ${state.custom ? `<img src="${state.custom}">` : `<div><div class="upload-big">↑</div><strong>UPLOAD CHARACTER IMAGE</strong><small>Use the full-body image sent to your email.</small></div>`}
      </label>
      <div class="create-copy">
        <div class="warning">PRE-GENERATED HERO WORKFLOW</div>
        <p>Your toy-style H234 character is generated before the game and delivered by email. Upload that finished image here.</p>
        <ul><li>PNG / JPG / WebP</li><li>Full-body framing recommended</li><li>6MB maximum</li><li>Stored locally in the browser</li></ul>
        <div id="upload-msg" class="notice">${state.custom ? 'Character image ready.' : 'Select your character image to continue.'}</div>
        <button class="primary" data-action="use-custom" ${state.custom ? '' : 'disabled'}>USE THIS HERO →</button>
      </div>
    </div>
  </section>`);
}

/* ---------- battle: board + live-mirror jump ---------- */
function battleScreen() {
  const h = currentHero();
  const loc = locations.find(l => l.id === state.location) || locations[0];
  const symbols = LANE_SYMBOLS[loc.difficulty] || LANE_SYMBOLS.MEDIUM;
  const isTutorial = loc.difficulty === 'TUTORIAL';
  // Prompt (cue) and controls (input) are deliberately separate elements now —
  // prompt tiles up top just flash, control buttons down below are what's tappable.
  app.innerHTML = frame('H234 // DANCE BATTLE', `<section class="battle">
    <div class="battle-hud">
      <div><span>SCORE</span><strong id="score">${battle?.score || 0}</strong></div>
      <div><span>COMBO</span><strong id="combo">${battle?.combo || 0}X</strong></div>
      <button data-action="quit">QUIT</button>
    </div>
    <div class="prompt-row">
      ${symbols.map((sym, l) => `<div class="prompt-tile" data-prompt="${l}">${sym}</div>`).join('')}
    </div>
    <div class="hero-stage">
      <img class="board-hero" id="boardHero" src="${h.image}">
      <div id="feedback" class="feedback"></div>
      ${isTutorial ? `<div class="tutorial-overlay" id="tutorialOverlay">
        <div class="tutorial-card">
          <strong>WELCOME TO H234</strong>
          <p>When a side lights up, jump that direction before it fades out. Press ${symbols.join(' or ')} — on a keyboard that's the matching arrow keys.</p>
          <p>Time your jump close to the flash for a PERFECT. Chain hits in a row to build your combo score.</p>
          <button class="primary" data-action="tutorial-start">GOT IT — START →</button>
        </div>
      </div>` : ''}
    </div>
    <div class="controls-row">
      ${symbols.map((sym, l) => `<button class="ctrl-btn" data-lane-btn="${l}">${sym}</button>`).join('')}
    </div>
    <div class="progress"><div id="progress-fill"></div></div>
    <small>${state.sound ? 'AUDIO ACTIVE' : 'AUDIO OFF'} // JUMP TO THE LIT SIDE ON THE BEAT</small>
  </section>`, true);
  if (!isTutorial) startBattle(loc, symbols);
}

function startBattle(loc, symbols) {
  if (battle?.raf) cancelAnimationFrame(battle.raf);
  battle = {
    start: performance.now(), elapsed: 0, score: 0, combo: 0, maxCombo: 0,
    counts: { PERFECT: 0, GOOD: 0, MISS: 0 }, used: new Set(), raf: null,
    windows: DIFFICULTY_WINDOWS[loc.difficulty] || DIFFICULTY_WINDOWS.MEDIUM,
    chart: chartForLocation(loc), symbols, length: battleLengthForLocation(loc),
    promptEls: symbols.map((_, l) => document.querySelector(`[data-prompt="${l}"]`)),
    controlEls: symbols.map((_, l) => document.querySelector(`[data-lane-btn="${l}"]`))
  };
  if (state.sound) startMusic(loc);
  const tick = () => {
    if (!battle) return;
    battle.elapsed = performance.now() - battle.start;
    updateBoard();
    if (battle.elapsed >= battle.length) { finishBattle(); return; }
    battle.raf = requestAnimationFrame(tick);
  };
  battle.raf = requestAnimationFrame(tick);
}

function updateBoard() {
  if (!battle) return;
  const score = document.querySelector('#score'), combo = document.querySelector('#combo'), fill = document.querySelector('#progress-fill');
  if (score) score.textContent = battle.score.toLocaleString();
  if (combo) combo.textContent = battle.combo + 'X';
  if (fill) fill.style.width = Math.min(100, battle.elapsed / battle.length * 100) + '%';

  // Live-mirror: a side is "lit" on the prompt row for the same window either
  // side of its exact beat — reusing the same chart/windows/auto-miss logic
  // as before, just driving a separate (non-interactive) row of tiles now.
  const activeLane = new Array(battle.symbols.length).fill(false);
  battle.chart.forEach((n, i) => {
    if (battle.used.has(i)) return;
    const diff = battle.elapsed - n.hitTimeMs;
    if (diff > battle.windows.good) {
      battle.used.add(i);
      battle.combo = 0; battle.counts.MISS++;
      return;
    }
    if (Math.abs(diff) <= battle.windows.good) activeLane[n.lane] = true;
  });
  battle.promptEls.forEach((el, l) => el && el.classList.toggle('lit', !!activeLane[l]));
}

function showFeedback(j) {
  const f = document.getElementById('feedback');
  if (f) { f.textContent = j; f.className = 'feedback ' + j; setTimeout(() => { if (f) f.textContent = ''; }, 220); }
}

function animateHero(lane, judgment) {
  const hero = document.getElementById('boardHero');
  if (!hero || !battle) return;
  const sym = battle.symbols[lane];
  const cls = judgment === 'MISS' ? 'anim-miss' : (sym === '←' ? 'anim-left' : sym === '→' ? 'anim-right' : 'anim-forward');
  hero.classList.remove('anim-left', 'anim-right', 'anim-forward', 'anim-miss');
  void hero.offsetWidth; // restart the CSS animation even if the same class was just used
  hero.classList.add(cls);
}

function hit(lane) {
  if (!battle) return;
  let best = -1, delta = 99999;
  battle.chart.forEach((n, i) => {
    if (battle.used.has(i) || n.lane !== lane) return;
    const d = Math.abs(n.hitTimeMs - battle.elapsed);
    if (d < delta) { delta = d; best = i; }
  });
  const w = battle.windows;
  let j = 'MISS';
  if (best >= 0 && delta <= w.good) { battle.used.add(best); j = delta <= w.perfect ? 'PERFECT' : 'GOOD'; }
  showFeedback(j);
  animateHero(lane, j);
  const promptEl = battle.promptEls[lane];
  if (promptEl) promptEl.classList.remove('lit');
  // Judgment flash lands on the control button — that's where the thumb is,
  // so that's where the result should read.
  const ctrlEl = battle.controlEls[lane];
  if (ctrlEl) {
    const hitCls = 'hit-' + j.toLowerCase();
    ctrlEl.classList.add(hitCls);
    setTimeout(() => ctrlEl.classList.remove(hitCls), 220);
  }
  if (j === 'MISS') { battle.combo = 0; battle.counts.MISS++; }
  else { battle.combo++; battle.maxCombo = Math.max(battle.maxCombo, battle.combo); battle.counts[j]++; battle.score += (j === 'PERFECT' ? 1000 : 500) * Math.max(1, battle.combo); }
}

function finishBattle() {
  if (!battle) return;
  if (battle.raf) cancelAnimationFrame(battle.raf);
  stopMusic();
  const total = battle.counts.PERFECT + battle.counts.GOOD + battle.counts.MISS;
  const accuracy = total ? Math.round((battle.counts.PERFECT + battle.counts.GOOD * .5) / total * 100) : 0;
  state.result = { score: battle.score, accuracy, maxCombo: battle.maxCombo, counts: battle.counts };
  battle = null;
  state.screen = 'results';
  render();
}

/* ---------- results ---------- */
function results() {
  const r = state.result;
  const tiers = [{ r: 'S', min: 90 }, { r: 'A', min: 75 }, { r: 'B', min: 60 }, { r: 'C', min: 0 }];
  const rank = tiers.find(t => r.accuracy >= t.min).r;
  app.innerHTML = frame('H234 // RESULTS', `<section class="results">
    <div class="result-head"><img src="${A}h234-logo-gold.png"><span>DANCE BATTLE COMPLETE</span><h1>ZONE CLEARED</h1></div>
    <div class="rank">${rank}<small>RANK</small></div>
    <div class="rank-legend">
      ${tiers.map(t => `<span class="${t.r === rank ? 'current' : ''}">${t.r} <em>${t.min}%+</em></span>`).join('')}
    </div>
    <p class="rank-note">Rank is based on accuracy — PERFECT hits help you score Full Points, GOOD hits count half, MISS counts zero.</p>
    <div class="stats">
      <div><span>SCORE</span><strong>${r.score.toLocaleString()}</strong></div>
      <div><span>ACCURACY</span><strong>${r.accuracy}%</strong></div>
      <div><span>BEST COMBO</span><strong>${r.maxCombo}X</strong></div>
      <div><span>PERFECT</span><strong>${r.counts.PERFECT}</strong></div>
      <div><span>GOOD</span><strong>${r.counts.GOOD}</strong></div>
      <div><span>MISS</span><strong>${r.counts.MISS}</strong></div>
    </div>
    <div class="ig-callout">📸 SCREENSHOT YOUR SCORE AND POST IT ON INSTAGRAM FOR A CHANCE TO WIN A FREE TICKET OR A DISCOUNT. HIGHEST SCORES WIN.</div>
    <div class="result-actions"><button class="primary" data-action="battle">↻ PLAY AGAIN</button><button data-action="map">⌖ BACK TO MAP</button></div>
  </section>`);
}

/* ---------- settings ---------- */
function settings() {
  app.innerHTML = frame('H234 // SETTINGS', `<section class="panel-screen settings">
    <div class="screen-heading"><button class="icon-btn" data-action="map">‹</button><div><span>SYSTEM CONFIG</span><h1>SETTINGS</h1></div></div>
    <div class="setting-row"><div><strong>SOUND</strong><small>Music and rhythm audio</small></div><button data-action="sound">${state.sound ? 'ON' : 'OFF'}</button></div>
    <div class="setting-row"><div><strong>CONTROLS</strong><small>Arrow keys or on-screen buttons during battle</small></div><span>← ↑ →</span></div>
    <div class="setting-row"><div><strong>RESET HERO</strong><small>Clear locally stored custom hero</small></div><button data-action="reset">RESET</button></div>
  </section>`);
}

/* ---------- sound effects (synthesized — no audio files needed) ---------- */
let sfxCtx = null;
function getSfxCtx() {
  try {
    if (!sfxCtx) sfxCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (sfxCtx.state === 'suspended') sfxCtx.resume();
    return sfxCtx;
  } catch { return null; }
}
function playTone(freq, duration, type, gain, delay) {
  if (!state.sound) return;
  const ctx = getSfxCtx();
  if (!ctx) return;
  try {
    const t0 = ctx.currentTime + (delay || 0);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0 + duration + 0.02);
  } catch {}
}
// Rising three-note arcade chime — plays once when the game first opens.
function sfxStartup() { playTone(392, .12, 'square', .07, 0); playTone(523.25, .12, 'square', .07, .09); playTone(659.25, .2, 'square', .08, .18); }
// Short blip whenever a new screen opens (map, hero select, battle, results...).
function sfxPageLoad() { playTone(660, .07, 'square', .045); }
// Generic UI button tap.
function sfxClick() { playTone(880, .045, 'square', .045); }
// Slightly different tone for selecting a map location, so it reads as
// "destination chosen" rather than a plain button press.
function sfxLocation() { playTone(740, .07, 'triangle', .06); }
// Very quiet tick under every battle control tap — a soft underlay, separate
// from (and quieter than) the PERFECT/GOOD/MISS judgment feedback.
function sfxTapUnderlay() { playTone(500, .035, 'sine', .022); }

/* ---------- audio ---------- */
// Per-location custom tracks live at src/assets/audio/<location-id>.mp3.
// If a track is missing (any location without a song yet), this falls back
// to the original click-track so the game still plays fine either way.
let audioEl = null;
function startMusic(loc) {
  stopMusic();
  const src = `${A}audio/${loc.id}.mp3`;
  const el = new Audio(src);
  el.volume = 0.55;
  el.loop = true;
  let fellBack = false;
  const fallback = () => { if (fellBack) return; fellBack = true; audioEl = null; startClickTrack(); };
  el.addEventListener('error', fallback);
  el.play().then(() => { audioEl = el; }).catch(fallback);
}
function startClickTrack() {
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const tick = () => {
      if (!audioCtx) return;
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.frequency.value = 110; g.gain.value = .035;
      o.connect(g); g.connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime + .05);
    };
    audioTimer = setInterval(tick, Math.round(500 * SLOW_FACTOR));
  } catch {}
}
function stopMusic() {
  if (audioTimer) clearInterval(audioTimer); audioTimer = null;
  if (audioCtx) { audioCtx.close(); audioCtx = null; }
  if (audioEl) { audioEl.pause(); audioEl = null; }
}

// Map screen has its own separate looping background track (map.mp3), kept
// independent of the battle-music system above so navigating map -> battle
// -> map cleanly starts/stops the right track each time.
// Tries both src/assets/audio/map.mp3 and src/assets/map.mp3 since either
// is a reasonable place for it — whichever one actually exists will play.
let mapAudioEl = null;
function startMapMusic() {
  if (!state.sound || mapAudioEl) return;
  const candidates = [`${A}audio/map.mp3`, `${A}map.mp3`];
  const tryNext = i => {
    if (i >= candidates.length) {
      console.warn('[H234] map.mp3 not found at either', candidates.join(' or '), '— check the file is actually at one of those paths (case-sensitive) and was included in the deploy.');
      return;
    }
    const el = new Audio(candidates[i]);
    el.volume = 0.4;
    el.loop = true;
    el.addEventListener('error', () => tryNext(i + 1));
    el.play().then(() => { mapAudioEl = el; }).catch(() => tryNext(i + 1));
  };
  tryNext(0);
}
function stopMapMusic() {
  if (mapAudioEl) { mapAudioEl.pause(); mapAudioEl = null; }
}


/* ---------- events ---------- */
app.addEventListener('click', e => {
  const action = e.target.closest('[data-action]')?.dataset.action;

  // Map-specific actions get lightweight handling — a full render() would
  // rebuild the map and reset the pan/zoom position, which is exactly what
  // "stays where it is when selected" means to avoid.
  if (action === 'toggle-list') {
    document.getElementById('locationList')?.classList.toggle('open');
    return;
  }
  if (action === 'recenter') {
    sfxClick();
    window.__mapRecenter && window.__mapRecenter();
    notify('VIEW RESET');
    return;
  }
  if (action === 'prev-location' || action === 'next-location') {
    sfxLocation();
    const idx = locations.findIndex(l => l.id === state.location);
    const dir = action === 'next-location' ? 1 : -1;
    const next = locations[(idx + dir + locations.length) % locations.length];
    selectLocationLight(next.id);
    return;
  }
  if (action === 'hero-prev' || action === 'hero-next') {
    sfxClick();
    const el = document.getElementById('heroCarousel');
    const card = el?.querySelector('.hero-card');
    const step = card ? card.getBoundingClientRect().width + 14 : 200;
    el?.scrollBy({ left: action === 'hero-next' ? step : -step, behavior: 'smooth' });
    return;
  }
  if (action === 'tutorial-start') {
    sfxClick();
    document.getElementById('tutorialOverlay')?.remove();
    const loc = locations.find(l => l.id === state.location) || locations[0];
    const symbols = LANE_SYMBOLS[loc.difficulty] || LANE_SYMBOLS.MEDIUM;
    startBattle(loc, symbols);
    return;
  }
  if (action === 'sound' && state.screen === 'map') {
    sfxClick();
    state.sound = !state.sound;
    if (!state.sound) { stopMusic(); stopMapMusic(); } else { startMapMusic(); }
    save();
    const btn = e.target.closest('[data-action="sound"]');
    if (btn) { btn.textContent = state.sound ? '◉' : '○'; btn.title = (state.sound ? 'Mute' : 'Unmute') + ' sound'; }
    notify(state.sound ? 'SOUND ON' : 'SOUND OFF');
    return;
  }

  if (action) {
    sfxClick();
    if (action === 'start') state.screen = 'map';
    if (action === 'map') state.screen = 'map';
    if (action === 'heroes') state.screen = 'heroes';
    if (action === 'create') state.screen = 'create';
    if (action === 'battle' && !battle) state.screen = 'battle';
    if (action === 'quit') { stopMusic(); battle = null; state.screen = 'map'; }
    if (action === 'use-custom' && state.custom) { state.hero = { id: 'custom', name: 'MY HERO', src: 'custom', image: state.custom }; state.screen = 'heroes'; }
    if (action === 'sound') { state.sound = !state.sound; if (!state.sound) stopMusic(); notify(state.sound ? 'SOUND ON' : 'SOUND OFF'); }
    if (action === 'settings') state.screen = 'settings';
    if (action === 'reset') { state.custom = ''; state.hero = heroes[0]; }
    render();
    return;
  }
  const hero = e.target.closest('[data-hero]')?.dataset.hero;
  if (hero) {
    sfxClick();
    state.hero = heroes.find(h => h.id === hero) || heroes[0];
    // Double-tap/double-click the same card: select AND jump straight into
    // battle, instead of select-then-hunt-for-the-continue-button.
    const now = Date.now();
    const isDoubleTap = lastHeroTap.id === hero && now - lastHeroTap.time < 400;
    if (isDoubleTap) {
      lastHeroTap = { id: null, time: 0 };
      state.screen = 'battle';
      render();
    } else {
      lastHeroTap = { id: hero, time: now };
      save();
      // Lightweight update only — a full render() would rebuild the whole
      // carousel and reset its horizontal scroll position back to 0.
      if (state.screen === 'heroes') {
        document.querySelectorAll('.hero-card').forEach(c => c.classList.toggle('chosen', c.dataset.hero === hero));
        const nameEl = document.getElementById('selectedHeroName');
        if (nameEl) nameEl.textContent = state.hero.name;
      } else {
        render();
      }
    }
    return;
  }
  const loc = e.target.closest('[data-location]')?.dataset.location;
  if (loc) { sfxLocation(); selectLocationLight(loc); }
});

app.addEventListener('change', e => {
  if (e.target.id !== 'hero-file') return;
  const f = e.target.files?.[0];
  if (!f) return;
  const msg = document.getElementById('upload-msg');
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(f.type)) { msg.textContent = 'PNG, JPG/JPEG or WebP only.'; return; }
  if (f.size > 6 * 1024 * 1024) { msg.textContent = 'Keep the image under 6MB.'; return; }
  const reader = new FileReader();
  reader.onload = () => { state.custom = reader.result; render(); };
  reader.readAsDataURL(f);
});

window.addEventListener('keydown', e => {
  if (state.screen !== 'battle' || !battle) return;
  const lane = battle.symbols && LANE_KEYS[locations.find(l => l.id === state.location)?.difficulty]?.indexOf(e.key);
  if (lane === undefined || lane < 0) return;
  e.preventDefault();
  sfxTapUnderlay();
  hit(lane);
  // Flash the matching on-screen button so keyboard players get the same
  // "it registered" feedback as touch/mouse players.
  const btn = document.querySelector(`[data-lane-btn="${lane}"]`);
  if (btn) { btn.classList.add('pressed'); clearTimeout(btn._pressTimer); btn._pressTimer = setTimeout(() => btn.classList.remove('pressed'), 120); }
});
app.addEventListener('pointerdown', e => {
  const b = e.target.closest('[data-lane-btn]');
  if (b && state.screen === 'battle') { b.classList.add('pressed'); sfxTapUnderlay(); hit(Number(b.dataset.laneBtn)); }
});
app.addEventListener('pointerup', e => {
  const b = e.target.closest('[data-lane-btn]');
  if (b) b.classList.remove('pressed');
});
app.addEventListener('pointerleave', e => {
  const b = e.target.closest?.('[data-lane-btn]');
  if (b) b.classList.remove('pressed');
}, true);
app.addEventListener('pointercancel', e => {
  document.querySelectorAll('.ctrl-btn.pressed').forEach(b => b.classList.remove('pressed'));
});

render();
