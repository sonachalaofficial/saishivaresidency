import { FiExternalLink, FiMapPin } from "react-icons/fi";
import templeImg from "@/assets/nearby/kovil.png";
import hillImg from "@/assets/nearby/girivalam.png";
import ashramImg from "@/assets/nearby/ramana.png";
import caveImg from "@/assets/nearby/cave.png";
import aadhiImg from "@/assets/nearby/adhi.png";
import damImg from "@/assets/nearby/sathanur.png";
import fortImg from "@/assets/nearby/gingee.png";
import parvathamalaiImg from "@/assets/nearby/paru.png";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

const ATTRACTIONS = [
  {
    name: "Arunachaleswarar Temple",
    description: "One of the most important spiritual landmarks of Tiruvannamalai, dedicated to Lord Arunachaleswarar.",
    distance: "In the heart of Tiruvannamalai",
    img: templeImg,
    alt: "Arunachaleswarar Temple in Tiruvannamalai - Top attraction near Sai Shiva Residency",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arunachaleswarar+Temple+Tiruvannamalai",
  },
  {
    name: "Girivalam Path",
    description: "A famous spiritual destination where visitors walk around the sacred Arunachala Hill.",
    distance: "Very close to the city center",
    img: hillImg,
    alt: "Arunachala Hill and Girivalam Path near Sai Shiva Residency hotel in Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arunachala+Hill+Girivalam+Path+Tiruvannamalai",
  },
  {
    name: "Sri Ramanasramam",
    description: "A peaceful spiritual ashram associated with Sri Ramana Maharshi, located at the foot of Arunachala Hill.",
    distance: "Approx. 2–3 km",
    img: ashramImg,
    alt: "Sri Ramanasramam Ashram located near Sai Shiva Residency in Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Ramanasramam+Tiruvannamalai",
  },
  {
    name: "Skandashramam & Virupaksha Cave",
    description: "Scenic and spiritual hill locations offering peaceful surroundings and beautiful views.",
    distance: "Approx. 3–4 km",
    img: caveImg,
    alt: "Skandashramam and Virupaksha Cave spiritual site in Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Skandashramam+Virupaksha+Cave+Tiruvannamalai",
  },
  {
    name: "Aadhi Annamalaiyar Temple",
    description: "An ancient temple located along the Girivalam route, known for its spiritual significance.",
    distance: "Approx. 6 km",
    img: aadhiImg,
    alt: "Aadhi Annamalaiyar Temple along Girivalam route in Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Aadhi+Annamalaiyar+Temple+Tiruvannamalai",
  },
  {
    name: "Sathanur Dam",
    description: "A scenic destination surrounded by greenery, gardens and natural beauty, ideal for a relaxing day trip.",
    distance: "Approx. 30 km",
    img: damImg,
    alt: "Sathanur Dam tourist place near Tiruvannamalai hotels",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sathanur+Dam+Tiruvannamalai",
  },
  {
    name: "Gingee Fort",
    description: "A historic hill fort and an excellent heritage destination for visitors interested in history and architecture.",
    distance: "Approx. 40 km",
    img: fortImg,
    alt: "Gingee Fort heritage destination near Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gingee+Fort+Tamil+Nadu",
  },
  {
    name: "Parvathamalai",
    description: "A popular spiritual trekking destination known for its hilltop temple and scenic surroundings.",
    distance: "Approx. 35–40 km",
    img: parvathamalaiImg,
    alt: "Parvathamalai spiritual trek and hilltop temple near Tiruvannamalai",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Parvathamalai+Temple+Tiruvannamalai",
  },
];

const MARQUEE = [
  "Arunachaleswarar Temple",
  "Girivalam Path",
  "Sri Ramanasramam",
  "Skandashramam",
  "Virupaksha Cave",
  "Sathanur Dam",
  "Gingee Fort",
  "Parvathamalai",
];

export function Attractions() {
  return (
    <section id="attractions" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.cream, overflow: "hidden" }}>
      <div className="container">
        <Reveal>
          <div className="text-center mx-auto" style={{ maxWidth: 720, marginBottom: "3rem" }}>
            <p style={sectionLabel}>Nearby Attractions</p>
            <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
              Explore <span style={{ fontStyle: "italic", color: T.goldDeep }}>Tiruvannamalai</span>
            </h2>
            <p style={{ ...body, margin: 0 }}>
              Discover the spiritual, cultural and natural attractions near Sai Shiva Residency.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        style={{
          borderTop: `1px solid ${T.line}`,
          borderBottom: `1px solid ${T.line}`,
          background: T.warm,
          padding: ".9rem 0",
          marginBottom: "3.5rem",
        }}
        aria-hidden
      >
        <div className="gk-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="d-flex align-items-center" style={{ paddingRight: "2rem" }}>
              {MARQUEE.map((m) => (
                <span
                  key={`${dup}-${m}`}
                  className="d-flex align-items-center"
                  style={{ fontFamily: T.serif, fontSize: "1.35rem", color: T.ink, whiteSpace: "nowrap", paddingRight: "2rem" }}
                >
                  {m}
                  <span style={{ color: T.gold, paddingLeft: "2rem" }}>{"\u2726"}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {ATTRACTIONS.map((a, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={a.name}>
              <Reveal direction="up" delay={(i % 4) * 90} style={{ height: "100%" }}>
                <article
                  className="gk-card d-flex flex-column h-100"
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    background: "#fff",
                    border: `1px solid ${T.line}`,
                    boxShadow: T.shadow,
                    transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
                  }}
                >
                  <div className="gk-frame" style={{ borderRadius: "20px 20px 0 0", aspectRatio: "4 / 3", position: "relative" }}>
                    <img
                      src={a.img}
                      alt={a.alt}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1"
                      style={{
                        position: "absolute",
                        right: 12,
                        top: 12,
                        zIndex: 2,
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(6px)",
                        borderRadius: 999,
                        padding: ".35rem .75rem",
                        fontFamily: T.sans,
                        fontSize: ".68rem",
                        fontWeight: 500,
                        letterSpacing: ".05em",
                        color: T.goldDeep,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    >
                      <FiMapPin style={{ fontSize: ".8rem", color: T.goldDeep }} aria-hidden />
                      {a.distance}
                    </span>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 style={{ ...heading, fontSize: "1.25rem", marginBottom: ".6rem", lineHeight: 1.25 }}>
                        {a.name}
                      </h3>
                      <p style={{ ...body, fontSize: ".9rem", lineHeight: 1.65, margin: 0, color: T.inkSoft }}>
                        {a.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(22,22,26,0.06)" }}>
                      <a
                        href={a.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gk-btn gk-btn-outline w-100 justify-content-center"
                        style={{
                          padding: ".55rem 1rem",
                          fontSize: ".75rem",
                          letterSpacing: ".12em",
                          borderRadius: 12,
                        }}
                      >
                        View Location <FiExternalLink aria-hidden />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

