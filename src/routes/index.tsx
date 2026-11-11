import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

import hero from "@/assets/hero-office.jpg";
import fazriPortrait from "@/assets/team-fazri.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { caseStudies, insights, practices, stats, testimonials } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fazri & Partners — Nasihat Hukum dengan Keyakinan" },
      {
        name: "description",
        content:
          "Firma hukum Jakarta yang mendampingi perusahaan, investor, dan keluarga dalam perkara korporasi, sengketa, keuangan, dan properti.",
      },
      { property: "og:title", content: "Fazri & Partners — Nasihat Hukum dengan Keyakinan" },
      {
        property: "og:description",
        content:
          "Firma hukum Jakarta yang mendampingi klien dalam perkara korporasi, sengketa, keuangan, dan properti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = insights[0]!;
  const rest = insights.slice(1);
  return (
    <>
      <PageHero
        tall
        image={hero}
        eyebrow="Jakarta · Since 2004"
        title={
          <>
            Nasihat hukum dengan <span className="italic">keyakinan.</span>
          </>
        }
      >
        <p>
          Fazri &amp; Partners adalah firma hukum independen Indonesia yang mendampingi perusahaan,
          investor, dan keluarga dalam mengambil keputusan penting.
        </p>
        <Button asChild variant="line" className="mt-8 text-ink-foreground">
          <Link to="/what-we-do">
            Lihat layanan kami <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      {/* Intro statement */}
      <section className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_2fr]">
        <SectionLabel index="01">Firma Kami</SectionLabel>
        <div>
          <p className="lede">
            Kami mendampingi transaksi yang membentuk industri, sengketa yang menentukan reputasi,
            dan struktur yang dirancang bertahan lintas generasi — dengan kehati-hatian dan
            ketelitian yang diharapkan klien.
          </p>
          <div className="mt-10 grid gap-8 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>
              Rekan kami menangani setiap perkara secara langsung. Kami bekerja lintas bidang,
              membentuk tim yang tepat untuk setiap klien, dan mendampingi mereka sejak konsultasi
              pertama hingga penandatanganan akhir.
            </p>
            <p>
              Berbasis di Jakarta dan terhubung di seluruh Asia, kami memadukan pemahaman mendalam
              tentang hukum dan lembaga Indonesia dengan wawasan bisnis dari pengalaman di berbagai
              sisi transaksi.
            </p>
          </div>
          <Button asChild variant="ink" size="lg" className="mt-10">
            <Link to="/about">
              Tentang firma kami <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* What we do */}
      <section className="container-site pb-24 md:pb-32">
        <div className="grid gap-8 border-t border-border pt-12 md:grid-cols-2 md:items-end">
          <div>
            <SectionLabel index="02">Bidang Layanan</SectionLabel>
            <h2 className="display-lg mt-6">Layanan Kami</h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Empat bidang layanan utama yang didukung spesialis pajak, ketenagakerjaan, regulasi,
              dan layanan klien privat.
            </p>
            <Button asChild variant="line" className="mt-6">
              <Link to="/what-we-do">
                Semua layanan <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {practices.map((p, i) => (
            <Link
              key={p.slug}
              to="/what-we-do"
              className="group relative isolate block aspect-[3/4] overflow-hidden rounded-sm bg-ink text-ink-foreground"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="bg-tile-overlay absolute inset-0 -z-10" />
              <div className="flex h-full flex-col justify-between p-6">
                <span className="eyebrow text-ink-muted">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-ink-muted opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {p.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-secondary">
        <div className="container-site grid gap-12 py-24 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="03">Dalam Angka</SectionLabel>
            <h2 className="display-md mt-6 max-w-xs">Dua dekade dengan hasil nyata.</h2>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {stats.map((s) => (
              <div
                key={s.label}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-7"
              >
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-5xl md:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonial split */}
      <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 py-20 md:p-16 lg:p-24">
          <Quote className="h-10 w-10 text-accent" />
          <blockquote className="display-md mt-8">“{testimonials[0]!.quote}”</blockquote>
          <p className="mt-8 text-sm">
            {testimonials[0]!.name} <span className="opacity-60">— {testimonials[0]!.company}</span>
          </p>
        </div>
        <div className="relative min-h-[480px]">
          <img
            src={fazriPortrait}
            alt="Fazri Ramadhan, Rekan Pengelola"
            loading="lazy"
            width={768}
            height={960}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="bg-tile-overlay absolute inset-0" />
          <div className="absolute bottom-8 left-8 text-ink-foreground md:bottom-12 md:left-12">
            <p className="font-display text-3xl">Fazri Ramadhan</p>
            <p className="mt-1 text-sm text-ink-muted">Pendiri &amp; Rekan Pengelola</p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="container-site py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="04">Studi Kasus</SectionLabel>
            <h2 className="display-lg mt-6 max-w-2xl">
              Perkara nyata. <span className="italic">Hasil nyata.</span>
            </h2>
          </div>
          <Button asChild variant="ink" size="lg" className="w-fit">
            <Link to="/case-studies">
              Lihat semua <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((c, i) => (
            <Link
              key={c.slug}
              to="/case-studies"
              className={`group grid overflow-hidden rounded-sm sm:grid-cols-2 ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
              }`}
            >
              <div className="flex flex-col justify-between gap-10 p-8">
                <p className="eyebrow opacity-70">{c.practice}</p>
                <div>
                  <h3 className="font-display text-2xl leading-snug">{c.title}</h3>
                  <p className="mt-4 text-sm opacity-75">{c.outcome}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-b border-current pb-1 text-xs tracking-wide">
                    Baca studi kasus <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <div className="relative min-h-[260px] overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="bg-muted">
        <div className="container-site py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel index="05">Perspektif</SectionLabel>
              <h2 className="display-lg mt-6">Berita &amp; Wawasan</h2>
            </div>
            <Button asChild variant="line" className="w-fit">
              <Link to="/insight">
                Semua wawasan <ArrowRight />
              </Link>
            </Button>
          </div>

          <Link
            to="/insight"
            className="group mt-14 grid overflow-hidden rounded-sm bg-ink text-ink-foreground md:grid-cols-2"
          >
            <div className="relative min-h-[320px] overflow-hidden">
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
              <p className="eyebrow text-ink-muted">{featured.category}</p>
              <div>
                <h3 className="display-md">{featured.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">{featured.excerpt}</p>
                <p className="mt-8 text-xs text-ink-muted">
                  {featured.date} · {featured.readTime}
                </p>
              </div>
            </div>
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {rest.slice(0, 3).map((a) => (
              <Link key={a.slug} to="/insight" className="group block">
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
                <p className="eyebrow mt-5 text-muted-foreground">
                  {a.category} · {a.date}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug group-hover:underline">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
