import type { FunctionComponent, ImgHTMLAttributes } from "react";

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  handle?: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  className?: string;
}

const GraphCmsImage: FunctionComponent<AppImageProps> = ({
  src,
  handle,
  alt,
  width = 800,
  height = 600,
  loading = "lazy",
  className,
  ...rest
}) => {
  let imageSrc = src;

  if (!imageSrc && handle) {
    if (handle === "cmtykcbnvndbs07llny849vx0") {
      imageSrc = "/images/profile.jpg";
    } else {
      imageSrc = `/images/${handle}`;
    }
  }

  if (!imageSrc) {
    imageSrc = "/images/profile.jpg";
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      {...rest}
    />
  );
};

export default GraphCmsImage;
