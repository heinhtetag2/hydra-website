"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.463 12.55V5.878L3.596 12.744L2.269 11.417L9.162 4.525H2.462L4.073 2.915L12.073 2.928V10.941L10.463 12.55Z" fill="currentColor" />
    </svg>
  );
}

const projects = [
  { name: "SubstainPath", image: "/images/project-1.jpg" },
  { name: "PurePower", image: "/images/project-2.jpg" },
  { name: "EnergyOptix", image: "/images/project-3.jpg" },
  { name: "SubstainPath", image: "/images/project-1.jpg" },
  { name: "PurePower", image: "/images/project-2.jpg" },
];

const CARD_WIDTH = 612;
const CARD_GAP = 8;

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = projects.length;

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.min(index, totalDots - 1));
  }, [totalDots]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex);
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollTo = (direction: "prev" | "next") => {
    if (!scrollRef.current) return;
    const amount = direction === "next" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP);
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="px-4 2xl:px-[60px] pt-24 pb-3">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[40px] leading-[48px] tracking-[-2px]">Recent Projects</h2>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollTo("prev")}
              className="w-[42px] h-[42px] rounded-sm bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition"
            >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M24.5 14L17.5 21L24.5 28" stroke="black" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("next")}
              className="w-[42px] h-[42px] rounded-sm bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition"
            >
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M17.5 14L24.5 21L17.5 28" stroke="black" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards + Controls */}
        <div className="flex flex-col gap-5">
          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, i) => (
              <div key={i} className="relative flex-shrink-0 w-[340px] md:w-[612px] h-[384px] group cursor-pointer overflow-hidden">
                <Image src={project.image} alt={project.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                <span className="absolute bottom-7 left-4 text-white text-lg">{project.name}</span>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="group/btn inline-flex items-center cursor-pointer">
                    <span className="bg-white/10 backdrop-blur-sm text-white group-hover/btn:bg-white/20 h-10 flex items-center justify-center px-4 rounded-full text-base whitespace-nowrap transition-all duration-300 ease-in-out">
                      View Project
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm text-white group-hover/btn:bg-white/20 h-[38px] w-[38px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom controls */}
          <div className="flex items-start gap-12">
            <div className="group/vw inline-flex items-center cursor-pointer">
              <span className="bg-brand-primary text-brand-accent-muted group-hover/vw:bg-brand-accent-muted group-hover/vw:text-black h-10 flex items-center justify-center px-4 rounded-full text-base whitespace-nowrap transition-all duration-300 ease-in-out">
                View All
              </span>
              <span className="bg-brand-primary text-brand-accent-muted group-hover/vw:bg-brand-accent-muted group-hover/vw:text-black h-[38px] w-[38px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <ArrowIcon className="w-4 h-4" />
              </span>
            </div>
            <div className="flex-1 flex justify-center items-center h-[30px]">
              <div className="flex items-center gap-0">
                {Array.from({ length: totalDots }).map((_, i) => (
                  <button
                    key={i}
                    className="px-0.5"
                    onClick={() => {
                      scrollRef.current?.scrollTo({
                        left: i * (CARD_WIDTH + CARD_GAP),
                        behavior: "smooth",
                      });
                    }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIndex ? "bg-black" : "bg-black/30"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
