"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-background-muted p-6 text-center">
        <p className="text-primary font-medium">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-name">{nameLabel}</Label>
        <Input id="contact-name" name="name" required aria-required="true" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">{emailLabel}</Label>
        <Input id="contact-email" name="email" type="email" required aria-required="true" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-company">{companyLabel}</Label>
        <Input id="contact-company" name="company" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">{messageLabel}</Label>
        <Textarea id="contact-message" name="message" rows={5} required aria-required="true" />
      </div>
      <Button type="submit" size="lg">
        {submitLabel}
      </Button>
    </form>
  );
}
