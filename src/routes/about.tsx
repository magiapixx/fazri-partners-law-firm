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
      { title: "About — Fazri & Partners" },
      {
        name: "description",
        content: "Meet Fazri & Partners: an independent Jakarta law firm led by partners, founded in 2004.",
      },
      { property: "og:title", content: "About — Fazri & Partners" },
      {
        property: "og:description",
        content: "An independent Jakarta law firm led by partners, founded in 2004.",
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
    title: "Partner-led, always",
    text: "Every client works directly with a partner. Seniority isn't delegated away once the mandate is signed.",
  },
  {
    n: "02",
    title: "Clarity over complexity",
    text: "We translate law into decisions. Our advice is concise, candid and built around what you need to do next.",
  },
  {
    n: "03",
    title: "Integrity without exception",
    text: "We decline work that conflicts with our standards. Our reputation — and yours — depends on it.",
  },
];

const milestones = [
  { year: "2004", text: "Fazri Ramadhan founds the firm with three lawyers in Kuningan, Jakarta." },
  { year: "2011", text: "Disputes practice launched; first BANI award secured for a national contractor." },
  { year: "2017", text: "Banking & Finance group formed, including a dedicated Islamic finance desk." },
  { year: "2022", text: "Moved to Sequis Tower; team grows past 50 lawyers and specialists." },
  { year: "2026", text: "Named among Indonesia's leading independent firms for corporate and disputes work." },
];

function About() {
  return (
    <>
      <PageHero
        image={skyline}
        eyebrow="About the firm"
        title={
          <>
            Built on trust, <span className="italic">earned over decades.</span>
          </>
        }
      >
        <p>An independent Indonesian firm, founded in Jakarta in 2004 and shaped by the clients who stayed with us.</p>
      </PageHero>

      <section className="container-site grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel index="01">Our Story</SectionLabel>
          <h2 className="display-lg mt-6">
            Empowering clients with <span className="italic">considered counsel.</span>
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p className="lede text-foreground">
            Fazri &amp; Partners began with a simple conviction: that the best legal advice is personal, precise and
            commercially grounded.
          </p>
          <p>
            Two decades later that conviction still guides us. We have grown into a firm of more than sixty lawyers
            and specialists, yet we remain deliberately independent — free to put our clients' interests ahead of any
            network or referral obligation.
          </p>
          <p>
            Our clients include multinational corporations entering Indonesia, national champions expanding abroad,
            financial institutions, state-owned enterprises and families safeguarding what they have built.
          </p>
        </div>
      </section>

      <section className="container-site">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm md:aspect-[21/9]">
          <img
            src={boardroom}
            alt="Partners of Fazri & Partners reviewing documents"
            loading="lazy"
            width={1600}
            height={1072}
            className="h-full w-full object-cover"
          />
        </div>
        <dl className="grid grid-cols-2 border-b border-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-border py-10 pr-6 md:border-r md:pl-6 md:first:pl-0 md:last:border-r-0">
              <dd className="font-display text-4xl md:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-site py-24 md:py-32">
        <SectionLabel index="02">Our Values</SectionLabel>
        <h2 className="display-lg mt-6 max-w-2xl">
          What guides <span className="italic">every mandate.</span>
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.n} className="flex min-h-[280px] flex-col justify-between rounded-sm border border-border bg-card p-8">
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
              <SectionLabel index="03">Our People</SectionLabel>
              <h2 className="display-lg mt-6">
                Excellence through <span className="italic">teamwork.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              Our partners bring experience from leading international firms, in-house legal teams and the bench —
              united by a shared standard of care.
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
              <h3 className="font-display text-3xl">Join our team</h3>
              <p className="mt-2 text-sm opacity-75">We're always glad to meet exceptional lawyers and graduates.</p>
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
          <SectionLabel index="04">Milestones</SectionLabel>
          <h2 className="display-md mt-6">Twenty-two years in brief.</h2>
        </div>
        <ol className="border-t border-border">
          {milestones.map((m) => (
            <li key={m.year} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-6 border-b border-border py-7 md:grid-cols-[8rem_minmax(0,1fr)]">
              <span className="font-display text-3xl">{m.year}</span>
              <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-site py-24 text-center md:py-32">
          <p className="eyebrow text-ink-muted">Client voice</p>
          <blockquote className="display-md mx-auto mt-8 max-w-4xl">“{testimonials[1].quote}”</blockquote>
          <p className="mt-8 text-sm text-ink-muted">
            {testimonials[1].name} — {testimonials[1].company}
          </p>
          <ConsultationDialog>
            <Button variant="outlineLight" size="lg" className="mt-10">
              Work with us <ArrowUpRight />
            </Button>
          </ConsultationDialog>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
