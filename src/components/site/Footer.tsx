import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { firm, navItems, practices } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site pt-20 pb-10">
        <div className="grid gap-8 border-b border-ink-border pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="display-lg max-w-2xl">
            Nasihat hukum dengan <span className="italic">keyakinan.</span>
          </h2>
          <ConsultationDialog>
            <Button variant="hero" size="lg" className="w-fit">
              Percayakan kepada Kami <ArrowUpRight />
            </Button>
          </ConsultationDialog>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <div>
            <p className="eyebrow mb-5 text-ink-muted">Firma</p>
            <ul className="space-y-3 text-sm">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-ink-muted">Layanan</p>
            <ul className="space-y-3 text-sm">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link to="/what-we-do" className="link-underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-ink-muted">Kontak</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${firm.email}`} className="link-underline break-all">
                  {firm.email}
                </a>
              </li>
              <li>
                <a href={`tel:${firm.phone.replace(/\s/g, "")}`} className="link-underline">
                  {firm.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-ink-muted">Kantor</p>
            <p className="text-sm leading-relaxed text-ink-muted">{firm.address}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-ink-border pt-10 md:flex-row md:items-end md:justify-between">
          <p className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-tight">
            Fazri <span className="italic">&amp;</span> Partners
          </p>
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Fazri &amp; Partners. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
