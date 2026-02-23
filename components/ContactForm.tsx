"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  companyLabel: string;
  messageLabel: string;
  submitLabel: string;
  successMessage: string;
}

export function ContactForm({
  nameLabel,
  emailLabel,
  companyLabel,
  messageLabel,
  submitLabel,
  successMessage,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-5">
          <CheckCircle className="h-8 w-8" />
        </div>
        <p className="text-xl font-semibold text-primary mb-2">Message sent!</p>
        <p className="text-primary/70 leading-relaxed max-w-sm">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{nameLabel}</Label>
          <Input id="contact-name" name="name" placeholder="John Doe" required aria-required="true" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{emailLabel}</Label>
          <Input id="contact-email" name="email" type="email" placeholder="john@example.com" required aria-required="true" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-company">{companyLabel}</Label>
        <Input id="contact-company" name="company" placeholder="Your company name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">{messageLabel}</Label>
        <Textarea id="contact-message" name="message" rows={5} placeholder="Tell us about your project or how we can help..." required aria-required="true" />
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm text-red-600" role="alert">{error}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
        {sending ? "Sending\u2026" : submitLabel}
      </Button>
    </form>
  );
}
