import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { T } from "./theme";

export function Modal({
  open,
  onClose,
  title,
  children,
  width = 960,
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="gk-backdrop" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="gk-modal" style={{ width: `min(${width}px, 100%)` }} onClick={(e) => e.stopPropagation()}>
        <div
          className="d-flex align-items-center justify-content-between px-4 py-3"
          style={{ borderBottom: `1px solid ${T.line}`, position: "sticky", top: 0, background: "#fff", zIndex: 2, borderRadius: "24px 24px 0 0" }}
        >
          <h3 style={{ fontFamily: T.serif, fontSize: "1.5rem", margin: 0, color: T.ink }}>{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="gk-ico"
            style={{ width: 40, height: 40, border: 0, borderRadius: 12 }}
          >
            <FiX />
          </button>
        </div>
        <div className="p-4 p-md-4">{children}</div>
      </div>
    </div>
  );
}
