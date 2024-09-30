import Image from "next/image"
import parse from 'html-react-parser'
import FeaturedImage from "./featured-image"
import { Solution } from "@/lib/cpt-types"
import { Button } from "@/components/ui/button"
import { fontSecondary } from "@/components/ui/fonts"
import Link from "next/link"

type FeaturedSolutionProps = {
    featuredSolution: Solution
}

export default function FeaturedSolution({featuredSolution}: FeaturedSolutionProps) {
    return(
        <div className="relative w-full py-8 max-sm:min-h-[830px] h-[460px] mb-4 flex flex-col gap-4 dark:bg-black">
            <div className="md:relative mx-auto max-w-5xl flex flex-wrap sm:flex-nowrap px-8 items-center z-10">
                <div className="flex flex-col gap-4">
                    <div className={`text-5xl text-muted-foreground font-bold ${fontSecondary.className}`}>
                        {featuredSolution.title.rendered}
                    </div>
                    <article className={`text-5xl text-accent font-bold ${fontSecondary.className}`}>
                        {parse(featuredSolution.content.rendered)}
                    </article>
                    <div className={`text-5xl text-accent font-bold ${fontSecondary.className}`}>
                        {featuredSolution.meta.short_desc}
                    </div>
                    {parse(featuredSolution.excerpt.rendered)}
                    <Link href={`/rozwiazanie/${featuredSolution.slug}`} className="mt-4" title={featuredSolution.title.rendered}>
                        <Button className="w-[200] bg-gradient-to-r from-[#E7411B] to-[#B70D18] hover:from-[#B70D18] hover:to-[#B70D18] font-bold" size="lg">Dowiedź się więcej
                            <Image className="ml-2" src="/arrow-right-white.svg" width={16} height={16} alt="arrow right icon" />
                        </Button>
                    </Link>
                </div>
                <div className="float-right sm:w-1/2">
                    <FeaturedImage
                        id={featuredSolution.featured_media}
                        alt={featuredSolution.title.rendered}
                    />
                </div>
            </div>
            <Image
                className="absolute z-0 featured-bg-image inset-0 w-full h-full object-cover opacity-10"
                alt={featuredSolution.title.rendered}
                src={featuredSolution.meta.bg_img}
                width={640}
                height={460}
            />
        </div>
    )
}