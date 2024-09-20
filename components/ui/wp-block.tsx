import Image from "next/image";
import Link from "next/link";
import { Block } from "@/lib/cpt-types";
import { Button } from "./button";
import ImageGallery from "./image-gallery";
import { getGalleries } from "@/lib/cpt-service";
import { fontSecondary } from "./fonts";

export default async function WpBlock({block}: {block: Block}) {
    const galleries = await getGalleries()
    const gallery = galleries.filter(gallery => block.meta.linked_gallery_id === gallery.meta.link_id)[0]

    let partnersClasses = ""
    if (block.meta.block_name === "partners") {
        partnersClasses = "bg-stone-100"
    }

    let ctaMoreSolutionsClasses = ""
    if (block.meta.block_name === "cta_more_solutions") {
        ctaMoreSolutionsClasses = "py-8"
    }

    return (
        <div className={`w-full flex ${partnersClasses} ${ctaMoreSolutionsClasses}`}>
            <div className={`w-full p-8 mx-auto max-w-5xl flex justify-between items-center`}>
                <div className={`text-2xl max-w-[400] text-muted-foreground font-bold ${fontSecondary.className}`}>{block.title.rendered}</div>
                {block.meta.button_text !== "" &&
                    <Link href="/oferta">
                        <Button size="lg" variant="outline">{block.meta.button_text}
                            <Image className="ml-2" src="arrow-right-black.svg" width={16} height={16} alt="arrow right icon" />
                        </Button>
                    </Link>
                }
                {gallery && <ImageGallery gallery={gallery} />}
            </div>
        </div>
    )
}