"use client";

import Link from "next/link";
import * as React from "react";
import { useBookModal } from "@/components/BookModalProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookCtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Use with Button asChild so the Button styles apply to the link/button. */
  asChild?: boolean;
  onClick?: () => void;
};

/**
 * If href is /book, opens the book modal instead of navigating.
 * Otherwise renders a normal link.
 */
export const BookCtaLink = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, BookCtaLinkProps>(
  function BookCtaLink({ href, children, className, asChild, onClick }, ref) {
    const { openBookModal } = useBookModal();

    const handleBookClick = () => {
      openBookModal();
      onClick?.();
    };

    if (href === "/book") {
      if (asChild) {
        return (
          <button
            type="button"
            ref={ref as React.Ref<HTMLButtonElement>}
            className={cn(className)}
            onClick={handleBookClick}
          >
            {children}
          </button>
        );
      }
      return (
        <Button type="button" onClick={handleBookClick} className={className}>
          {children}
        </Button>
      );
    }

    if (asChild) {
      return (
        <Link href={href} className={className} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }
    return (
      <Button asChild>
        <Link href={href} className={className}>{children}</Link>
      </Button>
    );
  }
);
