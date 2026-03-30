"use client";

import Image from "next/image";

const descriptions: Record<string, string> = {
  "Data Centers": "Scalable infrastructure solutions tailored to cloud service.",
  "Cloud Infrastructure": "Reliable cloud platforms powering enterprise workloads.",
  "Energy": "Clean energy systems driving sustainable industrial growth.",
  "Renewables": "Next-generation renewable solutions for a greener future.",
};

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 6C12 6.133 11.947 6.26 11.854 6.354C11.76 6.447 11.633 6.5 11.5 6.5H6.5V11.5C6.5 11.633 6.447 11.76 6.354 11.854C6.26 11.947 6.133 12 6 12C5.867 12 5.74 11.947 5.646 11.854C5.553 11.76 5.5 11.633 5.5 11.5V6.5H0.5C0.367 6.5 0.24 6.447 0.146 6.354C0.053 6.26 0 6.133 0 6C0 5.867 0.053 5.74 0.146 5.646C0.24 5.553 0.367 5.5 0.5 5.5H5.5V0.5C5.5 0.367 5.553 0.24 5.646 0.146C5.74 0.053 5.867 0 6 0C6.133 0 6.26 0.053 6.354 0.146C6.447 0.24 6.5 0.367 6.5 0.5V5.5H11.5C11.633 5.5 11.76 5.553 11.854 5.646C11.947 5.74 12 5.867 12 6Z"
        fill="black"
      />
    </svg>
  );
}

export default function IndustryCard({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  const description = descriptions[name] || "Innovative solutions for modern industry.";

  return (
    <div className="group relative h-[474px] md:h-[526px] 2xl:h-[588px] cursor-pointer overflow-hidden">
      {/* Default state */}
      <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0">
        <div className="flex flex-col items-center gap-8">
          <Image src={icon} alt={name} width={75} height={75} />
          <span className="text-xl tracking-[-1px] text-center text-black">
            {name}
          </span>
        </div>
      </div>

      {/* Hover state — slides up from bottom */}
      <div className="absolute inset-0 bg-brand-accent flex flex-col justify-center px-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit bg-brand-primary text-brand-accent text-sm font-mono px-3 py-1.5 tracking-wide">
            OVERVIEW :
          </span>
          <p className="text-lg leading-6 text-black">
            {description}
          </p>
        </div>
      </div>

      {/* Plus button — always visible */}
      <button className="absolute top-4 right-4 bg-neutral-200 rounded-full p-2.5 z-10 transition-all duration-300 ease-in-out">
        <PlusIcon />
      </button>
    </div>
  );
}
