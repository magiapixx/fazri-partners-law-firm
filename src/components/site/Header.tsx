import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "border-b border-border bg-background/95 text-foreground backdrop-blur"
          : "border-b border-transparent bg-transparent text-ink-foreground",
      )}
    >
      <div className="container-site grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="min-w-0 truncate font-display text-2xl tracking-tight" onClick={() => setOpen(false)}>
          Fazri <span className="italic">&amp;</span> Partners
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[0.8125rem] tracking-wide opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "opacity-100! bg-[length:100%_1px]!" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <ConsultationDialog>
            <Button variant={solid ? "ink" : "hero"} size="sm" className="hidden rounded-sm px-4 sm:inline-flex">
              Book a Consultation
            </Button>
          </ConsultationDialog>
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-site flex flex-col py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl"
                activeProps={{ className: "italic" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <ConsultationDialog>
              <Button variant="ink" size="lg" className="mt-6">
                Book a Consultation
              </Button>
            </ConsultationDialog>
          </nav>
        </div>
      )}
    </header>
  );
}
