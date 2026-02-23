import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { BookCtaLink } from "@/components/BookCtaLink";
import { AnimateIn } from "@/components/AnimateIn";
import { Mail, Phone, MapPin, MessageSquare, Calendar } from "lucide-react";
import { contactPage, seo } from "@/lib/content";

export const metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
};

export default function ContactPage() {
  const { form, calendly, businessInfo } = contactPage;

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
              Get In Touch
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {contactPage.title}
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              {contactPage.subtitle}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Form Card */}
            <AnimateIn animation="fade-in-up" className="lg:col-span-3">
              <div className="relative bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-accent via-accent/80 to-accent/60" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary">
                        Send us a message
                      </h2>
                      <p className="text-sm text-primary/60">
                        We&rsquo;ll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  <ContactForm
                    nameLabel={form.nameLabel}
                    emailLabel={form.emailLabel}
                    companyLabel={form.companyLabel}
                    messageLabel={form.messageLabel}
                    submitLabel={form.submitLabel}
                    successMessage={form.successMessage}
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn animation="fade-in-up" delay={150} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Book consultation card */}
                <div className="relative bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-lg">
                  <div className="h-1.5 bg-accent" />
                  <div className="p-8">
                    <div className="flex justify-center mb-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <Calendar className="h-7 w-7" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary text-center mb-2">
                      Prefer a live conversation?
                    </h3>
                    <p className="text-sm text-primary/60 text-center mb-6 leading-relaxed">
                      Book a free consultation and let&rsquo;s discuss how we can help your business grow.
                    </p>
                    <Button asChild size="lg" className="w-full">
                      <BookCtaLink href={calendly.url} asChild>
                        {calendly.buttonText}
                      </BookCtaLink>
                    </Button>
                  </div>
                </div>

                {/* Business info card */}
                <div className="relative bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-accent/60 to-accent/30" />
                  <div className="p-8">
                    <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-6">
                      Business Info
                    </h3>
                    <ul className="space-y-5">
                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary/50 uppercase tracking-wider mb-1">
                            Email
                          </p>
                          <a
                            href={`mailto:${businessInfo.email}`}
                            className="text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                          >
                            {businessInfo.email}
                          </a>
                        </div>
                      </li>
                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary/50 uppercase tracking-wider mb-1">
                            Phone
                          </p>
                          <span className="text-sm text-primary/80">
                            {businessInfo.phone}
                          </span>
                        </div>
                      </li>
                      <li className="group flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary/50 uppercase tracking-wider mb-1">
                            Location
                          </p>
                          <span className="text-sm text-primary/80">
                            {businessInfo.address}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
