import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import { aboutPage } from "@/lib/content";

import { seo } from "@/lib/content";

export const metadata = {
  title: seo.about.title,
  description: seo.about.description,
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          title={aboutPage.title}
          subtitle={aboutPage.subtitle}
        />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {aboutPage.story.title}
          </h2>
          <p className="text-primary/90 leading-relaxed whitespace-pre-line">
            {aboutPage.story.content}
          </p>
        </section>

        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {aboutPage.mission.title}
              </h3>
              <p className="text-primary/80">{aboutPage.mission.content}</p>
            </CardContent>
          </Card>
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {aboutPage.vision.title}
              </h3>
              <p className="text-primary/80">{aboutPage.vision.content}</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">Our values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.values.map((v) => (
              <FeatureCard
                key={v.title}
                title={v.title}
                description={v.description}
                icon={v.icon}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {aboutPage.whyFilipinoVAs.title}
          </h2>
          <p className="text-primary/90 leading-relaxed whitespace-pre-line">
            {aboutPage.whyFilipinoVAs.content}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">Founder</h2>
          <Card className="border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 shrink-0 bg-muted/50 flex items-center justify-center aspect-square md:aspect-auto md:min-h-[280px] text-muted-foreground">
                  {aboutPage.founder.image ? (
                    <img
                      src={aboutPage.founder.image}
                      alt={aboutPage.founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-muted-foreground">Photo placeholder</span>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-primary">{aboutPage.founder.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{aboutPage.founder.role}</p>
                  <p className="text-primary/80">{aboutPage.founder.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-8">Team</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutPage.team.map((member) => (
              <Card key={member.name} className="border-accent/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-primary/80 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
