import { getFeaturedMediaById } from "@/lib/wordpress"
import Image from "next/image"

type FeaturedImageProps = {
    id: number,
    alt: string,
}

export default async function FeaturedImage(props: FeaturedImageProps) {
    const baseUrl = process.env.WORDPRESS_URL
    // const src = await fetch(`${baseUrl}/api/media/${props.id}`).then(res => res.json())

    const media = await getFeaturedMediaById(props.id)

    return(
        <Image
            alt={props.alt}
            src={media.media_details.sizes.full.source_url}
            width={290}
            height={300}
        />
    )
}