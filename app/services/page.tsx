import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { iconMap } from "@/lib/icons";
import { servicesPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.services.title,
  description: seo.services.description,
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          title={servicesPage.title}
          subtitle={servicesPage.subtitle}
        />

        <div className="space-y-16">
          {servicesPage.categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <section key={cat.title} className="max-w-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-primary">{cat.title}</h2>
                    <p className="text-primary/80 mt-1">{cat.shortDescription}</p>
                  </div>
                </div>
                <Card className="border-accent/20">
                  <CardHeader className="pb-2">
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
                      What&apos;s included
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="list-disc list-inside space-y-1 text-primary/90">
                      {cat.included.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Best for</h4>
                      <p className="text-primary/80 text-sm">{cat.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Sample tasks</h4>
                      <ul className="list-disc list-inside space-y-1 text-primary/80 text-sm">
                        {cat.sampleTasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}
        </div>

        <section className="mt-20 pt-16 border-t border-accent/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10">
            Packages
          </h2>
          <p className="text-center text-primary/80 max-w-xl mx-auto mb-12">
            We offer flexible arrangements. Each package can be tailored to your needs.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {servicesPage.packages.map((pkg) => (
              <Card key={pkg.name} className="text-center">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-primary">{pkg.name}</h3>
                  <p className="text-sm font-medium text-accent">{pkg.hoursOrRole}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-primary/80 text-sm mb-4">{pkg.bestFor}</p>
                  <p className="text-sm italic text-primary/70">{pkg.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
