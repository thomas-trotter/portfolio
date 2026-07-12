import Image from "next/image";
import classNames from "classnames";
import Placeholder from "@/components/ui/placeholder";
import { IMAGE_QUALITY } from "@/lib/config/images";

type ContentImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackLabel: string;
  sizes?: string;
  objectFit?: "cover" | "contain";
  width?: number;
  height?: number;
  blurDataURL?: string;
  priority?: boolean;
  layout?: "intrinsic" | "fill";
};

export default function ContentImage({
  src,
  alt,
  className,
  fallbackLabel,
  sizes,
  objectFit = "cover",
  width,
  height,
  blurDataURL,
  priority = false,
  layout,
}: ContentImageProps) {
  if (!src) {
    return <Placeholder className={className}>{fallbackLabel}</Placeholder>;
  }

  const objectFitClass =
    objectFit === "contain" ? "object-contain" : "object-cover";
  const useIntrinsicLayout =
    layout === "intrinsic" || (layout !== "fill" && width != null && height != null);

  if (useIntrinsicLayout && width != null && height != null) {
    return (
      <div
        className={classNames(
          "overflow-hidden",
          objectFit === "contain" && "bg-surface",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={IMAGE_QUALITY}
          sizes={sizes}
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "relative overflow-hidden",
        objectFit === "contain" && "bg-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading={priority ? "eager" : undefined}
        quality={IMAGE_QUALITY}
        sizes={sizes}
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
        priority={priority}
        className={objectFitClass}
      />
    </div>
  );
}
