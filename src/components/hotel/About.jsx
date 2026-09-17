import { FiCheck } from "react-icons/fi";
import aboutImg from "@/assets/images/about.png";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

const STATS = [
  { value: "10+", label: "Years of Hospitality" },
  { value: "50+", label: "Happy Guests Weekly" },
  { value: "24/7", label: "Guest Service" },
  { value: "100%", label: "Comfort Promise" },
];

const HIGHLIGHTS = [
  "Family-run hospitality with a personal welcome at every arrival",
  "Daily housekeeping, fresh linen and filtered drinking water",
  "Complimentary breakfast served from 7:30 AM in the dining room",
];

export function About() {
  return (
    <section id="about" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.cream }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <Reveal direction="left">
              <div className="gk-frame" style={{ aspectRatio: "6 / 7", boxShadow: T.shadow }}>
                <img src={aboutImg} alt="Grand marble lobby of Saishiva Residency with chandelier and lounge seating" width={1200} height={1408} loading="lazy" />
              </div>
            </Reveal>
          </div>

          <div className="col-12 col-lg-6 ps-lg-5">
            <Reveal direction="right">
              <p style={sectionLabel}>About Our Hotel</p>
              <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1.25rem" }}>
                A quiet address for travellers who value{" "}
                <span style={{ fontStyle: "italic", color: T.goldDeep }}>detail</span>.
              </h2>
              <p style={{ ...body, marginBottom: "1.1rem" }}>
                Saishiva Residency was built around a simple idea: a stay should feel restful before you unpack. Our rooms are
                finished in warm neutrals, soft lighting and linen chosen for a good night's sleep, while the team
                downstairs keeps an eye on the small things — an early cab, a late check-out, a pot of filter coffee.
              </p>
              <ul className="list-unstyled mb-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="d-flex gap-3 mb-3 align-items-start">
                    <span
                      aria-hidden
                      style={{ width: 26, height: 26, borderRadius: "50%", background: T.warm, color: T.goldDeep, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 3 }}
                    >
                      <FiCheck size={14} />
                    </span>
                    <span style={{ ...body, margin: 0, fontSize: ".98rem" }}>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="row g-3">
              {STATS.map((s, i) => (
                <div className="col-6" key={s.label}>
                  <Reveal direction="up" delay={120 * i}>
                    <div className="gk-card p-4">
                      <div style={{ fontFamily: T.serif, fontSize: "2.2rem", color: T.goldDeep, lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontFamily: T.sans, fontSize: ".76rem", letterSpacing: ".14em", textTransform: "uppercase", color: T.inkSoft, marginTop: ".45rem" }}>
                        {s.label}
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
