import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

import glass from "@/assets/practice-glass.jpg";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { expertise, practices } from "@/content/site";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Fazri & Partners" },
      {
        name: "description",
        content:
          "Corporate & M&A, litigation, banking & finance and real estate practices at Fazri & Partners, Jakarta.",
      },
      { property: "og:title", content: "What We Do — Fazri & Partners" },
      {
        property: "og:description",
        content: "Corporate & M&A, litigation, banking & finance and real estate legal services in Indonesia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhatWeDo,
});

const approach = [
  { n: "01", title: "Listen & assess", text: "We start with your objectives, risks and timeline — not with the law." },
  { n: "02", title: "Strategise", text: "A clear plan with options, costs and likely outcomes, agreed before work begins." },
  { n: "03", title: "Execute", text: "Partner-led delivery with a lean, accountable team and regular, plain-language updates." },
  { n: "04", title: "Stay alongside", text: "After closing or judgment, we remain your counsel for what comes next." },
];

function WhatWeDo() {
  return (
    <>
      <PageHero
        image={glass}
        eyebrow="What we do"
        title={
          <>
            Focused practices, <span className="italic">one standard.</span>
          </>
        }
      >
        <p>
          From boardroom to courtroom, we bring together specialists around each client's matter — so you receive
          joined-up advice, not departmental opinions.
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
              <span className="eyebrow text-muted-foreground">Practice 0{i + 1}</span>
              <h2 className="display-lg mt-5">{p.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{p.summary}</p>
              <ul className="mt-10 border-t border-border">
                {p.services.map((s) => (
                  <li key={s} className="flex items-center justify-between border-b border-border py-4 text-sm">
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
            <SectionLabel>Overview</SectionLabel>
            <h2 className="display-lg mx-auto mt-6 max-w-2xl">
              Overview &amp; <span className="italic">Expertise</span>
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
                        Practical, commercially minded advice on {item.toLowerCase()} — delivered by lawyers who know
                        the regulators and the market.
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
              <p className="eyebrow text-ink-muted">Our approach</p>
              <h2 className="display-lg mt-6">
                How we <span className="italic">work with you.</span>
              </h2>
            </div>
            <ConsultationDialog>
              <Button variant="hero" size="lg" className="w-fit md:justify-self-end">
                Start a conversation <ArrowUpRight />
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
