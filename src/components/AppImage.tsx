import type { CSSProperties, ImgHTMLAttributes } from "react";
import { transformProps } from "@unpic/core";

type HtmlAttrs = ImgHTMLAttributes<HTMLImageElement>;

export interface AppImageProps extends Omit<HtmlAttrs, "srcSet" | "sizes" | "style" | "ref" | "alt"> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  layout?: "constrained" | "fullWidth" | "fixed";
  background?: "auto" | "thumbor" | "none";
  style?: CSSProperties;
}

/**
 * Image with Netlify CDN transforms, the static equivalent of the old
 * `@unpic/react` `AppImage`. All srcset/sizes generation happens at build
 * time, so no client JavaScript is shipped.
 */
export function AppImage({
  alt = "",
  loading = "lazy",
  className,
  layout,
  aspectRatio,
  background,
  width,
  height,
  style,
  ...restProps
}: AppImageProps) {
  const attrs = transformProps({
    ...restProps,
    width,
    height,
    aspectRatio,
    layout,
    background: background ?? undefined,
    alt,
    loading,
    cdn: "netlify",
    operations: { netlify: { quality: 50 } },
  } as any);

  const { className: _attrsClass, ...htmlAttrs } = attrs as Record<string, unknown>;

  return (
    <img
      {...(restProps as any)}
      {...(htmlAttrs as any)}
      {...(style ? { style } : {})}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
}
