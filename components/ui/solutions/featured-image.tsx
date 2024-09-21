import { getFeaturedMediaById } from "@/lib/wordpress"
import Image from "next/image"

type FeaturedImageProps = {
    id: number,
    alt: string,
}

export default async function FeaturedImage(props: FeaturedImageProps) {
    const media = await getFeaturedMediaById(props.id)

    return(
        <Image
            alt={props.alt}
            src={media.media_details.sizes.full.source_url}
            className="min-w-[200px]"
            width={381}
            height={395}
        />
    )
}