import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HOTEL, T, scrollToId } from "./theme";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "why", label: "Why Choose Us" },
  { id: "rooms", label: "Rooms" },
  { id: "gallery", label: "Gallery" },
  { id: "attractions", label: "Attractions" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const fg = solid ? T.ink : "#fff";

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1040,
        background: solid ? "rgba(252,251,248,0.92)" : "transparent",
        backdropFilter: solid ? "blur(14px) saturate(160%)" : "none",
        borderBottom: solid ? `1px solid ${T.line}` : "1px solid transparent",
        boxShadow: solid ? "0 10px 30px rgba(22,22,26,.08)" : "none",
        transition: "background .45s ease, box-shadow .45s ease, border-color .45s ease",
      }}
    >
      <nav className="container d-flex align-items-center justify-content-between" style={{ height: 76 }} aria-label="Main navigation">
        <button
          type="button"
          onClick={() => go("home")}
          style={{ background: "none", border: 0, textAlign: "left", color: fg, transition: "color .4s ease" }}
        >
          <span style={{ fontFamily: T.serif, fontSize: "1.6rem", fontWeight: 600, letterSpacing: ".02em", display: "block", lineHeight: 1 }}>
            {HOTEL.name.split(" ")[0]} <span style={{ color: T.gold }}>{HOTEL.name.split(" ").slice(1).join(" ")}</span>
          </span>
          {/* <span style={{ fontFamily: T.sans, fontSize: ".58rem", letterSpacing: ".38em", textTransform: "uppercase", opacity: 0.7 }}>
            {HOTEL.tagline}
          </span> */}
        </button>

        <ul className="d-none d-xl-flex align-items-center gap-4 mb-0 list-unstyled">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button type="button" className="gk-navlink" style={{ color: fg }} onClick={() => go(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          <button type="button" className="gk-btn gk-btn-gold gk-btn-inline d-none d-sm-inline-flex" style={{ padding: ".7rem 1.5rem", width: "auto" }} onClick={onBook}>
            Book Now
          </button>
          <button
            type="button"
            className="d-xl-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{ background: "none", border: 0, color: fg, fontSize: "1.6rem", display: "grid", placeItems: "center" }}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className="d-xl-none"
        style={{
          maxHeight: open ? 560 : 0,
          overflow: "hidden",
          transition: "max-height .5s cubic-bezier(.22,1,.36,1)",
          background: "rgba(252,251,248,.98)",
          borderTop: open ? `1px solid ${T.line}` : "none",
        }}
      >
        <ul className="container list-unstyled py-3 mb-0">
          {LINKS.map((l) => (
            <li key={l.id} style={{ borderBottom: "1px solid rgba(22,22,26,.06)" }}>
              <button
                type="button"
                onClick={() => go(l.id)}
                style={{
                  background: "none",
                  border: 0,
                  width: "100%",
                  textAlign: "left",
                  padding: ".9rem 0",
                  fontFamily: T.serif,
                  fontSize: "1.2rem",
                  color: T.ink,
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <button type="button" className="gk-btn gk-btn-gold w-100 justify-content-center" onClick={() => { setOpen(false); onBook(); }}>
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
