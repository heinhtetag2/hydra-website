"use client";

import Image from "next/image";

// Desktop: percentage positions relative to 1100×570 container
// Mobile: pixel offsets from center of the map interactive area (Figma: 356×372)
const pins = [
  {
    name: "LOS ANGELES",
    desktopTop: "50%",   desktopLeft: "16.8%",
    mobilePin:   { x: -142, y: -26 },
    mobileLabel: { x: -134, y: -62 },
  },
  {
    name: "DUBLIN",
    desktopTop: "31.9%", desktopLeft: "45%",
    mobilePin:   { x: -16,  y: -51 },
    mobileLabel: { x: -23,  y: -85 },
  },
  {
    name: "ALGERIA",
    desktopTop: "57%",   desktopLeft: "45%",
    mobilePin:   { x: -45,  y: 14  },
    mobileLabel: { x: -48.5, y: -26 },
  },
  {
    name: "MOSCOW",
    desktopTop: "33.5%", desktopLeft: "60%",
    mobilePin:   { x: 72,   y: -58 },
    mobileLabel: { x: 123,  y: -57 },
  },
  {
    name: "PERTH",
    desktopTop: "85%",   desktopLeft: "79%",
    mobilePin:   { x: 123,  y: 57  },
    mobileLabel: { x: 112,  y: 15  },
  },
];

export default function WorldMap() {
  return (
    <>
      {/* ── Mobile map (below md) ── */}
      <div className="md:hidden relative w-full h-[372px] overflow-hidden">
        {/* Map image: 400px wide, centered, clipped */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[400px] h-full flex items-center justify-center">
            <Image
              src="/images/world-map.svg"
              alt="World map showing global impact"
              width={400}
              height={207}
              className="object-contain"
            />
          </div>
        </div>

        {/* Interactive overlay: pins + labels at calc(50% ± px) */}
        <div className="absolute inset-0">
          {pins.map((pin) => (
            <div key={pin.name}>
              {/* Pin dot — 24px */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brand-accent rounded-full shadow-lg flex items-center justify-center"
                style={{
                  left: `calc(50% + ${pin.mobilePin.x}px)`,
                  top:  `calc(50% + ${pin.mobilePin.y}px)`,
                }}
              >
                <div className="w-[4.5px] h-[4.5px] bg-black rounded-[1px]" />
              </div>

              {/* Label badge — always visible */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-neutral-100 px-2.5 py-1.5 whitespace-nowrap"
                style={{
                  left: `calc(50% + ${pin.mobileLabel.x}px)`,
                  top:  `calc(50% + ${pin.mobileLabel.y}px)`,
                }}
              >
                <span className="text-[11px] font-mono text-black tracking-wide leading-none">
                  {pin.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop map (md+) ── */}
      <div className="hidden md:block relative w-full max-w-[1100px] h-[570px]">
        <Image
          src="/images/world-map.svg"
          alt="World map showing global impact"
          fill
          className="object-contain"
        />
        {pins.map((pin) => (
          <div
            key={pin.name}
            className="absolute group -translate-x-1/2 -translate-y-1/2"
            style={{ top: pin.desktopTop, left: pin.desktopLeft }}
          >
            {/* Label badge — hover only on desktop */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none">
              <span className="bg-neutral-200 text-black text-xs font-mono px-2 py-1 whitespace-nowrap tracking-wide">
                {pin.name}
              </span>
            </div>
            {/* Pin dot — 32px on desktop */}
            <div className="w-8 h-8 bg-brand-accent rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
              <div className="w-1.5 h-1.5 bg-black rounded-sm" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
