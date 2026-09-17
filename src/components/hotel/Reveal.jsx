import { useReveal } from "./theme";

const offsets = {
  up: "translate3d(0, 38px, 0)",
  left: "translate3d(-42px, 0, 0)",
  right: "translate3d(42px, 0, 0)",
  in: "translate3d(0, 0, 0) scale(0.97)",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  style,
  as: As = "div",
}) {
  const { ref, shown } = useReveal();

  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0,0,0) scale(1)" : offsets[direction],
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </As>
  );
}
