import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import boardroom from "@/assets/boardroom.jpg";
import skyline from "@/assets/jakarta-skyline.jpg";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { stats, team, testimonials } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Fazri & Partners" },
      {
        name: "description",
        content:
          "Kenali Fazri & Partners, firma hukum independen di Jakarta yang dipimpin para rekan dan berdiri sejak 2004.",
      },
      { property: "og:title", content: "Tentang Kami — Fazri & Partners" },
      {
        property: "og:description",
        content:
          "Firma hukum independen di Jakarta yang dipimpin para rekan dan berdiri sejak 2004.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    n: "01",
    title: "Selalu dipimpin rekan",
    text: "Setiap klien bekerja langsung dengan rekan firma. Keterlibatan senior tetap terjaga sejak penugasan dimulai.",
  },
  {
    n: "02",
    title: "Kejelasan, bukan kerumitan",
    text: "Kami menerjemahkan hukum menjadi langkah nyata. Nasihat kami ringkas, terbuka, dan berfokus pada tindakan selanjutnya.",
  },
  {
    n: "03",
    title: "Integritas tanpa kompromi",
    text: "Kami menolak pekerjaan yang bertentangan dengan standar kami. Reputasi kami — dan Anda — bergantung padanya.",
  },
];

const milestones = [
  {
    year: "2004",
    text: "Fazri Ramadhan mendirikan firma bersama tiga advokat di Kuningan, Jakarta.",
  },
  {
    year: "2011",
    text: "Praktik sengketa dibuka; putusan BANI pertama berhasil diperoleh untuk kontraktor nasional.",
  },
  {
    year: "2017",
    text: "Kelompok Perbankan & Keuangan dibentuk, termasuk tim khusus keuangan syariah.",
  },
  {
    year: "2022",
    text: "Pindah ke Sequis Tower; jumlah advokat dan spesialis melampaui 50 orang.",
  },
  {
    year: "2026",
    text: "Diakui sebagai salah satu firma independen terkemuka di Indonesia untuk praktik korporasi dan sengketa.",
  },
];

function About() {
  return (
    <>
      <PageHero
        image={skyline}
        eyebrow="Tentang Firma"
        title={
          <>
            Berlandaskan kepercayaan, <span className="italic">tumbuh selama puluhan tahun.</span>
          </>
        }
      >
        <p>
          Firma hukum independen Indonesia yang berdiri di Jakarta pada 2004 dan tumbuh bersama
          klien yang terus mempercayai kami.
        </p>
      </PageHero>

      <section className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel index="01">Kisah Kami</SectionLabel>
          <h2 className="display-lg mt-6">
            Mendampingi klien dengan <span className="italic">nasihat yang matang.</span>
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p className="lede text-foreground">
            Fazri &amp; Partners berawal dari keyakinan sederhana: nasihat hukum terbaik bersifat
            personal, tepat, dan berpijak pada pertimbangan bisnis.
          </p>
          <p>
            Dua dekade kemudian, keyakinan itu tetap menjadi pedoman kami. Kini kami memiliki lebih
            dari enam puluh advokat dan spesialis, namun tetap independen — mengutamakan kepentingan
            klien di atas jaringan atau kewajiban rujukan mana pun.
          </p>
          <p>
            Klien kami mencakup perusahaan multinasional yang masuk ke Indonesia, perusahaan
            nasional yang berekspansi ke luar negeri, lembaga keuangan, badan usaha milik negara,
            serta keluarga yang menjaga hasil kerja mereka.
          </p>
        </div>
      </section>

      <section className="container-site">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm md:aspect-[21/9]">
          <img
            src={boardroom}
            alt="Para rekan Fazri & Partners menelaah dokumen"
            loading="lazy"
            width={1600}
            height={1072}
            className="h-full w-full object-cover"
          />
        </div>
        <dl className="grid grid-cols-2 border-b border-border md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-border py-10 pr-6 md:border-r md:pl-6 md:first:pl-0 md:last:border-r-0"
            >
              <dd className="font-display text-4xl md:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-site py-24 md:py-32">
        <SectionLabel index="02">Nilai-Nilai Kami</SectionLabel>
        <h2 className="display-lg mt-6 max-w-2xl">
          Pedoman dalam <span className="italic">setiap penugasan.</span>
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.n}
              className="flex min-h-[280px] flex-col justify-between rounded-sm border border-border bg-card p-8"
            >
              <span className="font-display text-5xl text-muted-foreground">{v.n}</span>
              <div>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-site py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <SectionLabel index="03">Tim Kami</SectionLabel>
              <h2 className="display-lg mt-6">
                Keunggulan melalui <span className="italic">kerja sama.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              Para rekan kami berpengalaman di firma hukum internasional terkemuka, tim hukum
              internal, maupun pengadilan — dengan komitmen yang sama terhadap mutu layanan.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <article key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="eyebrow absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1.5 text-foreground">
                    {p.focus}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl">Bergabung dengan tim kami</h3>
              <p className="mt-2 text-sm opacity-75">
                Kami selalu terbuka untuk bertemu advokat dan lulusan berprestasi.
              </p>
            </div>
            <Button asChild variant="accent" size="lg" className="w-fit">
              <a href="mailto:careers@fazripartners.com">
                careers@fazripartners.com <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionLabel index="04">Tonggak Perjalanan</SectionLabel>
          <h2 className="display-md mt-6">Dua puluh dua tahun perjalanan kami.</h2>
        </div>
        <ol className="border-t border-border">
          {milestones.map((m) => (
            <li
              key={m.year}
              className="grid grid-cols-[5rem_minmax(0,1fr)] gap-6 border-b border-border py-7 md:grid-cols-[8rem_minmax(0,1fr)]"
            >
              <span className="font-display text-3xl">{m.year}</span>
              <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-site py-24 text-center md:py-32">
          <p className="eyebrow text-ink-muted">Kata Klien</p>
          <blockquote className="display-md mx-auto mt-8 max-w-4xl">
            “{testimonials[1]!.quote}”
          </blockquote>
          <p className="mt-8 text-sm text-ink-muted">
            {testimonials[1]!.name} — {testimonials[1]!.company}
          </p>
          <ConsultationDialog>
            <Button variant="outlineLight" size="lg" className="mt-10">
              Bekerja bersama kami <ArrowUpRight />
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
