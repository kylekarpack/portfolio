"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MapboxMap = dynamic(() => import("@/components/MapboxMap"), { ssr: false });

export const LazyContactMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-64">
      {shouldLoad ? <MapboxMap /> : <div className="h-full bg-color-background" aria-hidden="true" />}
    </div>
  );
};
