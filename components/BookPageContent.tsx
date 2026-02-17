"use client";

import { BookForm } from "@/components/BookForm";
import { CalComInlineEmbed } from "@/components/CalComInlineEmbed";

export function BookPageContent() {
  return (
    <div className="space-y-8">
      <BookForm showContinueButton={false} />

      <div className="mt-6">
        <p className="text-sm text-primary/70 mb-4">
          Select a date and time below. We’ll send a calendar invite to your email.
        </p>
        <CalComInlineEmbed />
      </div>
    </div>
  );
}
