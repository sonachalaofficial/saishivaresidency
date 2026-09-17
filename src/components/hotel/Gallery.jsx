import { useState } from "react";
import { FiEye } from "react-icons/fi";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";
import img6 from "@/assets/images/img6.png";
import img7 from "@/assets/images/img7.png";
import img8 from "@/assets/images/img8.png";
import img9 from "@/assets/images/img9.png";
import img10 from "@/assets/images/img10.png";
import img11 from "@/assets/images/img11.png";
import img12 from "@/assets/images/img12.png";
import { Modal } from "./Modal";
import { Reveal } from "./Reveal";
import { T, body, heading, sectionLabel } from "./theme";

const PHOTOS = [
  { src: img1, alt: "Luxury Suite & Bedroom View", span: 2 },
  { src: img2, alt: "Elegant Guest Room Interiors", span: 1 },
  { src: img3, alt: "Spacious Living Area", span: 1 },
  { src: img4, alt: "Modern Bathroom & Amenities", span: 2 },
  { src: img5, alt: "Premium Suite Lounge", span: 1 },
  { src: img6, alt: "Cozy Bedroom Ambience", span: 1 },
  { src: img7, alt: "Hotel Lobby & Reception Desk", span: 1 },
  { src: img8, alt: "Dining & Breakfast Area", span: 1 },
  { src: img9, alt: "Deluxe Room Interior", span: 2 },
  { src: img10, alt: "Sunset Terrace View", span: 1 },
  { src: img11, alt: "Executive Guest Suite", span: 1 },
  { src: img12, alt: "Exterior Hotel View", span: 2 },
];

export function Gallery() {
  const [active, setActive] = useState(null);
  const photo = active === null ? null : PHOTOS[active];

  return (
    <section id="gallery" style={{ padding: "clamp(5rem, 10vw, 8.5rem) 0", background: T.warm }}>
      <div className="container">
        <Reveal>
          <div className="text-center mx-auto" style={{ maxWidth: 680, marginBottom: "3.5rem" }}>
            <p style={sectionLabel}>Gallery</p>
            <h2 style={{ ...heading, fontSize: "clamp(2.1rem, 4vw, 3.2rem)", marginBottom: "1rem" }}>
              A look <span style={{ fontStyle: "italic", color: T.goldDeep }}>inside</span>
            </h2>
            <p style={{ ...body, margin: 0 }}>Twelve frames from around the property — rooms, dining, lobby and terrace.</p>
          </div>
        </Reveal>

        <div className="row g-3 g-md-4">
          {PHOTOS.map((p, i) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.alt}>
              <Reveal direction="in" delay={(i % 4) * 80} style={{ height: "100%" }}>
                <button
                  type="button"
                  className="gk-gitem"
                  style={{ aspectRatio: "1 / 1", borderRadius: 16 }}
                  onClick={() => setActive(i)}
                  aria-label={`View larger image: ${p.alt}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span className="gk-gveil" aria-hidden>
                    <span>
                      <FiEye size={24} />
                      <span style={{ fontFamily: T.sans, fontSize: ".64rem", letterSpacing: ".24em", textTransform: "uppercase" }}>View</span>
                    </span>
                  </span>
                </button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <Modal open={photo !== null} onClose={() => setActive(null)} title="Gallery" width={1100}>
        {photo ? (
          <figure className="m-0">
            <img src={photo.src} alt={photo.alt} style={{ width: "100%", borderRadius: 16, display: "block" }} />
            <figcaption style={{ ...body, fontSize: ".9rem", marginTop: ".9rem", textAlign: "center" }}>{photo.alt}</figcaption>
          </figure>
        ) : null}
      </Modal>
    </section>
  );
}
