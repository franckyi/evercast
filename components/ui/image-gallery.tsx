import { Gallery } from "@/lib/cpt-types";
import parse from 'html-react-parser';
import extractImgTags from "@/lib/extract-img-tags";

type ImageGalleryProps = {
    gallery: Gallery
}

export default function ImageGallery({gallery}: ImageGalleryProps) {
    let images = extractImgTags(gallery.content.rendered);

    return (
        <div className="gallery flex gap-4 justify-between items-center">
            {images.map( image => {
                return (
                    <>
                        {parse(image)}
                    </>
                )
            })}
        </div>
    )
}