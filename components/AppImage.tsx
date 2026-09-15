"use client";

import { Image, type ImageProps } from "@unpic/react";

export function AppImage({ className, onLoad, onError, alt = "", loading = "lazy", ...props }: ImageProps) {
  return (
    <Image
      alt={alt}
      loading={loading}
      cdn="netlify"
      operations={{ netlify: { quality: 50 } }}
      {...props}
      className={className ?? ""}
    />
  );
}

export default AppImage;
