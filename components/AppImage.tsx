"use client";

import { Image, type ImageProps } from "@unpic/react";
import { useCallback, useState } from "react";

export function AppImage({ className, onLoad, onError, alt = "", loading = "lazy", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <Image
      ref={imgRef}
      alt={alt}
      loading={loading}
      cdn="netlify"
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        if (onLoad) onLoad(e);
      }}
      onError={(e) => {
        setLoaded(true);
        if (onError) onError(e);
      }}
      className={`transition-all duration-200 ease-out ${
        loaded ? "blur-0 opacity-100" : "blur-sm opacity-40 bg-gray-200"
      } ${className || ""}`}
    />
  );
}

export default AppImage;
