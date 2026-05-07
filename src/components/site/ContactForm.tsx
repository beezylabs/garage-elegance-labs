import { useState } from "react";
import { z } from "zod";
import { Loader2, Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte Namen angeben").max(100),
  phone: z.string().trim().min(4, "Bitte Telefonnummer angeben").max(40),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  message: z.string().trim().min(10, "Bitte kurz beschreiben (min. 10 Zeichen)").max(2000),
  // Honeypot
  company: z.string().max(0).optional(),
});

const TARGET_EMAIL = "hey@beezy-labs.com";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      company: String(fd.get("company") || ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setState("sending");
    const subject = `Anfrage von ${parsed.data.name}`;
    const body = `Name: ${parsed.data.name}\nTelefon: ${parsed.data.phone}\nE-Mail: ${parsed.data.email}\n\nNachricht:\n${parsed.data.message}`;
    const mailto = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      window.location.href = mailto;
      setState("sent");
    }, 500);
  }

  if (state === "sent") {
    return (
      <div className="border border-border bg-background p-12 text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 text-accent grid place-items-center">
          <Check size={26} />
        </div>
        <h3 className="font-display text-2xl mt-6">Vielen Dank!</h3>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Ihre E-Mail-App wurde geöffnet. Falls nicht, schreiben Sie uns gern direkt an{" "}
          <a className="text-accent" href={`mailto:${TARGET_EMAIL}`}>{TARGET_EMAIL}</a>.
        </p>
        <button onClick={() => setState("idle")} className="btn-ghost mt-8">
          Neue Nachricht
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-background p-8 md:p-10 grid gap-5">
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" error={errors.name} />
        <Field label="Telefonnummer" name="phone" type="tel" error={errors.phone} />
      </div>
      <Field label="E-Mail" name="email" type="email" error={errors.email} />
      <div>
        <label className="eyebrow block mb-3">Nachricht</label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-transparent border border-border focus:border-accent focus:outline-none px-4 py-3 text-base font-sans transition-colors resize-none"
          placeholder="Wie können wir helfen?"
        />
        {errors.message && <p className="mt-2 text-xs text-destructive font-mono">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-between gap-6 pt-2">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hidden md:block">
          → {TARGET_EMAIL}
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {state === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Senden...
            </>
          ) : (
            <>
              Nachricht senden <span>→</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border border-border focus:border-accent focus:outline-none px-4 py-3 text-base font-sans transition-colors"
      />
      {error && <p className="mt-2 text-xs text-destructive font-mono">{error}</p>}
    </div>
  );
}
