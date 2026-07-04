"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactInputSchema, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; fieldErrors?: Record<string, string> };

export function ContactForm() {
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactInputSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const fieldErrors = state.kind === "error" ? (state.fieldErrors ?? {}) : {};

  async function onSubmit(values: ContactInput) {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok || !data.ok) {
        setState({
          kind: "error",
          message: data.error ?? "Something went wrong. Please try again.",
          fieldErrors: data.fieldErrors,
        });
        return;
      }

      reset();
      setState({ kind: "success" });
    } catch {
      setState({
        kind: "error",
        message:
          "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <div
        className="bg-success-bg mt-8 flex flex-col items-center gap-3 rounded-2xl p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle className="text-success h-10 w-10" aria-hidden="true" />
        <h3 className="text-success text-lg font-semibold">Message sent!</h3>
        <p className="text-fg-tertiary max-w-md text-sm">
          We&apos;ll get back to you within 24 hours. For a faster response, WhatsApp us
          directly — we usually reply within minutes during business hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => setState({ kind: "idle" })}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const topLevelError =
    state.kind === "error" && !state.fieldErrors ? state.message : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 space-y-5"
      noValidate
      aria-label="Contact form"
    >
      {topLevelError && (
        <div
          role="alert"
          className="border-error/30 bg-error-bg text-error flex items-start gap-2 rounded-xl border p-4 text-sm"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{topLevelError}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          required
          error={errors.name?.message ?? fieldErrors.name}
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputCls(Boolean(errors.name))}
            placeholder="Your full name"
            {...register("name")}
          />
        </Field>
        <Field
          id="email"
          label="Email"
          required
          error={errors.email?.message ?? fieldErrors.email}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputCls(Boolean(errors.email))}
            placeholder="you@example.com"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label="Phone number"
          hint="Optional — for a faster WhatsApp reply"
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputCls(Boolean(errors.phone))}
            placeholder="+91 98765 43210"
            {...register("phone")}
          />
        </Field>
        <Field
          id="company"
          label="Brokerage / Company"
          hint="Optional"
          error={errors.company?.message}
        >
          <input
            id="company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={inputCls(Boolean(errors.company))}
            placeholder="Your brokerage name"
            {...register("company")}
          />
        </Field>
      </div>

      <Field
        id="message"
        label="Message"
        required
        error={errors.message?.message ?? fieldErrors.message}
      >
        <textarea
          id="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputCls(Boolean(errors.message)), "resize-y")}
          placeholder="Tell us about your brokerage — how many brokers, which cities, what you're using today…"
          {...register("message")}
        />
      </Field>

      <p className="text-fg-muted text-xs">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-fg underline underline-offset-4 hover:opacity-70">
          privacy policy
        </a>
        . We never share your details with third parties.
      </p>

      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={isSubmitting}
        className="w-full gap-2 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}

// ─── Small presentational helpers (kept local so the file stays self-contained) ──

function inputCls(hasError: boolean) {
  return cn(
    "bg-bg text-fg placeholder:text-fg-muted mt-1.5 block w-full rounded-xl border px-4 py-2.5 text-sm transition-colors",
    "focus:ring-2 focus:outline-none",
    hasError
      ? "border-error focus:border-error focus:ring-error/20"
      : "border-border focus:border-fg focus:ring-fg/10"
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-fg block text-sm font-medium">
        {label}
        {required && (
          <span className="text-error ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="text-fg-muted mt-1 text-xs">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-error mt-1 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
