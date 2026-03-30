"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 42,  suffix: "%", label: "Carbon Reduction" },
  { value: 184, suffix: "+", label: "Global Projects" },
  { value: 461, suffix: "M", label: "Saved In Revenue" },
  { value: 23,  suffix: "%", label: "Average Roi" },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) {
      setCount(0);
      return;
    }
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, triggered }: {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) {
  const count = useCountUp(value, 1800, triggered);
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-2px] font-medium">
        {count}{suffix}
      </span>
      <span className="text-base">{label}</span>
    </div>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
        } else {
          setTriggered(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-y-[50px] md:gap-x-[120px] md:gap-y-[70px] text-brand-accent"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} triggered={triggered} />
      ))}
    </div>
  );
}
