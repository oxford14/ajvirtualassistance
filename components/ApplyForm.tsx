"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { forVAsPage } from "@/lib/content";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const fields = forVAsPage.applyForm.fields;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-background-muted p-6 text-center">
        <p className="text-primary font-medium">{forVAsPage.applyForm.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="va-name">{fields.name}</Label>
        <Input id="va-name" name="name" required aria-required="true" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="va-email">{fields.email}</Label>
        <Input id="va-email" name="email" type="email" required aria-required="true" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="va-experience">{fields.experience}</Label>
        <Textarea id="va-experience" name="experience" rows={4} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="va-message">{fields.message}</Label>
        <Textarea id="va-message" name="message" rows={4} />
      </div>
      <Button type="submit" size="lg">
        {forVAsPage.applyForm.submitLabel}
      </Button>
    </form>
  );
}
