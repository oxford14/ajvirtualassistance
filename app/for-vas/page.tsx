import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { forVAsPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.forVAs.title,
  description: seo.forVAs.description,
};

export default function ForVAsPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title={forVAsPage.title}
          subtitle={forVAsPage.subtitle}
        />

        <section className="mb-16">
          <p className="text-primary/90 leading-relaxed whitespace-pre-line">
            {forVAsPage.intro}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {forVAsPage.whatWeLookFor.title}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-primary/90">
            {forVAsPage.whatWeLookFor.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Application steps
          </h2>
          <ol className="space-y-4">
            {forVAsPage.applicationSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  {i + 1}
                </span>
                <p className="text-primary/90 pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="text-center">
          <Card className="border-accent/20 bg-background-muted">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {forVAsPage.cta.title}
              </h2>
              <Button asChild size="lg">
                <Link href={forVAsPage.cta.buttonHref}>
                  {forVAsPage.cta.buttonText}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
