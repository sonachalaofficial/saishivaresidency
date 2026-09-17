import { FiClock, FiHeart, FiMapPin, FiStar } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

const FEATURES = [
  { icon: <FiStar />, title: "Luxury Rooms", text: "Spacious suites with king beds, blackout drapes and a writing desk by the window." },
  { icon: <FiHeart />, title: "Exceptional Hospitality", text: "A small, attentive team that remembers your coffee, your timings and your name." },
  { icon: <FiMapPin />, title: "Prime Location", text: "Six minutes from the temple gate, eight from the market and close to the station." },
  { icon: <FiClock />, title: "24/7 Guest Support", text: "Front desk, room service and airport transfers arranged at any hour of the night." },
];

export function WhyChooseUs() {
  return (
    <section id="why" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.warm }}>
      <div className="container">
        <Reveal>
          <div className="text-center mx-auto" style={{ maxWidth: 680, marginBottom: "3.5rem" }}>
            <p style={sectionLabel}>Why Choose Us</p>
            <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
              Everything considered, <span style={{ fontStyle: "italic", color: T.goldDeep }}>nothing rushed</span>
            </h2>
            <p style={{ ...body, margin: "0 auto" }}>
              Four reasons guests return to Saishiva Residency season after season.
            </p>
          </div>
        </Reveal>

        <div className="row g-4">
          {FEATURES.map((f, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={f.title}>
              <Reveal direction="up" delay={i * 120} style={{ height: "100%" }}>
                <article className="gk-card p-4 p-xl-5">
                  <div className="gk-ico mb-4" aria-hidden>{f.icon}</div>
                  <h3 style={{ ...heading, fontSize: "1.45rem", marginBottom: ".6rem" }}>{f.title}</h3>
                  <p style={{ ...body, fontSize: ".95rem", margin: 0 }}>{f.text}</p>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
