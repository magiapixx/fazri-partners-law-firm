import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

import glass from "@/assets/practice-glass.jpg";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { expertise, practices } from "@/content/site";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "Layanan Kami — Fazri & Partners" },
      {
        name: "description",
        content:
          "Layanan korporasi & M&A, litigasi, perbankan & keuangan, serta properti di Fazri & Partners, Jakarta.",
      },
      { property: "og:title", content: "Layanan Kami — Fazri & Partners" },
      {
        property: "og:description",
        content:
          "Layanan hukum korporasi & M&A, litigasi, perbankan & keuangan, serta properti di Indonesia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

const approach = [
  {
    n: "01",
    title: "Mendengar & mengkaji",
    text: "Kami mulai dengan memahami tujuan, risiko, dan tenggat Anda — bukan langsung membahas hukum.",
  },
  {
    n: "02",
    title: "Menyusun strategi",
    text: "Rencana yang jelas, lengkap dengan pilihan, biaya, dan kemungkinan hasil, disepakati sebelum pekerjaan dimulai.",
  },
  {
    n: "03",
    title: "Melaksanakan",
    text: "Penanganan langsung oleh rekan dengan tim yang sigap dan bertanggung jawab, disertai kabar rutin dalam bahasa yang mudah dipahami.",
  },
  {
    n: "04",
    title: "Terus mendampingi",
    text: "Setelah transaksi atau putusan, kami tetap menjadi penasihat Anda untuk langkah berikutnya.",
  },
];

function WhatWeDo() {
  return (
    <>
      <PageHero
        image={glass}
        eyebrow="Layanan Kami"
        title={
          <>
            Bidang layanan terarah, <span className="italic">satu standar.</span>
          </>
        }
      >
        <p>
          Dari ruang rapat hingga ruang sidang, kami menghimpun para spesialis sesuai kebutuhan
          setiap klien — agar Anda memperoleh nasihat terpadu, bukan pandangan yang terpisah-pisah.
        </p>
      </PageHero>

      <section className="container-site py-24 md:py-32">
        {practices.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid gap-10 border-t border-border py-14 first:border-t-0 first:pt-0 lg:grid-cols-[5fr_7fr] lg:gap-16"
          >
            <div className={`overflow-hidden rounded-sm ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={768}
                height={1024}
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-[4/5]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="eyebrow text-muted-foreground">Layanan 0{i + 1}</span>
              <h2 className="display-lg mt-5">{p.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <ul className="mt-10 border-t border-border">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-center justify-between border-b border-border py-4 text-sm"
                  >
                    {s}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="container-site py-24 md:py-32">
          <div className="text-center">
            <SectionLabel>Gambaran Umum</SectionLabel>
            <h2 className="display-lg mx-auto mt-6 max-w-2xl">
              Gambaran Umum &amp; <span className="italic">Keahlian</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {expertise.map((g) => (
              <div key={g.group}>
                <p className="eyebrow mb-4 text-muted-foreground">{g.group}</p>
                <Accordion type="single" collapsible className="border-t border-border">
                  {g.items.map((item) => (
                    <AccordionItem key={item} value={item} className="border-border">
                      <AccordionTrigger className="py-4 text-sm font-normal hover:no-underline [&>svg]:hidden">
                        <span>{item}</span>
                        <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 [[data-state=open]_&]:rotate-45" />
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        Nasihat praktis dan berorientasi bisnis mengenai {item.toLowerCase()} —
                        diberikan oleh advokat yang memahami regulator dan kondisi pasar.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-site py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-ink-muted">Pendekatan Kami</p>
              <h2 className="display-lg mt-6">
                Cara kami <span className="italic">bekerja bersama Anda.</span>
              </h2>
            </div>
            <ConsultationDialog>
              <Button variant="hero" size="lg" className="w-fit md:justify-self-end">
                Mulai percakapan <ArrowUpRight />
              </Button>
            </ConsultationDialog>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <div key={a.n} className="flex min-h-[260px] flex-col justify-between bg-ink p-8">
                <span className="font-display text-5xl text-accent">{a.n}</span>
                <div>
                  <h3 className="font-display text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
