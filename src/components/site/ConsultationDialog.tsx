import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { practices } from "@/content/site";

export function ConsultationForm({ onDone }: { onDone?: () => void }) {
  const [matter, setMatter] = useState(practices[0]?.title ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = String(new FormData(form).get("name") ?? "").trim();
    toast.success(`Terima kasih${name ? `, ${name}` : ""}.`, {
      description: "Tim kami akan menghubungi Anda dalam satu hari kerja.",
    });
    form.reset();
    onDone?.();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="c-name">Nama lengkap</Label>
          <Input id="c-name" name="name" required maxLength={100} className="h-11 rounded-sm" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input
            id="c-email"
            name="email"
            type="email"
            required
            maxLength={255}
            className="h-11 rounded-sm"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-company">Perusahaan (opsional)</Label>
        <Input id="c-company" name="company" maxLength={120} className="h-11 rounded-sm" />
      </div>
      <fieldset className="grid gap-2">
        <legend className="mb-2 text-sm font-medium">Bidang yang ingin dikonsultasikan</legend>
        <div className="flex flex-wrap gap-2">
          {practices.map((p) => (
            <button
              type="button"
              key={p.slug}
              onClick={() => setMatter(p.title)}
              aria-pressed={matter === p.title}
              className={
                matter === p.title
                  ? "rounded-full border border-primary bg-primary px-3 py-1.5 text-xs text-primary-foreground"
                  : "rounded-full border border-input px-3 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-foreground"
              }
            >
              {p.title}
            </button>
          ))}
        </div>
        <input type="hidden" name="matter" value={matter} />
      </fieldset>
      <div className="grid gap-2">
        <Label htmlFor="c-message">Apa yang dapat kami bantu?</Label>
        <Textarea
          id="c-message"
          name="message"
          required
          maxLength={2000}
          rows={4}
          className="rounded-sm"
        />
      </div>
      <Button type="submit" variant="ink" size="lg" className="w-full">
        Minta Konsultasi
      </Button>
      <p className="text-xs text-muted-foreground">
        Pertanyaan Anda bersifat rahasia. Pengiriman formulir ini tidak serta-merta membentuk
        hubungan advokat dan klien.
      </p>
    </form>
  );
}

export function ConsultationDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-sm sm:max-w-xl">
        <DialogHeader>
          <p className="eyebrow text-muted-foreground">Konsultasi pribadi</p>
          <DialogTitle className="font-display text-3xl font-normal">
            Berkonsultasi dengan rekan kami
          </DialogTitle>
          <DialogDescription>
            Ceritakan secara singkat kebutuhan Anda. Kami akan merespons setiap pertanyaan dalam
            satu hari kerja.
          </DialogDescription>
        </DialogHeader>
        <ConsultationForm onDone={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
