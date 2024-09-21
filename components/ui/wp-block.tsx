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

    const contactUsClasses = "bg-gradient-to-b from-[#F9F9F9] to-[#EDEDED]"

    return (
        <div className={`w-full flex ${partnersClasses} ${ctaMoreSolutionsClasses}`}>
            <div className={`w-full ${contactUsClasses} p-8 mx-auto max-w-5xl flex justify-between items-center gap-28`}>
                <div className={`w-1/2 text-2xl max-w-[400] text-muted-foreground font-bold ${fontSecondary.className}`}>{block.title.rendered}</div>
                {block.meta.button_text !== "" &&
                    <div className="w-1/2 flex flex-col gap-4">

                        {block.meta.button_title !== "" &&
                            <p className={`text-accent text-2xl ${fontSecondary.className}`}>{block.meta.button_title}</p>
                        }

                        <Link href="/oferta">
                            <Button className="bg-transparent" size="lg" variant="outline">
                                {block.meta.button_text}
                                <Image className="ml-2" src="/chat-red.svg" width={16} height={16} alt="contact us icon" />
                            </Button>
                        </Link>
                    </div>
                }
                {gallery && <ImageGallery gallery={gallery} />}
            </div>
        </div>
    )
}