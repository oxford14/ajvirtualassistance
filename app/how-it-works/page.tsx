import { SectionHeading } from "@/components/SectionHeading";
import { TaskCategoriesTabs } from "@/components/TaskCategoriesTabs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { AnimateIn } from "@/components/AnimateIn";
import { iconMap } from "@/lib/icons";
import { howItWorksPage, seo } from "@/lib/content";
import { Phone, Users, UserCheck, Rocket } from "lucide-react";

export const metadata = {
  title: seo.howItWorks.title,
  description: seo.howItWorks.description,
};

const stepIcons = [Phone, Users, UserCheck, Rocket];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background-muted to-background">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            title={howItWorksPage.title}
            subtitle={howItWorksPage.subtitle}
          />
        </div>
      </section>

      {/* 4-Step Workflow Timeline */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-4">
              Your Hiring Process in 4 Simple Steps
            </h2>
            <p className="text-center text-primary/70 mb-12 md:mb-16 max-w-xl mx-auto">
              We&apos;ve streamlined every step so you can go from first call to a working VA — fast.
            </p>
          </AnimateIn>

          <div className="relative">
            {/* Vertical connector line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" aria-hidden />

            <div className="space-y-12 md:space-y-0">
              {howItWorksPage.steps.map((step, i) => {
                const Icon = stepIcons[i];
                const isEven = i % 2 === 0;

                return (
                  <AnimateIn
                    key={step.title}
                    animation={isEven ? "fade-in-up" : "fade-in-up"}
                    delay={i * 150}
                  >
                    <div className="relative md:flex md:items-start md:gap-8 md:py-8">
                      {/* Step number circle on the timeline (desktop) */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-lg ring-4 ring-background">
                        {i + 1}
                      </div>

                      {/* Left side content (even steps) */}
                      <div className={`md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pr-16 md:opacity-0 md:pointer-events-none"}`}>
                        {isEven && (
                          <StepCard step={step} index={i} Icon={Icon} align="right" />
                        )}
                      </div>

                      {/* Right side content (odd steps) */}
                      <div className={`md:w-1/2 ${!isEven ? "md:pl-16" : "md:pl-16 md:opacity-0 md:pointer-events-none"}`}>
                        {!isEven && (
                          <StepCard step={step} index={i} Icon={Icon} align="left" />
                        )}
                      </div>

                      {/* Mobile layout */}
                      <div className="md:hidden">
                        <StepCard step={step} index={i} Icon={Icon} align="left" />
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What is a VA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background-muted">
        <div className="container mx-auto max-w-3xl">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              {howItWorksPage.whatIsVA.title}
            </h2>
            <div className="prose prose-primary max-w-none text-primary/90 whitespace-pre-line leading-relaxed">
              {howItWorksPage.whatIsVA.content}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Task categories */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              {howItWorksPage.taskCategories.title}
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={100}>
            <TaskCategoriesTabs tabs={howItWorksPage.taskCategories.tabs} />
          </AnimateIn>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background-muted">
        <div className="container mx-auto max-w-3xl">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Tools we commonly use
            </h2>
          </AnimateIn>
          <div className="flex flex-wrap gap-4">
            {howItWorksPage.tools.map((tool, i) => {
              const ToolIcon = iconMap[tool.icon];
              return (
                <AnimateIn key={tool.name} animation="scale-in" delay={i * 80}>
                  <Card className="flex items-center gap-3 px-4 py-3">
                    <ToolIcon className="h-5 w-5 text-accent" aria-hidden />
                    <span className="font-medium text-primary">{tool.name}</span>
                  </Card>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Frequently asked questions
            </h2>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={100}>
            <FAQAccordion items={howItWorksPage.faq} />
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to find your VA?"
        subtitle="Book a free discovery call and let's get started."
        primaryButton={{ text: "Book a Free Consultation", href: "/book" }}
        background="muted"
      />
    </>
  );
}

function StepCard({
  step,
  index,
  Icon,
  align,
}: {
  step: { title: string; description: string; highlight?: string };
  index: number;
  Icon: React.ComponentType<{ className?: string }>;
  align: "left" | "right";
}) {
  return (
    <div className={`group ${align === "right" ? "md:ml-auto" : ""}`}>
      <div className="flex items-start gap-4 md:gap-5">
        {/* Mobile step number + icon */}
        <div className="md:hidden flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-md">
          {index + 1}
        </div>

        <div className="flex-1">
          <div className={`flex items-center gap-3 mb-2 ${align === "right" ? "md:justify-end" : ""}`}>
            <div className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-primary">
              {step.title}
            </h3>
          </div>
          <p className={`text-primary/80 leading-relaxed mb-3 ${align === "right" ? "md:text-right" : ""}`}>
            {step.description}
          </p>
          {step.highlight && (
            <p className={`text-sm font-medium text-accent italic ${align === "right" ? "md:text-right" : ""}`}>
              {step.highlight}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
