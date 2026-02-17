import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  roleOrIndustry: string;
  stars?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  roleOrIndustry,
  stars = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardContent className="pt-6 flex-1 flex flex-col">
        {stars > 0 && (
          <div className="flex gap-0.5 mb-4" aria-hidden>
            {Array.from({ length: Math.min(stars, 5) }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent transition-transform duration-300 hover:scale-110"
                aria-hidden
              />
            ))}
          </div>
        )}
        <blockquote className="text-primary/90 leading-relaxed flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="mt-4 pt-4 border-t border-accent/20">
          <cite className="not-italic font-semibold text-primary">{name}</cite>
          <p className="text-sm text-primary/70">{roleOrIndustry}</p>
        </footer>
      </CardContent>
    </Card>
  );
}
