import { SectionHeading } from "@/components/SectionHeading";
import { TaskCategoriesTabs } from "@/components/TaskCategoriesTabs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap } from "@/lib/icons";
import { howItWorksPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.howItWorks.title,
  description: seo.howItWorks.description,
};

export default function HowItWorksPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title={howItWorksPage.title}
          subtitle={howItWorksPage.subtitle}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {howItWorksPage.whatIsVA.title}
          </h2>
          <div className="prose prose-primary max-w-none text-primary/90 whitespace-pre-line">
            {howItWorksPage.whatIsVA.content}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">
            How Virtual Assistance Works
          </h2>
          <ol className="space-y-6">
            {howItWorksPage.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="text-primary/80 mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {howItWorksPage.taskCategories.title}
          </h2>
          <TaskCategoriesTabs tabs={howItWorksPage.taskCategories.tabs} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Tools we commonly use
          </h2>
          <div className="flex flex-wrap gap-4">
            {howItWorksPage.tools.map((tool) => {
              const Icon = iconMap[tool.icon];
              return (
                <Card key={tool.name} className="flex items-center gap-3 px-4 py-3">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <span className="font-medium text-primary">{tool.name}</span>
                </Card>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Frequently asked questions
          </h2>
          <FAQAccordion items={howItWorksPage.faq} />
        </section>
      </div>
    </div>
  );
}
