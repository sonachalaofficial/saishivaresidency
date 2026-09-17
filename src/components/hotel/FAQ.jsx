import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

const QUESTIONS = [
  { q: "What time is check-in and check-out?", a: "Check-in begins at 12:00 PM and check-out is until 11:00 AM. Luggage storage is free before and after those hours." },
  { q: "Do you provide free Wi-Fi?", a: "Yes. High-speed fibre Wi-Fi is complimentary throughout the property, including all rooms, the lobby and the rooftop." },
  { q: "Is breakfast included with the room?", a: "Every Sandhya Suite booking includes breakfast for two, served from 7:30 AM to 10:30 AM in the dining room." },
  { q: "Do you have parking facilities?", a: "Free covered parking is available for one vehicle per room, with a valet on duty during evening hours." },
  { q: "Can I request an early check-in?", a: "Early check-in from 9:00 AM can usually be arranged subject to availability. Call the front desk a day ahead and we will try to hold the room." },
  { q: "Do you provide room service?", a: "Yes, room service runs from 7:00 AM to 11:00 PM, and light snacks and beverages are available around the clock." },
  { q: "Is the hotel suitable for families?", a: "Very much so. The suite comfortably sleeps two adults and one child, and an extra bed or cot can be added for a small charge." },
  { q: "How can I make a reservation?", a: "Use the Book Now button on this page, call us directly, or send an email — we confirm every request personally within a few hours." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.warm }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8">
            <Reveal>
              <div className="text-center" style={{ marginBottom: "3rem" }}>
                <p style={sectionLabel}>Frequently Asked</p>
                <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
                  Good to <span style={{ fontStyle: "italic", color: T.goldDeep }}>know</span>
                </h2>
                <p style={{ ...body, margin: 0 }}>Anything else, our front desk is a phone call away.</p>
              </div>
            </Reveal>

            {QUESTIONS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} direction="up" delay={i * 60}>
                  <div
                    style={{
                      background: "#fff",
                      border: `1px solid ${isOpen ? T.line : "rgba(22,22,26,.07)"}`,
                      borderLeft: `3px solid ${isOpen ? T.gold : "transparent"}`,
                      borderRadius: 16,
                      marginBottom: ".85rem",
                      overflow: "hidden",
                      boxShadow: isOpen ? T.shadow : "none",
                      transition: "border-color .4s ease, box-shadow .4s ease",
                    }}
                  >
                    <h3 className="m-0">
                      <button
                        type="button"
                        className="gk-acc-btn"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                      >
                        <span>{item.q}</span>
                        <span className="gk-ico" style={{ width: 34, height: 34, borderRadius: 10, fontSize: "1rem", flexShrink: 0 }} aria-hidden>
                          {isOpen ? <FiMinus /> : <FiPlus />}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      className="gk-acc-panel"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                    >
                      <div style={{ minHeight: 0 }}>
                        <p style={{ ...body, fontSize: ".96rem", margin: 0, padding: "0 1.5rem 1.4rem" }}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
