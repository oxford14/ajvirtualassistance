import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-primary/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
