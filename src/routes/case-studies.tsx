import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import stairs from "@/assets/practice-stairs.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { caseStudies, practices } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Studi Kasus — Fazri & Partners" },
      {
        name: "description",
        content:
          "Pilihan transaksi, arbitrase, dan restrukturisasi yang ditangani Fazri & Partners.",
      },
      { property: "og:title", content: "Studi Kasus — Fazri & Partners" },
      {
        property: "og:description",
        content:
          "Pilihan transaksi, arbitrase, dan restrukturisasi yang ditangani Fazri & Partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

const filters = [
  { label: "Semua", value: "Semua" },
  ...practices.map((p) => ({ label: p.title, value: p.title })),
];

function CaseStudies() {
  const [active, setActive] = useState("Semua");
  const list = active === "Semua" ? caseStudies : caseStudies.filter((c) => c.practice === active);
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero
        image={stairs}
        eyebrow="Studi Kasus"
        title={
          <>
            Perkara nyata, <span className="italic">hasil nyata.</span>
          </>
        }
      >
        <p>
          Berikut beberapa penugasan yang dapat kami bagikan. Nama klien dirahasiakan untuk menjaga
          kewajiban kerahasiaan kami.
        </p>
      </PageHero>

      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <SectionLabel>{list.length} perkara</SectionLabel>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Saring berdasarkan bidang layanan"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={active === f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs tracking-wide transition-colors",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <article className="mt-12 grid overflow-hidden rounded-sm bg-primary text-primary-foreground lg:grid-cols-2">
            <div className="relative min-h-[320px]">
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                width={1600}
                height={1072}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between gap-12 p-8 md:p-12">
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow opacity-70">{featured.practice}</span>
                <span className="eyebrow opacity-70">{featured.year}</span>
              </div>
              <div>
                <h2 className="display-md">{featured.title}</h2>
                <p className="mt-5 text-sm leading-relaxed opacity-75">{featured.summary}</p>
                <dl className="mt-10 grid gap-6 border-t border-primary-foreground/20 pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow opacity-60">Klien</dt>
                    <dd className="mt-2 text-sm">{featured.client}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow opacity-60">Hasil</dt>
                    <dd className="mt-2 font-display text-xl text-accent">{featured.outcome}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-muted-foreground">{c.practice}</span>
                  <span className="eyebrow text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-snug">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <div className="mt-auto flex items-end justify-between gap-6 border-t border-border pt-6 [margin-top:max(2rem,auto)]">
                  <div>
                    <p className="eyebrow text-muted-foreground">Hasil</p>
                    <p className="mt-2 font-display text-lg">{c.outcome}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
