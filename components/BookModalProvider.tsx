"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { BookModal } from "@/components/BookModal";

type BookModalContextValue = {
  openBookModal: () => void;
};

const BookModalContext = createContext<BookModalContextValue | null>(null);

export function useBookModal() {
  const ctx = useContext(BookModalContext);
  if (!ctx) {
    throw new Error("useBookModal must be used within BookModalProvider");
  }
  return ctx;
}

export function BookModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const openBookModal = useCallback(() => setOpen(true), []);
  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) setResetKey((k) => k + 1);
  }, []);

  return (
    <BookModalContext.Provider value={{ openBookModal }}>
      {children}
      <BookModal open={open} onOpenChange={handleOpenChange} resetKey={resetKey} />
    </BookModalContext.Provider>
  );
}
