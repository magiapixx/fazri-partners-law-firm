import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  children,
  tall = false,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative isolate flex overflow-hidden bg-ink text-ink-foreground ${
        tall ? "min-h-[100svh]" : "min-h-[72svh]"
      }`}
    >
      <img
        src={image}
        alt=""
        width={1920}
        height={1080}
        className="animate-slow-zoom absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="container-site flex flex-col justify-end pt-32 pb-16 md:pb-24">
        {eyebrow && <p className="eyebrow animate-rise mb-6 text-ink-muted">{eyebrow}</p>}
        <h1 className={`animate-rise max-w-4xl ${tall ? "display-xl" : "display-lg"}`}>{title}</h1>
        {children && (
          <div className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ink-muted [animation-delay:150ms]">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionLabel({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-muted-foreground">
      {index && <span className="text-foreground">{index}</span>}
      <span className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}
