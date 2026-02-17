import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
};

export default function ContactPage() {
  const { form, calendly, businessInfo } = contactPage;

  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading
          title={contactPage.title}
          subtitle={contactPage.subtitle}
        />

        <div className="mb-10">
          <Button asChild size="lg">
            <a href={calendly.url}>{calendly.buttonText}</a>
          </Button>
        </div>

        <ContactForm
          nameLabel={form.nameLabel}
          emailLabel={form.emailLabel}
          companyLabel={form.companyLabel}
          messageLabel={form.messageLabel}
          submitLabel={form.submitLabel}
          successMessage={form.successMessage}
        />

        <section className="mt-16 pt-12 border-t border-accent/20">
          <h2 className="text-xl font-semibold text-primary mb-6">Business info</h2>
          <ul className="space-y-4 text-primary/90">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" aria-hidden />
              <a href={`mailto:${businessInfo.email}`} className="hover:text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                {businessInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" aria-hidden />
              <span>{businessInfo.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" aria-hidden />
              <span>{businessInfo.address}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
