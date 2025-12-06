"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export const usePageTracking = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_location: `${window.location.origin}${pathname}`,
    });
  }, [pathname]);
};
