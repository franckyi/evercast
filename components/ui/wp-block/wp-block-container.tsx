'use client'
import { usePathname } from "next/navigation"
import { Block, Gallery } from "@/lib/cpt-types"
import WpBlockButton from "@/components/ui/wp-block/wp-block-button"
import ImageGallery from "@/components/ui/image-gallery"
import { fontSecondary } from "@/components/ui/fonts"

export default function WpBlockContainer({block, gallery}: {block: Block, gallery: Gallery}) {
    const pathname = usePathname()
    let partnerBlockBgColor = pathname === "/" ? "bg-stone-100 dark:bg-stone-800" : "bg-transparent"

    let partnersClasses = ""
    if (block.meta.block_name === "partners") {
        partnersClasses = `-mb-20 ${partnerBlockBgColor}`
    }

    let ctaMoreSolutionsClasses = ""
    if (block.meta.block_name === "cta_more_solutions") {
        ctaMoreSolutionsClasses = "py-8"
    }

    let ctaContactClasses = ""
    if (block.meta.block_name === "cta_contact") {
        ctaContactClasses = "px-12"
    }

    const ctaBlockBgColor = pathname === "/" ? "bg-transparent" : "bg-gradient-to-b from-[#F9F9F9] to-[#EDEDED] dark:from-[#333] dark:to-[#222]"


    return (
        <div className={`w-full p-8 flex ${partnersClasses} ${ctaMoreSolutionsClasses} dark:bg-gradient-to-b dark:from-black dark:to-bg-stone-950`}>
            <div className={`w-full py-8 ${ctaContactClasses} ${ctaBlockBgColor} mx-auto max-w-5xl flex flex-wrap lg:flex-nowrap justify-between items-center md:gap-28`}>
                
                <div
                    className={`text-3xl
                        ${block.meta.block_name === "partners" ? "leading-6" : ""}
                        ${block.meta.block_name === "cta_more_solutions" ? "text-3xl" : ""}
                        max-w-[400] text-muted-foreground font-bold
                        ${fontSecondary.className}`
                    }
                >
                    {block.title.rendered}
                </div>
                
                {block.meta.button_text !== "" &&
                    <div className="mt-8 md:mt-0 flex flex-col md:gap-4">

                        {block.meta.button_title !== "" &&
                            <p className={`text-accent text-3xl font-bold ${fontSecondary.className}`}>{block.meta.button_title}</p>
                        }

                        <WpBlockButton block={block} />
                    </div>
                }

                {gallery && <ImageGallery gallery={gallery} />}
            </div>
        </div>
    )
}