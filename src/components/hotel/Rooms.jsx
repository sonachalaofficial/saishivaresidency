import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiMaximize,
  FiUsers,
  FiWifi,
  FiWind,
  FiTv,
  FiCoffee,
  FiDroplet,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img5 from "@/assets/images/img5.png";
import img6 from "@/assets/images/img6.png";
import img9 from "@/assets/images/img9.png";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

export const ROOM_SLIDES = [
  { src: img2, alt: "Elegant Guest Room Interior" },
  { src: img3, alt: "Sandhya Suite Room" },
  { src: img5, alt: "Premium Suite Lounge & Bedroom" },
  { src: img6, alt: "Cozy Bedroom Ambience" },
  { src: img9, alt: "Deluxe Suite Room" },
];

export const ROOM = {
  name: "Suite Room",
  price: "₹2,500",
  per: "per night, taxes included",
  size: "220 sq ft",
  guests: "2 adults + 1 child",
  bed: "King size bed",
  amenities: [
    { name: "King Size Bed", icon: <FiHeart /> },
    { name: "Air Conditioning", icon: <FiWind /> },
    { name: "Free Wi-Fi", icon: <FiWifi /> },
    { name: "Smart TV", icon: <FiTv /> },
    { name: "Room Service", icon: <FiCoffee /> },
    { name: "Private Bathroom", icon: <FiDroplet /> },
    { name: "Complimentary Breakfast", icon: <FiCheckCircle /> },
    { name: "24/7 Support", icon: <FiClock /> },
  ],
};

export function Rooms({ onBook, onDetails }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % ROOM_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % ROOM_SLIDES.length);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + ROOM_SLIDES.length) % ROOM_SLIDES.length);

  return (
    <section id="rooms" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.cream }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <Reveal direction="left">
              <div
                className="gk-frame"
                style={{
                  aspectRatio: "7 / 5",
                  boxShadow: T.shadow,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 20
                }}
              >
                {ROOM_SLIDES.map((slide, i) => (
                  <img
                    key={i}
                    src={slide.src}
                    alt={slide.alt}
                    width={1408}
                    height={1008}
                    loading={i === 0 ? "eager" : "lazy"}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: i === slideIndex ? 1 : 0,
                      transition: "opacity 0.7s ease-in-out",
                      zIndex: i === slideIndex ? 1 : 0,
                    }}
                  />
                ))}

                <span
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 20,
                    zIndex: 3,
                    background: "rgba(255,255,255,.88)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 999,
                    padding: ".5rem 1.1rem",
                    fontFamily: T.sans,
                    fontSize: ".68rem",
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: T.goldDeep,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  Only 1 suite type
                </span>

                {/* Slide Indicators */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3,
                    display: "flex",
                    gap: 8,
                    background: "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(6px)",
                    padding: "6px 12px",
                    borderRadius: 999,
                  }}
                >
                  {ROOM_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlideIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: i === slideIndex ? 22 : 8,
                        height: 8,
                        borderRadius: 999,
                        background: i === slideIndex ? T.gold : "rgba(255,255,255,0.6)",
                        border: 0,
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-12 col-lg-6 ps-lg-5">
            <Reveal direction="right">
              <p style={sectionLabel}>Our Signature Room</p>
              <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>{ROOM.name}</h2>
              <p style={{ ...body, marginBottom: "1.6rem" }}>
                Our only suite, and the reason most guests come back. Warm oak floors, a deep velvet headboard, blackout
                drapes and a bathroom finished in cool marble — designed for long, quiet sleep and slow mornings.
              </p>

              <div className="d-flex flex-wrap gap-4 mb-4">
                {[
                  { icon: <FiMaximize />, label: ROOM.size },
                  { icon: <FiUsers />, label: ROOM.guests },
                  { icon: <FiWifi />, label: ROOM.bed },
                ].map((m) => (
                  <span key={m.label} className="d-flex align-items-center gap-2" style={{ fontFamily: T.sans, fontSize: ".9rem", color: T.inkSoft }}>
                    <span style={{ color: T.goldDeep, display: "grid", placeItems: "center" }} aria-hidden>{m.icon}</span>
                    {m.label}
                  </span>
                ))}
              </div>

              <div className="row g-2 mb-4">
                {ROOM.amenities.map((a) => {
                  const name = typeof a === "string" ? a : a.name;
                  const icon = typeof a === "object" ? a.icon : null;
                  return (
                    <div className="col-6" key={name}>
                      <span
                        className="d-flex align-items-center gap-2"
                        style={{
                          fontFamily: T.sans,
                          fontSize: ".86rem",
                          color: T.inkSoft,
                          padding: ".55rem .9rem",
                          border: `1px solid ${T.line}`,
                          borderRadius: 10,
                          background: "#fff",
                        }}
                      >
                        {icon && <span style={{ color: T.goldDeep, display: "grid", placeItems: "center" }}>{icon}</span>}
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex flex-wrap align-items-baseline gap-2 mb-4">
                <span style={{ fontFamily: T.serif, fontSize: "2.4rem", color: T.ink, lineHeight: 1 }}>{ROOM.price}</span>
                <span style={{ fontFamily: T.sans, fontSize: ".85rem", color: T.inkSoft }}>{ROOM.per}</span>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <button type="button" className="gk-btn gk-btn-gold" onClick={onBook}>
                  Book Now <FiArrowRight aria-hidden />
                </button>
                <button type="button" className="gk-btn gk-btn-outline" onClick={onDetails}>
                  View Details <FiArrowRight aria-hidden />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
