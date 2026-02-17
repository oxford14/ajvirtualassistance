import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

interface CTAButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  className?: string;
  background?: "default" | "muted" | "subtle";
}

export function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
  background = "muted",
}: CTASectionProps) {
  const bgClass =
    background === "muted"
      ? "bg-background-muted"
      : background === "subtle"
        ? "bg-background-subtle"
        : "bg-background";

  return (
    <section
      className={cn(
        "py-16 md:py-24 px-4 md:px-6",
        bgClass,
        className
      )}
      aria-labelledby="cta-heading"
    >
      <AnimateIn animation="fade-in-up" className="max-w-3xl mx-auto text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-semibold text-primary mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-primary/80 mb-8">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link href={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
          {secondaryButton && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          )}
        </div>
      </AnimateIn>
    </section>
  );
}
