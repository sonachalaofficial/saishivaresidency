import { T } from "./theme";

/** Global CSS that cannot be expressed inline: keyframes, hover and media rules. */
export function LuxeStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; background: ${T.cream}; color: ${T.ink}; font-family: ${T.sans}; }
      .gk-root { overflow-x: hidden; }
      .gk-root ::selection { background: ${T.gold}; color: #fff; }
      .gk-root a { text-decoration: none; }
      .gk-root :focus-visible { outline: 2px solid ${T.gold}; outline-offset: 3px; border-radius: 4px; }

      /* ---------- Buttons ---------- */
      .gk-btn {
        font-family: ${T.sans}; font-size: .8rem; letter-spacing: .18em; text-transform: uppercase;
        font-weight: 500; padding: .95rem 2rem; border-radius: 999px; border: 1px solid transparent;
        display: inline-flex; align-items: center; gap: .6rem; cursor: pointer;
        transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, background .35s ease, color .35s ease, border-color .35s ease;
      }
      .gk-btn svg { transition: transform .35s cubic-bezier(.22,1,.36,1); }
      .gk-btn:hover svg { transform: translateX(5px); }
      .gk-btn-gold { background: linear-gradient(120deg, ${T.gold}, ${T.goldSoft}); color: #1a1509; box-shadow: 0 12px 30px rgba(185,149,83,.35); }
      .gk-btn-gold:hover { transform: translateY(-3px); box-shadow: 0 20px 44px rgba(185,149,83,.45); }
      .gk-btn-dark { background: ${T.ink}; color: #f7f4ee; }
      .gk-btn-dark:hover { transform: translateY(-3px); box-shadow: 0 20px 44px rgba(22,22,26,.3); }
      .gk-btn-ghost { background: rgba(255,255,255,.08); color: #fff; border-color: rgba(255,255,255,.55); backdrop-filter: blur(8px); }
      .gk-btn-ghost:hover { background: #fff; color: ${T.ink}; transform: translateY(-3px); }
      .gk-btn-outline { background: transparent; color: ${T.ink}; border-color: ${T.line}; }
      .gk-btn-outline:hover { background: ${T.ink}; color: #fff; border-color: ${T.ink}; transform: translateY(-3px); }

      /* ---------- Nav ---------- */
      .gk-navlink {
        position: relative; font-family: ${T.sans}; font-size: .82rem; letter-spacing: .14em;
        text-transform: uppercase; font-weight: 400; background: none; border: 0; padding: .45rem 0;
        transition: color .3s ease;
      }
      .gk-navlink::after {
        content: ""; position: absolute; left: 0; bottom: 0; height: 1px; width: 0; background: ${T.gold};
        transition: width .38s cubic-bezier(.22,1,.36,1);
      }
      .gk-navlink:hover::after, .gk-navlink:focus-visible::after { width: 100%; }
      .gk-navlink:hover { color: ${T.gold}; }
      .gk-burger span { display:block; height:1.5px; width:24px; background: currentColor; transition: transform .35s ease, opacity .25s ease; }

      /* ---------- Cards ---------- */
      .gk-card {
        background: #fff; border: 1px solid rgba(22,22,26,.07); border-radius: 20px;
        box-shadow: ${T.shadow}; position: relative; overflow: hidden; height: 100%;
        transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease, border-color .45s ease;
      }
      .gk-card::after {
        content: ""; position: absolute; left: 0; bottom: 0; height: 2px; width: 0;
        background: linear-gradient(90deg, ${T.gold}, ${T.goldSoft}); transition: width .5s cubic-bezier(.22,1,.36,1);
      }
      .gk-card:hover { transform: translateY(-10px); box-shadow: ${T.shadowHover}; border-color: ${T.line}; }
      .gk-card:hover::after { width: 100%; }
      .gk-card:hover .gk-ico { transform: translateY(-4px) rotate(-6deg); background: ${T.ink}; color: ${T.goldSoft}; }
      .gk-ico {
        width: 58px; height: 58px; border-radius: 16px; display: grid; place-items: center;
        background: ${T.warm}; color: ${T.goldDeep}; font-size: 1.4rem;
        transition: transform .45s cubic-bezier(.22,1,.36,1), background .45s ease, color .45s ease;
      }

      /* ---------- Image frames ---------- */
      .gk-frame { overflow: hidden; border-radius: 22px; position: relative; }
      .gk-frame img { display:block; width:100%; height:100%; object-fit: cover; transition: transform 1.1s cubic-bezier(.22,1,.36,1); }
      .gk-frame:hover img { transform: scale(1.07); }
      .gk-frame::after {
        content:""; position:absolute; inset:0; background: linear-gradient(180deg, rgba(22,22,26,0) 45%, rgba(22,22,26,.45));
        opacity: .55; transition: opacity .5s ease; pointer-events:none;
      }
      .gk-frame:hover::after { opacity: .75; }

      /* ---------- Gallery ---------- */
      .gk-gitem { position: relative; overflow: hidden; border-radius: 18px; cursor: pointer; border: 0; padding: 0; width: 100%; background: ${T.warm}; }
      .gk-gitem img { width:100%; height:100%; object-fit: cover; display:block; transition: transform 1.1s cubic-bezier(.22,1,.36,1); }
      .gk-gitem:hover img { transform: scale(1.09); }
      .gk-gveil {
        position:absolute; inset:0; display:grid; place-items:center; color:#fff;
        background: linear-gradient(180deg, rgba(22,22,26,.15), rgba(22,22,26,.65));
        opacity:0; transition: opacity .45s ease;
      }
      .gk-gitem:hover .gk-gveil, .gk-gitem:focus-visible .gk-gveil { opacity: 1; }
      .gk-gveil span { transform: translateY(10px); transition: transform .45s cubic-bezier(.22,1,.36,1); display:grid; place-items:center; gap:.5rem; }
      .gk-gitem:hover .gk-gveil span { transform: translateY(0); }

      .gk-masonry { column-count: 3; column-gap: 1.25rem; }
      @media (max-width: 991.98px) { .gk-masonry { column-count: 2; } }
      @media (max-width: 575.98px) { .gk-masonry { column-count: 1; } }

      /* ---------- Marquee ---------- */
      .gk-marquee { display:flex; width:max-content; animation: gk-scroll 32s linear infinite; }
      .gk-marquee:hover { animation-play-state: paused; }
      @keyframes gk-scroll { from { transform: translateX(0);} to { transform: translateX(-50%);} }

      /* ---------- Accordion ---------- */
      .gk-acc-btn {
        width:100%; text-align:left; background:#fff; border:0; padding:1.35rem 1.5rem; display:flex;
        align-items:center; justify-content:space-between; gap:1rem; cursor:pointer;
        font-family:${T.serif}; font-size:1.2rem; color:${T.ink}; transition: color .3s ease, background .3s ease;
      }
      .gk-acc-btn:hover { color: ${T.goldDeep}; background: ${T.warm}; }
      .gk-acc-panel { overflow:hidden; transition: grid-template-rows .45s cubic-bezier(.22,1,.36,1), opacity .35s ease; display:grid; }

      /* ---------- Modal ---------- */
      .gk-backdrop { position:fixed; inset:0; background: rgba(12,12,14,.66); backdrop-filter: blur(6px); z-index:1080; display:grid; place-items:center; padding:1rem; animation: gk-fade .3s ease both; overflow-y:auto; }
      .gk-modal { background:#fff; border-radius:24px; width:min(960px,100%); max-height:92vh; overflow-y:auto; box-shadow:0 40px 100px rgba(0,0,0,.4); animation: gk-pop .45s cubic-bezier(.22,1,.36,1) both; }
      @keyframes gk-fade { from{opacity:0} to{opacity:1} }
      @keyframes gk-pop { from{opacity:0; transform:translateY(24px) scale(.97)} to{opacity:1; transform:none} }
      @keyframes gk-rise { from{opacity:0; transform:translateY(34px)} to{opacity:1; transform:none} }
      @keyframes gk-bob { 0%,100%{transform:translateY(0);opacity:.85} 50%{transform:translateY(9px);opacity:.35} }
      .gk-rise { animation: gk-rise 1s cubic-bezier(.22,1,.36,1) both; }

      .gk-input {
        width:100%; border:1px solid rgba(22,22,26,.14); border-radius: 12px; padding:.8rem 1rem;
        font-family:${T.sans}; font-size:.95rem; color:${T.ink}; background:#fff; transition: border-color .3s ease, box-shadow .3s ease;
      }
      .gk-input:focus { outline:none; border-color:${T.gold}; box-shadow: 0 0 0 4px rgba(185,149,83,.16); }
      .gk-label { font-family:${T.sans}; font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; color:${T.inkSoft}; margin-bottom:.4rem; display:block; }

      .gk-social {
        width:42px; height:42px; border-radius:50%; display:grid; place-items:center; color:#e8e3d9;
        border:1px solid rgba(255,255,255,.2); transition: transform .35s cubic-bezier(.22,1,.36,1), background .35s ease, color .35s ease;
      }
      .gk-social:hover { background:${T.gold}; color:#16161a; transform: translateY(-4px) rotate(8deg); }

      .gk-flink { color:#bdb8ad; font-family:${T.sans}; font-size:.92rem; font-weight:300; background:none; border:0; padding:.25rem 0; transition: color .3s ease, padding-left .3s ease; }
      .gk-flink:hover { color:${T.goldSoft}; padding-left:.4rem; }

      @media (max-width: 991.98px) {
        .gk-hero-title { font-size: clamp(2.4rem, 9vw, 3.6rem) !important; }
      }
      @media (max-width: 575.98px) {
        .gk-btn { width: 100%; justify-content: center; }
        .gk-btn-inline { width: auto !important; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
      }
    `}</style>
  );
}
