import { FiArrowRight } from "react-icons/fi";
import ctaImg from "@/assets/cta.jpg";
import { Reveal } from "./Reveal";
import { T } from "./theme";

export function CTA({ onBook }) {
  return (
    <section style={{ position: "relative", padding: "clamp(5rem, 12vw, 9rem) 0", overflow: "hidden" }}>
      <img
        src={ctaImg}
        alt="Lit hotel pool and facade at night"
        width={1920}
        height={912}
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,18,.72), rgba(14,14,18,.82))" }} />
      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <p style={{ fontFamily: T.sans, letterSpacing: ".38em", textTransform: "uppercase", fontSize: ".7rem", color: T.goldSoft, marginBottom: "1.2rem" }}>
            Reservations Open
          </p>
          <h2 style={{ fontFamily: T.serif, fontWeight: 500, color: "#fff", fontSize: "clamp(2.3rem, 5.4vw, 4rem)", lineHeight: 1.1, marginBottom: "1rem" }}>
            Your Perfect Stay Awaits
          </h2>
          <p style={{ fontFamily: T.sans, fontWeight: 300, color: "rgba(255,255,255,.84)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto 2.4rem" }}>
            Experience comfort, elegance and exceptional hospitality.
          </p>
          <div className="d-flex justify-content-center">
            <button type="button" className="gk-btn gk-btn-gold" onClick={onBook}>
              Book Your Stay <FiArrowRight aria-hidden />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
