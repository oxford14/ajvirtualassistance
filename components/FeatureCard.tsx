import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { iconMap } from "@/lib/icons";
import type { IconKey } from "@/lib/content";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconKey;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const Icon = iconMap[icon];
  return (
    <Card className={cn("h-full group", className)}>
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6 transition-transform duration-300" aria-hidden />
        </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-primary/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
