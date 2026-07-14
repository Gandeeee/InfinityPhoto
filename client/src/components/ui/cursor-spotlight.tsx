import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed inset-0 z-30"
      style={
        {
          "--x": "50%",
          "--y": "50%",
          background:
            "radial-gradient(550px circle at var(--x) var(--y), hsla(var(--primary) / 0.045), transparent 72%)",
        } as React.CSSProperties
      }
    />
  );
}
