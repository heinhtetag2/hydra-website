"use client";

import { useEffect, useRef } from "react";

const DARK = "#122023";
const LIGHT = "#e1fcad";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let currentColor = DARK;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      // Detect if over a dark background section
      const target = e.target as HTMLElement;
      const onDark = !!target.closest("[data-cursor='light']");
      const newColor = onDark ? LIGHT : DARK;

      if (newColor !== currentColor) {
        currentColor = newColor;
        dot.style.backgroundColor = newColor;
        ring.style.borderColor = newColor;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], .group, .cursor-pointer")
      ) {
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.marginLeft = "-8px";
        ring.style.marginTop = "-8px";
        ring.style.backgroundColor =
          currentColor === LIGHT
            ? "rgba(225, 252, 173, 0.15)"
            : "rgba(18, 32, 35, 0.1)";
      }
    };

    const onMouseOut = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.marginLeft = "0px";
      ring.style.marginTop = "0px";
      ring.style.backgroundColor = "transparent";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: DARK,
          transition: "background-color 0.3s ease",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1.5px solid ${DARK}`,
          backgroundColor: "transparent",
          transition:
            "width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
        }}
      />
    </>
  );
}
