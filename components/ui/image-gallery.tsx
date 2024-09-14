import { Gallery } from "@/lib/cpt-types";
import parse from 'html-react-parser'

type ImageGalleryProps = {
    gallery: Gallery
}

export default function ImageGallery({gallery}: ImageGalleryProps) {
    const figure = parse(gallery.content.rendered)
    return (
        <div className="gallery flex">
            {figure}
        </div>
    )
}