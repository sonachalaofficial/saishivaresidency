import { useEffect, useRef, useState } from "react";

export const T = {
  gold: "#b99553",
  goldSoft: "#d8bd84",
  goldDeep: "#8c6d32",
  ink: "#16161a",
  inkSoft: "#4a4a52",
  cream: "#fcfbf8",
  warm: "#f4efe7",
  line: "rgba(185,149,83,0.28)",
  shadow: "0 18px 50px rgba(22,22,26,0.10)",
  shadowHover: "0 28px 70px rgba(22,22,26,0.18)",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Jost', system-ui, -apple-system, sans-serif",
};

export const HOTEL = {
  name: "Saishiva Residency",
  tagline: "Luxury Stay & Hospitality",
  phone: "+91 70108 05370",
  email: "saishivaresidencytvmalai@gmail.com",
  address: "NEW, Bypass Ring Road, Kil Anakarai, Tiruvannamalai, Tamil Nadu 606603",
};

export const sectionLabel = {
  fontFamily: T.sans,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  fontSize: "0.72rem",
  fontWeight: 500,
  color: T.gold,
  marginBottom: "0.9rem",
};

export const heading = {
  fontFamily: T.serif,
  fontWeight: 500,
  color: T.ink,
  lineHeight: 1.12,
  letterSpacing: "-0.01em",
};

export const body = {
  fontFamily: T.sans,
  color: T.inkSoft,
  fontSize: "1rem",
  lineHeight: 1.85,
  fontWeight: 300,
};

/** Adds the `is-visible` class once the element scrolls into view. */
export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}
