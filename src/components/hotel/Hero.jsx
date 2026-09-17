import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import heroImg from "@/assets/images/home.png";
import { T, scrollToId } from "./theme";

export function Hero({ onBook }) {
  return (
    <section
      id="home"
      style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      <img
        src={heroImg}
        alt="Illuminated facade of Saishiva Residency at twilight, framed by palm trees"
        width={1920}
        height={1088}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(14,14,18,.72) 0%, rgba(14,14,18,.45) 40%, rgba(14,14,18,.82) 100%)",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 120 }}>
        <div className="row">
          <div className="col-12 col-lg-9 col-xl-8">
            <p className="gk-rise" style={{ animationDelay: ".1s", fontFamily: T.sans, letterSpacing: ".42em", textTransform: "uppercase", fontSize: ".72rem", color: T.goldSoft, marginBottom: "1.4rem" }}>
              {"\u2726"} Welcome to Saishiva Residency
            </p>
            <h1
              className="gk-rise gk-hero-title"
              style={{
                animationDelay: ".25s",
                fontFamily: T.serif,
                fontWeight: 500,
                color: "#fff",
                fontSize: "clamp(2.8rem, 6.4vw, 5.4rem)",
                lineHeight: 1.05,
                marginBottom: "1.2rem",
              }}
            >
              Experience Luxury.
              <br />
              <span style={{ fontStyle: "italic", color: T.goldSoft }}>Stay Inspired.</span>
            </h1>
            <p
              className="gk-rise"
              style={{
                animationDelay: ".4s",
                fontFamily: T.sans,
                fontWeight: 300,
                color: "rgba(255,255,255,.86)",
                fontSize: "1.08rem",
                lineHeight: 1.85,
                maxWidth: 560,
                marginBottom: "2.4rem",
              }}
            >
              Welcome to our premium hotel, where comfort, elegance and unforgettable hospitality come together —
              moments from the temple gate, the market lanes and the heart of the city.
            </p>
            <div className="gk-rise d-flex flex-column flex-sm-row gap-3" style={{ animationDelay: ".55s" }}>
              <button type="button" className="gk-btn gk-btn-gold" onClick={onBook}>
                Book Your Stay <FiArrowRight aria-hidden />
              </button>
              <button type="button" className="gk-btn gk-btn-ghost" onClick={() => scrollToId("rooms")}>
                Explore Rooms <FiArrowRight aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("about")}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          background: "none",
          border: 0,
          color: "rgba(255,255,255,.85)",
          display: "grid",
          placeItems: "center",
          gap: ".3rem",
          fontFamily: T.sans,
          fontSize: ".62rem",
          letterSpacing: ".3em",
          textTransform: "uppercase",
        }}
      >
        Scroll
        <FiChevronDown style={{ fontSize: "1.3rem", animation: "gk-bob 2s ease-in-out infinite" }} aria-hidden />
      </button>
    </section>
  );
}
