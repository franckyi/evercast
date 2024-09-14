import Image from "next/image"
import parse from 'html-react-parser'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Solution } from "@/lib/cpt-types"
import FeaturedImage from "./featured-image"
import { Button } from "../button"
import { fontSecondary } from "../fonts"

type FeaturedSolutionsProps = {
    solutions: Solution[]
}

export default function FeaturedSolutions(props: FeaturedSolutionsProps) {
    const featuredSolutions = props.solutions.filter(solution => solution.categories.includes(17) && solution.status === "publish")
    const solutions = featuredSolutions.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return(
        <div className="mb-4 flex flex-col gap-4">
            <div className="w-full py-8 h-[460] relative" key={solutions[0].id}>
                <div className="mx-auto max-w-5xl flex px-8 relative items-center z-10">
                    <div className="flex flex-col gap-4">
                        <div className={`text-5xl text-muted-foreground font-bold ${fontSecondary.className}`}>{solutions[0].title.rendered}</div>
                        <div className={`text-5xl text-accent font-bold ${fontSecondary.className}`}>{parse(solutions[0].content.rendered)}</div>
                        {parse(solutions[0].excerpt.rendered)}
                        <Button className="w-[200]" size="lg">Dowiedź się więcej <span className="ml-2"><ArrowRightIcon /></span></Button>
                    </div>
                    <div className="float-right w-1/2">
                        <FeaturedImage
                            id={solutions[0].featured_media}
                            alt={solutions[0].title.rendered}
                        />
                    </div>
                </div>
                <Image
                    className="featured-bg-image absolute inset-0 w-full h-full z-0"
                    alt={solutions[0].title.rendered}
                    src={solutions[0].meta.bg_img}
                    width={640}
                    height={460}
                />
            </div>

            <div className="relative h-[460] flex justify-center">
                <div className="absolute h-[460] z-10 mx-auto max-w-5xl p-6 sm:p-8 flex gap-4">
                    <div className="w-1/2 h-full" key={solutions[1].id}>
                        <div className="h-full p-8 pl-0 flex flex-col gap-4">
                            <p className={`text-4xl text-muted-foreground font-bold ${fontSecondary.className}`}>{solutions[1].title.rendered}</p>
                            <div className={`text-4xl text-accent font-bold ${fontSecondary.className}`}>
                                {parse(solutions[1].excerpt.rendered)}
                            </div>
                            <Button className="mt-auto w-[200]" size="lg">Dowiedź się więcej <span className="ml-2"><ArrowRightIcon /></span></Button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full" key={solutions[2].id}>
                        <div className="h-full p-8 flex flex-col gap-4">
                            <p className={`text-4xl text-muted-foreground font-bold ${fontSecondary.className}`}>{solutions[2].title.rendered}</p>
                            <div className={`text-4xl text-accent font-bold ${fontSecondary.className}`}>
                                {parse(solutions[2].excerpt.rendered)}
                            </div>
                            <Button className="mt-auto w-[200]" size="lg">Dowiedź się więcej <span className="ml-2"><ArrowRightIcon /></span></Button>
                        </div>
                    </div>
                </div>
                <div className="absolute h-[460] z-0 flex justify-between gap-4 h-full w-full">
                    <Image
                        className="featured-bg-image inset-0 grow h-full object-cover"
                        alt={solutions[1].title.rendered}
                        src={solutions[1].meta.bg_img}
                        width={640}
                        height={460}
                    />
                    <Image
                        className="featured-bg-image inset-0 grow h-full object-cover object-center"
                        alt={solutions[2].title.rendered}
                        src={solutions[2].meta.bg_img}
                        width={640}
                        height={460}
                    />
                </div>
            </div>
        </div>
    )
}