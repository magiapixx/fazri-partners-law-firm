import { Check } from "lucide-react";

import boardroom from "@/assets/boardroom.jpg";
import { ConsultationForm } from "@/components/site/ConsultationDialog";
import { firm } from "@/content/site";

export function CtaBand() {
  return (
    <section className="container-site py-24">
      <div className="grid overflow-hidden rounded-xl bg-ink text-ink-foreground shadow-soft lg:grid-cols-2">
        <div className="relative isolate flex min-h-[420px] flex-col justify-between p-8 md:p-12">
          <img
            src={boardroom}
            alt="Para advokat Fazri & Partners sedang berdiskusi"
            loading="lazy"
            width={1600}
            height={1072}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="bg-side-overlay absolute inset-0 -z-10" />
          <div>
            <p className="eyebrow text-ink-muted">Berkonsultasi dengan advokat</p>
            <h2 className="display-md mt-5 max-w-md">
              Konsultasi pertama Anda <span className="italic">bersifat rahasia</span> dan tanpa
              kewajiban.
            </h2>
          </div>
          <ul className="mt-10 space-y-3 text-sm">
            {[
              "Respons dalam satu hari kerja",
              "Didampingi rekan sejak pertemuan pertama",
              "Bahasa Indonesia, Inggris & Jepang",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-muted">
            Atau hubungi kami langsung — <span className="text-ink-foreground">{firm.phone}</span>
          </p>
        </div>
        <div className="bg-card p-8 text-card-foreground md:p-12">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
