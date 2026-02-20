import { iconMap } from "@/lib/icons";
import type { IconKey } from "@/lib/content";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: IconKey;
  variant?: "problem" | "solution";
  className?: string;
}

export function HighlightCard({
  title,
  description,
  icon,
  variant = "solution",
  className,
}: HighlightCardProps) {
  const Icon = iconMap[icon];
  const isProblem = variant === "problem";

  return (
    <div
      className={cn(
        "group relative rounded-xl p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1.5",
        isProblem
          ? "bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10"
          : "bg-white border border-accent/20 shadow-sm hover:shadow-lg border-t-[3px] border-t-accent",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          isProblem
            ? "bg-red-50 text-red-500"
            : "bg-accent/15 text-accent",
        )}
      >
        <Icon className="h-8 w-8" aria-hidden />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-primary/70 leading-relaxed">{description}</p>
    </div>
  );
}
