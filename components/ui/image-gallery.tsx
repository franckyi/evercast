import { Gallery } from "@/lib/cpt-types";
import parse from 'html-react-parser';
import extractImgTags from "@/lib/extract-img-tags";

type ImageGalleryProps = {
    gallery: Gallery
}

export default function ImageGallery({gallery}: ImageGalleryProps) {
    let images = extractImgTags(gallery.content.rendered);

    return (
        <div className="gallery mt-8 lg:mt-0 flex flex-wrap lg:flex-nowrap gap-4 justify-start lg:justify-between items-center">
            {images.map( image => {
                return (
                    <div key={image}>
                        {parse(image)}
                    </div>
                )
            })}
        </div>
    )
}