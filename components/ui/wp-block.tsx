import { Block } from "@/lib/cpt-types";
import { getGalleries } from "@/lib/cpt-service";
import WpBlockContainer from "./wp-block-container";

export default async function WpBlock({block}: {block: Block}) {
    const galleries = await getGalleries()
    const gallery = galleries.filter(gallery => block.meta.linked_gallery_id === gallery.meta.link_id)[0]

    return (
        <WpBlockContainer
            block={block}
            gallery={gallery}
        />
    )
}