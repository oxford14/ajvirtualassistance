import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookCtaLink } from "@/components/BookCtaLink";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { AnimateIn } from "@/components/AnimateIn";
import {
  home,
  testimonials,
} from "@/lib/content";

export default function HomePage() {
  const featured = home.featuredTestimonials.map((i) => testimonials[i - 1]).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-background-muted to-background">
        {/* Background video (optional) */}
        {home.hero.backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          >
            <source src={home.hero.backgroundVideo} type="video/mp4" />
          </video>
        )}
        {/* Background image (optional, used if no video) */}
        {home.hero.backgroundImage && !home.hero.backgroundVideo && (
          <Image
            src={home.hero.backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            aria-hidden
          />
        )}
        {/* Overlay for readability when image/video is present */}
        {(home.hero.backgroundImage || home.hero.backgroundVideo) && (
          <div className="absolute inset-0 bg-black/65 z-[1]" aria-hidden />
        )}
        <div
          className={`container relative z-10 mx-auto max-w-4xl text-center ${home.hero.backgroundImage || home.hero.backgroundVideo ? "text-white" : ""}`}
        >
          {home.hero.tagline && (
            <AnimateIn animation="fade-in-up">
              <p
                className={`inline-block text-sm md:text-base font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border ${home.hero.backgroundImage || home.hero.backgroundVideo ? "text-white/90 border-white/30 bg-white/10 backdrop-blur-sm" : "text-accent border-accent/30 bg-accent/10"}`}
              >
                {home.hero.tagline}
              </p>
            </AnimateIn>
          )}
          <AnimateIn animation="fade-in-up" delay={100}>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${home.hero.backgroundImage || home.hero.backgroundVideo ? "text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]" : "text-primary drop-shadow-sm"}`}
            >
              {home.hero.headline}
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={200}>
            <p
              className={`text-xl md:text-2xl mb-10 max-w-2xl mx-auto ${home.hero.backgroundImage || home.hero.backgroundVideo ? "text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]" : "text-primary/80 drop-shadow-sm"}`}
            >
              {home.hero.subheadline}
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={350}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className={home.hero.backgroundImage || home.hero.backgroundVideo ? "text-base bg-white text-primary border-0 hover:bg-white/90" : "text-base"}
              >
                <BookCtaLink href={home.hero.primaryCtaHref} asChild>{home.hero.primaryCta}</BookCtaLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={home.hero.backgroundImage || home.hero.backgroundVideo ? "text-base border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white" : "text-base"}
              >
                <Link href={home.hero.secondaryCtaHref}>{home.hero.secondaryCta}</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Trust row */}
      <section className="py-8 px-4 border-y border-accent/20 bg-background-subtle">
        <AnimateIn animation="fade-in" delay={200} className="container mx-auto">
          <p className="text-center text-primary/80 font-medium">
            {home.trustRow.join(" • ")}
          </p>
        </AnimateIn>
      </section>

      {/* Services overview */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionHeading
              title="What we can do for you"
              subtitle="From admin to e-commerce, we provide skilled support across the areas that slow you down."
            />
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.servicesOverview.map((service, i) => (
              <AnimateIn key={service.title} animation="fade-in-up" delay={(i + 1) * 100}>
                <FeatureCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works summary */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background-muted">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionHeading
              title="How it works"
              subtitle="A simple process to get you the right VA and keep everything running smoothly."
            />
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {home.howItWorksSteps.map((step, i) => (
              <AnimateIn key={step.title} animation="scale-in" delay={i * 150}>
                <div className="text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold mb-4 transition-transform duration-300 hover:scale-110">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-primary/80 text-sm">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/how-it-works">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <AnimateIn animation="fade-in-up" className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {home.missionBanner.title}
          </h2>
          <p className="text-primary-foreground/90 mb-8 leading-relaxed">
            {home.missionBanner.description}
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href={home.missionBanner.ctaHref}>{home.missionBanner.cta}</Link>
          </Button>
        </AnimateIn>
      </section>

      {/* Featured testimonials */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionHeading
              title="What clients say"
              subtitle="Real feedback from businesses that work with our VAs."
            />
          </AnimateIn>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((t, i) => (
              <AnimateIn key={t.name} animation="fade-in-up" delay={i * 150}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  roleOrIndustry={t.roleOrIndustry}
                  stars={t.stars}
                />
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">Read more testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title={home.finalCta.title}
        subtitle={home.finalCta.subtitle}
        primaryButton={{ text: home.finalCta.buttonText, href: home.finalCta.buttonHref }}
        background="muted"
      />
    </>
  );
}
