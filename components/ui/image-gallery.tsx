import { Gallery } from "@/lib/cpt-types";

export default function ImageGallery({gallery}: {gallery: Gallery}) {
    return (
        <div className="flex flex-wrap">
            {gallery.content.rendered}
        </div>
    )
}