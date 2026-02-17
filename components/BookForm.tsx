"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bookingPage } from "@/lib/content";

type BookFormProps = {
  onContinue?: (name: string, company: string) => void;
  /** When true, show the "Choose date & time" button and call onContinue on submit. When false, only show name and company fields. */
  showContinueButton?: boolean;
};

export function BookForm({ onContinue, showContinueButton = true }: BookFormProps) {
  const { form } = bookingPage;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (onContinue) {
      onContinue(name.trim(), company.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="book-name">{form.nameLabel}</Label>
        <Input
          id="book-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={showContinueButton}
          aria-required={showContinueButton}
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="book-company">{form.companyLabel}</Label>
        <Input
          id="book-company"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Your company"
        />
      </div>
      {showContinueButton && (
        <Button type="submit" size="lg" className="w-full md:w-auto">
          {form.continueButtonText}
        </Button>
      )}
    </form>
  );
}
