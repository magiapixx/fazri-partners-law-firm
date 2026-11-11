import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import columns from "@/assets/practice-columns.jpg";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { insights, type Insight } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insight")({
  head: () => ({
    meta: [
      { title: "Wawasan — Fazri & Partners" },
      {
        name: "description",
        content:
          "Analisis hukum, pembaruan regulasi, dan kabar firma mengenai hukum Indonesia dari Fazri & Partners.",
      },
      { property: "og:title", content: "Wawasan — Fazri & Partners" },
      {
        property: "og:description",
        content: "Analisis hukum, pembaruan regulasi, dan kabar firma mengenai hukum Indonesia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightPage,
});

const categories: Array<"Semua" | Insight["category"]> = [
  "Semua",
  "Analisis",
  "Pembaruan Regulasi",
  "Kabar Firma",
];

function InsightPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const list = active === "Semua" ? insights : insights.filter((i) => i.category === active);
  const [featured, ...rest] = list;

  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Anda berhasil berlangganan.", {
      description: "Buletin kami berikutnya akan dikirim ke email Anda.",
    });
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        image={columns}
        eyebrow="Wawasan"
        title={
          <>
            Perspektif tentang <span className="italic">hukum Indonesia.</span>
          </>
        }
      >
        <p>
          Analisis, pembaruan regulasi, dan kabar dari para rekan kami — ditulis untuk pengambil
          keputusan, bukan hanya praktisi hukum.
        </p>
      </PageHero>

      <section className="container-site py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <SectionLabel>Terbaru</SectionLabel>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Saring berdasarkan kategori"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs tracking-wide transition-colors",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <article className="group mt-12 grid overflow-hidden rounded-sm bg-ink text-ink-foreground md:grid-cols-[3fr_2fr]">
            <div className="relative min-h-[340px] overflow-hidden">
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                width={1600}
                height={1072}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
              <span className="eyebrow w-fit rounded-full bg-accent px-3 py-1.5 text-accent-foreground">
                {featured.category}
              </span>
              <div>
                <h2 className="display-md">{featured.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">{featured.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted">
                  <span>Oleh {featured.author}</span>
                  <span>
                    {featured.date} · {featured.readTime}
                  </span>
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <article key={a.slug} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={a.image}
                  alt=""
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="eyebrow text-muted-foreground">{a.category}</span>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 border-b border-current pb-1 text-xs tracking-wide">
                Baca · {a.readTime}{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-12 text-muted-foreground">Belum ada artikel dalam kategori ini.</p>
        )}
      </section>

      <section className="container-site pb-24">
        <div className="grid gap-10 rounded-sm bg-accent p-8 text-accent-foreground md:p-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow opacity-70">Buletin Fazri</p>
            <h2 className="display-md mt-5">
              Wawasan bulanan, <span className="italic">langsung ke kotak masuk Anda.</span>
            </h2>
            <p className="mt-4 text-sm opacity-75">
              Perubahan regulasi dan analisis pasar. Ringkas dan relevan; berhenti berlangganan
              kapan saja.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Alamat email
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              maxLength={255}
              placeholder="Email kantor Anda"
              className="h-12 rounded-sm border-accent-foreground/30 bg-background"
            />
            <Button type="submit" variant="ink" size="lg">
              Berlangganan
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
