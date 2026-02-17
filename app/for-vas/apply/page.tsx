import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { Button } from "@/components/ui/button";
import { forVAsPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.apply.title,
  description: seo.apply.description,
};

export default function ApplyPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-xl">
        <div className="mb-8">
          <Link
            href="/for-vas"
            className="text-accent hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            ← Back to For VAs
          </Link>
        </div>
        <h1 className="text-3xl font-semibold text-primary mb-2">
          {forVAsPage.applyForm.title}
        </h1>
        <p className="text-primary/80 mb-10">
          Fill out the form below. We&apos;ll review and get back to you.
        </p>
        <ApplyForm />
      </div>
    </div>
  );
}
