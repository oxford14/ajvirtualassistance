"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { BookPageContent } from "@/components/BookPageContent";
import { bookingPage } from "@/lib/content";

type BookModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resetKey?: number;
};

export function BookModal({ open, onOpenChange, resetKey = 0 }: BookModalProps) {
  const { title, subtitle } = bookingPage;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={true} className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <BookPageContent key={resetKey} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
