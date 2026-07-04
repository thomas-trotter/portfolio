import Image from "next/image";
import classNames from "classnames";
import Placeholder from "@/components/ui/placeholder";

type ContentImageProps = {
    src?: string;
    alt: string;
    className?: string;
    fallbackLabel: string;
}

export default function ContentImage({
    src,
    alt,
    className,
    fallbackLabel
}: ContentImageProps) {
    if (!src) {
        return <Placeholder className={className}>{fallbackLabel}</Placeholder>
    }

    return (
        <div className={classNames(
            "relative overflow-hidden",
            className,
        )}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="600px"
            />
        </div>
    )
}