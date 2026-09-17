import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Modal } from "./Modal";
import { ROOM, ROOM_SLIDES } from "./Rooms";
import { T, body, heading } from "./theme";

const FACILITIES = [
  "Daily housekeeping & fresh linen",
  "In-room safe and mini refrigerator",
  "Tea / coffee maker with daily refill",
  "Hot water 24 hours, rain shower",
  "Laundry and ironing on request",
  "Free parking for one vehicle",
];

export function RoomDetails({ open, onClose, onBook }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % ROOM_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + ROOM_SLIDES.length) % ROOM_SLIDES.length);

  return (
    <Modal open={open} onClose={onClose} title={ROOM.name}>
      {/* Slider Container */}
      <div
        className="gk-frame mb-3"
        style={{ aspectRatio: "16 / 9", position: "relative", overflow: "hidden", borderRadius: 16 }}
      >
        <img
          src={ROOM_SLIDES[activeSlide].src}
          alt={ROOM_SLIDES[activeSlide].alt}
          width={1408}
          height={1008}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease" }}
        />

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous image"
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            background: "rgba(14,14,18,0.5)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <FiChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next image"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 3,
            background: "rgba(14,14,18,0.5)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Thumbnails row */}
      <div className="d-flex gap-2 mb-4 overflow-auto pb-1">
        {ROOM_SLIDES.map((slide, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            style={{
              border: idx === activeSlide ? `2px solid ${T.gold}` : "2px solid transparent",
              borderRadius: 8,
              padding: 0,
              background: "none",
              cursor: "pointer",
              opacity: idx === activeSlide ? 1 : 0.65,
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: 64, height: 44, objectFit: "cover", borderRadius: 6, display: "block" }}
            />
          </button>
        ))}
      </div>

      <p style={{ ...body, marginBottom: "1.5rem" }}>
        The Sandhya Suite is a 420 sq ft corner room on the upper floors, away from the road. Mornings arrive through
        sheer curtains; evenings soften under two bedside lamps and a brass pendant. A lounge chair and writing desk
        sit by the window, and the marble bathroom is stocked with full-size toiletries and thick cotton towels.
      </p>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <h4 style={{ ...heading, fontSize: "1.25rem", marginBottom: ".9rem" }}>Amenities</h4>
          <ul className="list-unstyled mb-0">
            {ROOM.amenities.map((a) => {
              const name = typeof a === "string" ? a : a.name;
              const icon = typeof a === "object" ? a.icon : null;
              return (
                <li key={name} className="d-flex align-items-center gap-2" style={{ ...body, fontSize: ".93rem", marginBottom: ".35rem" }}>
                  <span style={{ color: T.gold, marginRight: ".3rem", display: "grid", placeItems: "center" }} aria-hidden>
                    {icon || "\u2726"}
                  </span>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h4 style={{ ...heading, fontSize: "1.25rem", marginBottom: ".9rem" }}>Room facilities</h4>
          <ul className="list-unstyled mb-0">
            {FACILITIES.map((f) => (
              <li key={f} style={{ ...body, fontSize: ".93rem", marginBottom: ".35rem" }}>
                <span style={{ color: T.gold, marginRight: ".5rem" }} aria-hidden>{"\u2726"}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row g-3 mt-2">
        {[
          { k: "Check-in", v: "From 12:00 PM" },
          { k: "Check-out", v: "Until 11:00 AM" },
          { k: "Room size", v: ROOM.size },
          { k: "Occupancy", v: ROOM.guests },
        ].map((d) => (
          <div className="col-6 col-md-3" key={d.k}>
            <div style={{ border: `1px solid ${T.line}`, borderRadius: 14, padding: "1rem", background: T.cream, height: "100%" }}>
              <div style={{ fontFamily: T.sans, fontSize: ".68rem", letterSpacing: ".16em", textTransform: "uppercase", color: T.inkSoft }}>{d.k}</div>
              <div style={{ fontFamily: T.serif, fontSize: "1.15rem", color: T.ink, marginTop: ".25rem" }}>{d.v}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-4 pt-4" style={{ borderTop: `1px solid ${T.line}` }}>
        <div>
          <span style={{ fontFamily: T.serif, fontSize: "2rem", color: T.ink }}>{ROOM.price}</span>{" "}
          <span style={{ fontFamily: T.sans, fontSize: ".85rem", color: T.inkSoft }}>{ROOM.per}</span>
        </div>
        <button type="button" className="gk-btn gk-btn-gold" onClick={() => { onClose(); onBook(); }}>
          Book Now <FiArrowRight aria-hidden />
        </button>
      </div>
    </Modal>
  );
}
