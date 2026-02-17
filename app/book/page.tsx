import { SectionHeading } from "@/components/SectionHeading";
import { BookPageContent } from "@/components/BookPageContent";
import { bookingPage } from "@/lib/content";
import { seo } from "@/lib/content";

export const metadata = {
  title: seo.book.title,
  description: seo.book.description,
};

export default function BookPage() {
  const { title, subtitle } = bookingPage;

  return (
    <div className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title={title} subtitle={subtitle} />
        <BookPageContent />
      </div>
    </div>
  );
}
