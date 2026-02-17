import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials, caseSnapshots } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.testimonials.title,
  description: seo.testimonials.description,
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="Client feedback"
          subtitle="What businesses say about working with our Virtual Assistants."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              roleOrIndustry={t.roleOrIndustry}
              stars={t.stars}
            />
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-primary text-center mb-10">
            Case snapshots
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {caseSnapshots.map((snap, i) => (
              <Card key={i} className="border-accent/20">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">
                      Challenge
                    </h3>
                    <p className="text-primary/90 text-sm">{snap.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">
                      Solution
                    </h3>
                    <p className="text-primary/90 text-sm">{snap.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-1">
                      Outcome
                    </h3>
                    <p className="text-primary/90 text-sm">{snap.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
