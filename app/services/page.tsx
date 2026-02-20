import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/ui/button";
import { BookCtaLink } from "@/components/BookCtaLink";
import { CTASection } from "@/components/CTASection";
import { iconMap } from "@/lib/icons";
import { servicesPage, seo } from "@/lib/content";
import { CheckCircle, Users, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: seo.services.title,
  description: seo.services.description,
};

export default function ServicesPage() {
  const [featured, ...otherServices] = servicesPage.categories;
  const FeaturedIcon = iconMap[featured.icon];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1a2f36]" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"
          aria-hidden
        />
        <div className="container mx-auto text-center relative z-10">
          <AnimateIn animation="fade-in-up">
            <p className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full text-white/80 border border-white/20 bg-white/5 backdrop-blur-sm">
              Professional VA Services
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {servicesPage.title}
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              {servicesPage.subtitle}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Featured Service — Medical VA */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <div className="relative bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 max-w-5xl mx-auto">
              <div className="h-1.5 bg-gradient-to-r from-accent via-accent/80 to-accent/60" />
              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-accent text-white uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" /> Featured
                </span>
              </div>
              <div className="p-8 md:p-12">
                <div className="md:flex md:gap-12">
                  <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-5">
                      <FeaturedIcon className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-primary/70 leading-relaxed mb-6">
                      {featured.shortDescription}
                    </p>
                    <div className="bg-background-muted rounded-xl p-5">
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                        Best for
                      </p>
                      <p className="text-sm text-primary/70 leading-relaxed">
                        {featured.bestFor}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button asChild size="lg" className="w-full">
                        <BookCtaLink href="/book" asChild>Get Started</BookCtaLink>
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
                      What&apos;s included
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {featured.included.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-primary/80">{item}</span>
                        </div>
                      ))}
                    </div>
                    {featured.sampleTasks && featured.sampleTasks.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-accent/10">
                        <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
                          Sample tasks
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {featured.sampleTasks.map((task) => (
                            <div key={task} className="flex items-start gap-2.5">
                              <ArrowRight className="h-4 w-4 text-accent/50 shrink-0 mt-0.5" />
                              <span className="text-sm text-primary/60">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background-muted">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                More Ways We Can Help
              </h2>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
                Flexible support across the areas that matter most to growing teams.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <AnimateIn key={cat.title} animation="fade-in-up" delay={(i + 1) * 100}>
                  <div className="group bg-white rounded-2xl border border-accent/15 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                    <div className="h-1 bg-gradient-to-r from-accent/60 to-accent/30" />
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{cat.title}</h3>
                      </div>
                      <p className="text-primary/70 mb-5 leading-relaxed text-sm">
                        {cat.shortDescription}
                      </p>

                      <div className="border-t border-accent/10 mb-5" />

                      {/* Included items */}
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                          What&apos;s included
                        </h4>
                        <ul className="space-y-2.5">
                          {cat.included.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm text-primary/75">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best for */}
                      <div className="mt-6 pt-5 border-t border-accent/10">
                        <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1.5">
                          Best for
                        </p>
                        <p className="text-sm text-primary/65 leading-relaxed">{cat.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                Flexible Packages
              </h2>
              <p className="text-lg text-primary/80 max-w-xl mx-auto leading-relaxed">
                We offer flexible arrangements. Each package can be tailored to your needs.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {servicesPage.packages.map((pkg, i) => {
              const isPopular = i === 1;
              return (
                <AnimateIn key={pkg.name} animation="fade-in-up" delay={(i + 1) * 150}>
                  <div
                    className={cn(
                      "group relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center h-full flex flex-col",
                      isPopular
                        ? "border-accent ring-2 ring-accent shadow-lg"
                        : "border-accent/15 shadow-sm"
                    )}
                  >
                    <div
                      className={cn(
                        "h-1.5",
                        isPopular
                          ? "bg-accent"
                          : "bg-gradient-to-r from-accent/40 to-accent/20"
                      )}
                    />
                    {isPopular && (
                      <div className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-2 text-center">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                      <p className="text-accent font-semibold text-sm mb-4">{pkg.hoursOrRole}</p>
                      <div className="border-t border-accent/10 my-4" />
                      <p className="text-sm text-primary/70 leading-relaxed flex-1">{pkg.bestFor}</p>
                      <p className="text-sm italic text-primary/50 my-4">{pkg.note}</p>
                      <Button
                        asChild
                        className="w-full"
                        variant={isPopular ? "default" : "outline"}
                      >
                        <BookCtaLink href="/book" asChild>Get Started</BookCtaLink>
                      </Button>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom VA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background-muted">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <div className="relative bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-lg max-w-4xl mx-auto">
              <div className="h-1.5 bg-gradient-to-r from-accent to-accent/60" />
              <div className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Users className="h-8 w-8" aria-hidden />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {servicesPage.customVA.title}
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {servicesPage.customVA.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                  {servicesPage.customVA.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span className="text-primary/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg">
                  <BookCtaLink href={servicesPage.customVA.ctaHref} asChild>
                    {servicesPage.customVA.cta}
                  </BookCtaLink>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to get started?"
        subtitle="Book a free consultation and tell us about your needs. We'll find the right VA for you."
        primaryButton={{ text: "Book a Free Consultation", href: "/book" }}
        background="default"
      />
    </>
  );
}
