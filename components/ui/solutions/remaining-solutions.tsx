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

export default function RemainingSolutions(props: FeaturedSolutionsProps) {
    const remainingSolutions = props.solutions.filter(solution => !solution.categories.includes(17) && solution.status === "publish")
    const solutions = remainingSolutions.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return(
        <div className="mb-4 flex flex-col gap-4">

            <div className="relative h-[460] flex justify-center">
                <div className="absolute h-[460] z-10 mx-auto max-w-5xl p-6 sm:p-8 flex gap-4">
                    <div className="w-1/2 h-full">
                        <div className="h-full p-8 pl-0 flex flex-col gap-4">
                            <p className={`text-4xl text-muted-foreground font-bold ${fontSecondary.className}`}>{solutions[1].title.rendered}</p>
                            <div className={`text-4xl text-accent font-bold ${fontSecondary.className}`}>
                                {parse(solutions[1].excerpt.rendered)}
                            </div>
                            <Button className="mt-auto w-[200]" size="lg">Dowiedź się więcej <span className="ml-2"><ArrowRightIcon /></span></Button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
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

            <h2> ######################### NEW BELOW ######################### </h2>

            {solutions.map((solution: any) => (
                
                <div key={solution.id} className="relative h-[460] flex justify-center">
                    <div className="absolute h-[460] z-10 mx-auto max-w-5xl p-6 sm:p-8 flex gap-4">
                        <div className="w-1/2 h-full">
                            <div className="h-full p-8 pl-0 flex flex-col gap-4">
                                <p className={`text-4xl text-muted-foreground font-bold ${fontSecondary.className}`}>{solutions[1].title.rendered}</p>
                                <div className={`text-4xl text-accent font-bold ${fontSecondary.className}`}>
                                    {parse(solutions[1].excerpt.rendered)}
                                </div>
                                <Button className="mt-auto w-[200]" size="lg">Dowiedź się więcej <span className="ml-2"><ArrowRightIcon /></span></Button>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
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

            ))}
            

        </div>
    )
}