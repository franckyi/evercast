import Image from "next/image"
import parse from 'html-react-parser'
import { Solution } from "@/lib/cpt-types"
import FeaturedImage from "./featured-image"
import { Button } from "../button"
import { fontSecondary } from "../fonts"
import Link from "next/link"

type FeaturedSolutionProps = {
    featuredSolution: Solution
}

export default function FeaturedSolution({featuredSolution}: FeaturedSolutionProps) {
    return(
        <div className="w-full py-8 h-[460] relative mb-4 flex flex-col gap-4">
            <div className="mx-auto max-w-5xl flex px-8 relative items-center z-10">
                <div className="flex flex-col gap-4">
                    <div className={`text-5xl text-muted-foreground font-bold ${fontSecondary.className}`}>{featuredSolution.title.rendered}</div>
                    <div className={`text-5xl text-accent font-bold ${fontSecondary.className}`}>
                        {parse(featuredSolution.content.rendered)}
                    </div>
                    {parse(featuredSolution.excerpt.rendered)}
                    <Link href={`/rozwiazanie/${featuredSolution.id}`} className="mt-4" title={featuredSolution.title.rendered}>
                        <Button className="w-[200] bg-gradient-to-r from-[#E7411B] to-[#B70D18]" size="lg">Dowiedź się więcej
                            <Image className="ml-2" src="/arrow-right-white.svg" width={16} height={16} alt="arrow right icon" />
                        </Button>
                    </Link>
                </div>
                <div className="float-right w-1/2">
                    <FeaturedImage
                        id={featuredSolution.featured_media}
                        alt={featuredSolution.title.rendered}
                    />
                </div>
            </div>
            <Image
                className="featured-bg-image absolute inset-0 w-full h-full z-0"
                alt={featuredSolution.title.rendered}
                src={featuredSolution.meta.bg_img}
                width={640}
                height={460}
            />
        </div>
    )
}