/* ---------- H234 Dance Game — data ---------- */
const A = 'src/assets/';

const heroes = [
  { id: 'juju', name: 'JUJU', src: 'preset', image: A + 'hero-juju.png' },
  { id: 'bad', name: 'BAD', src: 'preset', image: A + 'hero-bad.png' },
  { id: 'hero-3', name: 'PLAYER 03', src: 'preset', image: A + 'hero-3.png' },
  { id: 'hero-4', name: 'PLAYER 04', src: 'preset', image: A + 'hero-4.png' }
];

// Coordinates are % of the real map artwork (850x680), hand-mapped to the
// actual painted location markers so hotspots sit exactly where they belong.
const locations = [
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
  EASY: { perfect: 180, good: 320 },
  MEDIUM: { perfect: 140, good: 260 },
  HARD: { perfect: 100, good: 200 }
};

// SLOW_FACTOR stretches the whole chart in time — bigger gaps between notes,
// more warning before each one arrives. 1.7x turns the original ~250-500ms
// note spacing into ~425-850ms, which is much easier to read and react to.
const SLOW_FACTOR = 1.7;
const chart = [[0,1100],[1,1400],[2,1700],[3,2000],[0,2300],[2,2550],[1,2800],[3,3100],[3,3500],[2,3800],
  [0,4100],[1,4400],[0,4700],[1,4950],[3,5200],[2,5450],[0,5900],[1,6200],[0,6450],[3,6700],
  [2,7000],[1,7300],[3,7600],[0,7900],[1,8400],[2,8700],[3,9000],[2,9300],[1,9600],[0,9900],
  [3,10200],[0,10500],[2,11000],[3,11300],[1,11600],[0,11900],[3,12200],[2,12500],[1,12800],[0,13100]
].map(([lane, hitTimeMs]) => ({ lane, hitTimeMs: Math.round(hitTimeMs * SLOW_FACTOR) }));
const BATTLE_LENGTH_MS = Math.round(14500 * SLOW_FACTOR);
// How long (ms) a note takes to fall from the top of the lane to the target —
// bigger means notes appear earlier and drift down slower, giving more reaction time.
const NOTE_TRAVEL_MS = Math.round(2400 * SLOW_FACTOR);

/* ---------- state ---------- */
const saved = (() => { try { return JSON.parse(localStorage.getItem('h234_state') || '{}'); } catch { return {}; } })();
const validLocation = locations.some(l => l.id === saved.location);
const state = {
  screen: 'boot',
  location: validLocation ? saved.location : locations[1].id,
  hero: saved.hero || heroes[0],
  custom: saved.custom || '',
  sound: saved.sound !== false,
  result: null
};
let audioCtx = null, audioTimer = null, battle = null;
const app = document.getElementById('app');

function save() { try { localStorage.setItem('h234_state', JSON.stringify({ location: state.location, hero: state.hero, custom: state.custom, sound: state.sound })); } catch {} }
function currentHero() { return state.hero.src === 'custom' && state.custom ? { ...state.hero, image: state.custom } : state.hero; }
function frame(eyebrow, body, bare) { return `<main class="frame${bare ? ' bare' : ''}"><div class="topbar"><span>${eyebrow}</span><span>V.0.2 // MVP</span></div>${body}</main>`; }

function render() {
  save();
  const s = state.screen;
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
  app.innerHTML = frame('H234 // ARCADE NETWORK', `<section class="boot"><div class="boot-card">
    <img class="level-one" src="${A}level-one.jpeg">
    <img class="enter-house" src="${A}enter-the-house.jpeg">
    <p>MAP-BASED RHYTHM GAME</p>
    <button class="primary huge" data-action="start">▶ ENTER THE HOUSE</button>
    <small>ARROW KEYS // SOUND ON</small>
  </div></section>`);
}

/* ---------- map (full-page, draggable, zoomable, accurate hotspots) ---------- */
function map() {
  const selected = locations.find(x => x.id === state.location);
  app.innerHTML = frame('H234 // WORLD MAP', `
    <section class="mapwrap" id="mapwrap">
      <div class="mapstage" id="mapstage">
        <img class="map-img" id="mapImg" src="${A}h234-map.jpeg" alt="H234 world map" draggable="false">
        ${locations.map(l => `
          <button class="hotspot diff-${l.difficulty.toLowerCase()} ${l.id === state.location ? 'selected' : ''}"
            style="top:${l.top}%;left:${l.left}%" data-location="${l.id}">
            <span class="pin"></span>
            <span class="tag">${l.name}<b>${l.difficulty}</b></span>
          </button>`).join('')}
      </div>
      <div class="map-title"><img src="${A}h234-logo-gold.jpeg"><div>SELECT DESTINATION</div></div>
      <div class="hud-buttons">
        <button data-action="recenter" title="Recenter">⌖</button>
        <button data-action="sound">${state.sound ? '◉' : '○'}</button>
        <button data-action="settings">⚙</button>
      </div>
      <div class="map-hint">DRAG TO EXPLORE • SCROLL / PINCH TO ZOOM • TAP A SITE</div>
      <div class="map-info" id="mapInfo">
        <span>DESTINATION</span>
        <strong id="mapInfoName">${selected.name}</strong>
        <em id="mapInfoDesc">${selected.desc} — ${selected.difficulty}</em>
        <button class="primary" data-action="heroes">ENTER ZONE →</button>
      </div>
    </section>`, true);
  initMapPanZoom();
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
  app.innerHTML = frame('H234 // HERO SELECT', `<section class="panel-screen">
    <div class="screen-heading"><button class="icon-btn" data-action="map">‹</button><div><span>CHOOSE YOUR PLAYER</span><h1>HERO SELECT</h1></div></div>
    <div class="hero-grid">
      ${heroes.map(h => `<button class="hero-card ${hero.id === h.id ? 'chosen' : ''}" data-hero="${h.id}"><img src="${h.image}"><strong>${h.name}</strong><small>PRESET HERO</small></button>`).join('')}
      <button class="hero-card create-card ${hero.src === 'custom' ? 'chosen' : ''}" data-action="create"><div class="upload-orb">↑</div><strong>CREATE YOUR HERO</strong><small>UPLOAD YOUR EMAILED CHARACTER</small></button>
    </div>
    <div class="selection"><div><span>SELECTED</span><strong>${hero.name}</strong></div><button class="primary" data-action="battle">CONTINUE →</button></div>
  </section>`);
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

/* ---------- battle ---------- */
function battleScreen() {
  const h = currentHero();
  app.innerHTML = frame('H234 // DANCE BATTLE', `<section class="battle">
    <div class="battle-hud">
      <div><span>SCORE</span><strong id="score">${battle?.score || 0}</strong></div>
      <div><span>COMBO</span><strong id="combo">${battle?.combo || 0}X</strong></div>
      <button data-action="quit">QUIT</button>
    </div>
    <div class="stage">
      <img class="battle-hero" src="${h.image}">
      <div class="lanes">${[0, 1, 2, 3].map(l => `<div class="lane" data-lane="${l}"><div class="target">${['←', '↑', '↓', '→'][l]}</div></div>`).join('')}</div>
      <div id="feedback" class="feedback"></div>
    </div>
    <div class="battle-controls">${['←', '↑', '↓', '→'].map((x, i) => `<button data-lane-btn="${i}">${x}</button>`).join('')}</div>
    <div class="progress"><div id="progress-fill"></div></div>
    <small>${state.sound ? 'AUDIO ACTIVE' : 'AUDIO OFF'} // HIT THE ARROWS ON THE BEAT</small>
  </section>`);
  startBattle();
}

function startBattle() {
  if (battle?.timer) clearInterval(battle.timer);
  const loc = locations.find(l => l.id === state.location) || locations[0];
  battle = {
    start: performance.now(), elapsed: 0, score: 0, combo: 0, maxCombo: 0,
    counts: { PERFECT: 0, GOOD: 0, MISS: 0 }, used: new Set(), timer: null,
    windows: DIFFICULTY_WINDOWS[loc.difficulty] || DIFFICULTY_WINDOWS.MEDIUM
  };
  if (state.sound) startMusic();
  battle.timer = setInterval(() => {
    battle.elapsed = performance.now() - battle.start;
    updateNotes();
    if (battle.elapsed >= BATTLE_LENGTH_MS) finishBattle();
  }, 16);
}

function updateNotes() {
  if (!battle) return;
  const score = document.querySelector('#score'), combo = document.querySelector('#combo'), fill = document.querySelector('#progress-fill');
  if (score) score.textContent = battle.score.toLocaleString();
  if (combo) combo.textContent = battle.combo + 'X';
  if (fill) fill.style.width = Math.min(100, battle.elapsed / BATTLE_LENGTH_MS * 100) + '%';
  document.querySelectorAll('.lane').forEach((el, lane) => {
    el.querySelectorAll('.note').forEach(n => n.remove());
    chart.forEach((n, i) => {
      if (n.lane === lane && !battle.used.has(i) && n.hitTimeMs > battle.elapsed - 100 && n.hitTimeMs < battle.elapsed + NOTE_TRAVEL_MS) {
        const d = document.createElement('div');
        d.className = 'note';
        d.style.bottom = Math.max(2, Math.min(92, (n.hitTimeMs - battle.elapsed) / NOTE_TRAVEL_MS * 90)) + '%';
        d.textContent = ['←', '↑', '↓', '→'][lane];
        d.dataset.note = i;
        el.appendChild(d);
      }
    });
  });
}

function hit(lane) {
  if (!battle) return;
  let best = -1, delta = 99999;
  chart.forEach((n, i) => {
    if (battle.used.has(i) || n.lane !== lane) return;
    const d = Math.abs(n.hitTimeMs - battle.elapsed);
    if (d < delta) { delta = d; best = i; }
  });
  const w = battle.windows;
  let j = 'MISS';
  if (best >= 0 && delta <= w.good) { battle.used.add(best); j = delta <= w.perfect ? 'PERFECT' : 'GOOD'; }
  const f = document.getElementById('feedback');
  if (f) { f.textContent = j; f.className = 'feedback ' + j; setTimeout(() => { if (f) f.textContent = ''; }, 220); }
  if (j === 'MISS') { battle.combo = 0; battle.counts.MISS++; }
  else { battle.combo++; battle.maxCombo = Math.max(battle.maxCombo, battle.combo); battle.counts[j]++; battle.score += (j === 'PERFECT' ? 1000 : 500) * Math.max(1, battle.combo); }
  updateNotes();
}

function finishBattle() {
  if (!battle) return;
  clearInterval(battle.timer);
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
  const rank = r.accuracy >= 90 ? 'S' : r.accuracy >= 75 ? 'A' : r.accuracy >= 60 ? 'B' : 'C';
  app.innerHTML = frame('H234 // RESULTS', `<section class="results">
    <div class="result-head"><img src="${A}h234-logo-gold.jpeg"><span>RUN COMPLETE</span><h1>ZONE CLEARED</h1></div>
    <div class="rank">${rank}<small>RANK</small></div>
    <div class="stats">
      <div><span>SCORE</span><strong>${r.score.toLocaleString()}</strong></div>
      <div><span>ACCURACY</span><strong>${r.accuracy}%</strong></div>
      <div><span>BEST COMBO</span><strong>${r.maxCombo}X</strong></div>
      <div><span>PERFECT</span><strong>${r.counts.PERFECT}</strong></div>
      <div><span>GOOD</span><strong>${r.counts.GOOD}</strong></div>
      <div><span>MISS</span><strong>${r.counts.MISS}</strong></div>
    </div>
    <div class="result-actions"><button class="primary" data-action="battle">↻ PLAY AGAIN</button><button data-action="map">⌖ BACK TO MAP</button></div>
  </section>`);
}

/* ---------- settings ---------- */
function settings() {
  app.innerHTML = frame('H234 // SETTINGS', `<section class="panel-screen settings">
    <div class="screen-heading"><button class="icon-btn" data-action="map">‹</button><div><span>SYSTEM CONFIG</span><h1>SETTINGS</h1></div></div>
    <div class="setting-row"><div><strong>SOUND</strong><small>Music and rhythm audio</small></div><button data-action="sound">${state.sound ? 'ON' : 'OFF'}</button></div>
    <div class="setting-row"><div><strong>CONTROLS</strong><small>Arrow keys or touch buttons during battle</small></div><span>← ↑ ↓ →</span></div>
    <div class="setting-row"><div><strong>RESET HERO</strong><small>Clear locally stored custom hero</small></div><button data-action="reset">RESET</button></div>
  </section>`);
}

/* ---------- audio ---------- */
function startMusic() {
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
function stopMusic() { if (audioTimer) clearInterval(audioTimer); audioTimer = null; if (audioCtx) { audioCtx.close(); audioCtx = null; } }

/* ---------- events ---------- */
app.addEventListener('click', e => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (action) {
    if (action === 'start') state.screen = 'map';
    if (action === 'map') state.screen = 'map';
    if (action === 'heroes') state.screen = 'heroes';
    if (action === 'create') state.screen = 'create';
    if (action === 'battle' && !battle) state.screen = 'battle';
    if (action === 'quit') { stopMusic(); battle = null; state.screen = 'map'; }
    if (action === 'use-custom' && state.custom) { state.hero = { id: 'custom', name: 'MY HERO', src: 'custom', image: state.custom }; state.screen = 'heroes'; }
    if (action === 'sound') { state.sound = !state.sound; if (!state.sound) stopMusic(); }
    if (action === 'settings') state.screen = 'settings';
    if (action === 'reset') { state.custom = ''; state.hero = heroes[0]; }
    if (action === 'recenter' && window.__mapRecenter) window.__mapRecenter();
    render();
    return;
  }
  const hero = e.target.closest('[data-hero]')?.dataset.hero;
  if (hero) { state.hero = heroes.find(h => h.id === hero) || heroes[0]; render(); return; }
  const loc = e.target.closest('[data-location]')?.dataset.location;
  if (loc) { state.location = loc; render(); }
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
  if (state.screen !== 'battle') return;
  const map = { ArrowLeft: 0, ArrowUp: 1, ArrowDown: 2, ArrowRight: 3 };
  if (map[e.key] !== undefined) { e.preventDefault(); hit(map[e.key]); }
});
app.addEventListener('pointerdown', e => {
  const b = e.target.closest('[data-lane-btn]');
  if (b && state.screen === 'battle') hit(Number(b.dataset.laneBtn));
});

render();
