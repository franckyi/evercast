import { Block } from "@/lib/cpt-types";
import { Button } from "./button";
import ImageGallery from "./image-gallery";
import { getGalleries } from "@/lib/cpt-service";
import { fontSecondary } from "./fonts";

export default async function WpBlock({block}: {block: Block}) {
    const galleries = await getGalleries()
    const gallery = galleries.filter(gallery => block.meta.linked_gallery_id === gallery.meta.link_id)[0]

    return (
        <div className="flex border bb-2">
            <div className={`text-2xl max-w-[400] text-muted-foreground font-bold ${fontSecondary.className}`}>{block.title.rendered}</div>
            {block.meta.button_text !== "" && <Button>{block.meta.button_text}</Button>}
            {gallery && <ImageGallery gallery={gallery} />}
        </div>
    )
}