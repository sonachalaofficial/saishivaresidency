import { FiClock, FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { HOTEL, T, scrollToId } from "./theme";

const QUICK = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "rooms", label: "Rooms" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
];

const SOCIALS = [
  { icon: <FiInstagram />, label: "Instagram" },
  { icon: <FiFacebook />, label: "Facebook" },
  { icon: <FiYoutube />, label: "YouTube" },
];

const headStyle = {
  fontFamily: T.serif,
  fontSize: "1.3rem",
  color: "#f4efe7",
  marginBottom: "1.2rem",
};

export function Footer() {
  return (
    <footer id="contact" style={{ background: T.ink, color: "#bdb8ad", paddingTop: "clamp(3.5rem, 8vw, 6rem)" }}>
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-4">
            <span style={{ fontFamily: T.serif, fontSize: "1.9rem", color: "#f7f4ee", display: "block", lineHeight: 1 }}>
              {HOTEL.name.split(" ")[0]} <span style={{ color: T.goldSoft }}>{HOTEL.name.split(" ").slice(1).join(" ")}</span>
            </span>
            <span style={{ fontFamily: T.sans, fontSize: ".6rem", letterSpacing: ".38em", textTransform: "uppercase", color: T.gold }}>
              {HOTEL.tagline}
            </span>
            <p style={{ fontFamily: T.sans, fontWeight: 300, fontSize: ".95rem", lineHeight: 1.85, marginTop: "1.3rem", maxWidth: 340 }}>
              A quiet, family-run luxury stay near the temple gate — one signature suite, warm service and a breakfast
              worth waking up for.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h3 style={headStyle}>Quick Links</h3>
            <ul className="list-unstyled mb-0 d-grid gap-1">
              {QUICK.map((q) => (
                <li key={q.id}>
                  <button type="button" className="gk-flink" onClick={() => scrollToId(q.id)}>
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h3 style={headStyle}>Contact</h3>
            <ul className="list-unstyled mb-0 d-grid gap-3" style={{ fontFamily: T.sans, fontWeight: 300, fontSize: ".93rem" }}>
              <li className="d-flex gap-2"><FiMapPin style={{ color: T.gold, marginTop: 4, flexShrink: 0 }} aria-hidden />{HOTEL.address}</li>
              <li className="d-flex gap-2"><FiPhone style={{ color: T.gold, marginTop: 4, flexShrink: 0 }} aria-hidden /><a href={`tel:${HOTEL.phone.replace(/\s/g, "")}`} style={{ color: "inherit" }}>{HOTEL.phone}</a></li>
              <li className="d-flex gap-2"><FiMail style={{ color: T.gold, marginTop: 4, flexShrink: 0 }} aria-hidden /><a href={`mailto:${HOTEL.email}`} style={{ color: "inherit" }}>{HOTEL.email}</a></li>
              <li className="d-flex gap-2"><FiClock style={{ color: T.gold, marginTop: 4, flexShrink: 0 }} aria-hidden />Front desk open 24 hours, all days</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h3 style={headStyle}>Follow Us</h3>
            <p style={{ fontFamily: T.sans, fontWeight: 300, fontSize: ".93rem", marginBottom: "1.1rem" }}>
              Rooms, recipes and the view from the rooftop.
            </p>
            <div className="d-flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#contact" className="gk-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mt-5 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,.1)", fontFamily: T.sans, fontSize: ".85rem", fontWeight: 300 }}
        >
          <span>© 2026 {HOTEL.name}. All Rights Reserved.</span>
          <span>
            <a href="#contact" style={{ color: "inherit" }}>Privacy Policy</a>
            <span style={{ color: T.gold, padding: "0 .6rem" }}>|</span>
            <a href="#contact" style={{ color: "inherit" }}>Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
