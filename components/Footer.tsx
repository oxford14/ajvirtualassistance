import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { footer } from "@/lib/content";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  facebook: Facebook,
};

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold mb-4">{footer.ctaLine}</p>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href={footer.ctaButtonHref}>{footer.ctaButtonText}</Link>
            </Button>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="flex gap-4">
              {footer.social.map((item) => {
                const Icon = socialIconMap[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-transform duration-200 hover:scale-110"
                      aria-label={item.label}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="mt-12 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/80">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
