"use client";

import Image from "next/image";
import { useState } from "react";

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.463 12.55V5.878L3.596 12.744L2.269 11.417L9.162 4.525H2.462L4.073 2.915L12.073 2.928V10.941L10.463 12.55Z" fill="currentColor" />
    </svg>
  );
}

const navLinks = [
  { label: "Projects" },
  { label: "Company", hasArrow: true },
  { label: "Solutions" },
  { label: "News" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile bar */}
      <div className="md:hidden flex items-center justify-between bg-neutral-100 rounded-sm h-[60px] px-4 w-full">
        <Image src="/images/logo.svg" alt="Hydra" width={69} height={21} />
        <button
          className="w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-5 h-[2px] bg-black" />
          <span className="w-5 h-[2px] bg-black" />
        </button>
      </div>

      {/* Overlay */}
      <div
        data-cursor="light"
        className={`fixed inset-0 z-50 bg-brand-primary flex flex-col transition-all duration-500 ease-in-out md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between h-[60px] px-4 flex-shrink-0">
          <Image src="/images/logo.svg" alt="Hydra" width={69} height={21} className="brightness-0 saturate-100" style={{ filter: "brightness(0) saturate(100%) invert(96%) sepia(17%) saturate(606%) hue-rotate(40deg) brightness(104%) contrast(95%)" }} />
          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="#e1fcad" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mx-4" />

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center justify-between py-5 border-b border-white/10 group"
              onClick={() => setOpen(false)}
            >
              <span className="text-brand-accent text-[32px] leading-[40px] tracking-[-1px] transition-opacity duration-200 group-hover:opacity-70">
                {link.label}
              </span>
              <ArrowIcon className="w-5 h-5 text-brand-accent opacity-40 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          ))}
        </nav>

        {/* Contact Us button */}
        <div className="px-6 pb-12 flex-shrink-0">
          <button className="w-full h-[52px] bg-brand-accent text-black font-mono text-sm uppercase tracking-wide rounded-full flex items-center justify-center gap-2 hover:bg-brand-accent-muted transition-colors duration-200">
            Contact Us
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
