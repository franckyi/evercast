'use client'
import { usePathname } from "next/navigation"
import { Block, Gallery } from "@/lib/cpt-types"
import WpBlockButton from "@/components/ui/wp-block/wp-block-button"
import ImageGallery from "@/components/ui/image-gallery"
import { fontSecondary } from "@/components/ui/fonts"

export default function WpBlockContainer({block, gallery}: {block: Block, gallery: Gallery}) {
    const pathname = usePathname()
    let partnerBlockBgColor = pathname === "/" ? "bg-stone-100" : "bg-transparent"

    let partnersClasses = ""
    if (block.meta.block_name === "partners") {
        partnersClasses = `-mb-20 ${partnerBlockBgColor}`
    }

    let ctaMoreSolutionsClasses = ""
    if (block.meta.block_name === "cta_more_solutions") {
        ctaMoreSolutionsClasses = "py-8"
    }

    let ctaBlockBgColor = pathname === "/" ? "bg-transparent" : "bg-gradient-to-b from-[#F9F9F9] to-[#EDEDED]"

    return (
        <div className={`w-full flex ${partnersClasses} ${ctaMoreSolutionsClasses}`}>
            <div className={`w-full ${ctaBlockBgColor} p-8 mx-auto max-w-5xl flex flex-wrap lg:flex-nowrap justify-between items-center lg:gap-28`}>
                
                <div className={`text-2xl max-w-[400] text-muted-foreground font-bold ${fontSecondary.className}`}>
                    {block.title.rendered}
                </div>
                
                {block.meta.button_text !== "" &&
                    <div className="w-1/2 flex flex-col gap-4">

                        {block.meta.button_title !== "" &&
                            <p className={`text-accent text-2xl ${fontSecondary.className}`}>{block.meta.button_title}</p>
                        }

                        <WpBlockButton block={block} />
                    </div>
                }

                {gallery && <ImageGallery gallery={gallery} />}
            </div>
        </div>
    )
}