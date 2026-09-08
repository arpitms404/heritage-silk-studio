import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(38px)",
        transition: `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div className="text-center">
      {kicker ? (
        <p className="text-[0.65rem] tracking-[0.4em] text-bordeaux/60">{kicker}</p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl font-light text-wine sm:text-5xl">
        <span className="text-shimmer">{title}</span>
      </h2>
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
        <span className="text-gold">✦</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
      </div>
    </div>
  );
}
