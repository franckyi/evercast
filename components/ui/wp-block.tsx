import { Block } from "@/lib/cpt-types";
import { Button } from "./button";
import ImageGallery from "./image-gallery";
import { getGalleryById } from "@/lib/cpt-service";

export default async function WpBlock({block}: {block: Block}) {
    const gallery = await getGalleryById(block.meta.linked_gallery_id)

    return (
        <div className="border bb-2">
            <div>{block.title.rendered}</div>
            galleryId: {block.meta.linked_gallery_id}
            {block.meta.button_text !== "" && <Button>{block.meta.button_text}</Button>}
            <div>
            gallery: {JSON.stringify(gallery)}
                <ImageGallery gallery={gallery} />
            </div>
        </div>
    )
}