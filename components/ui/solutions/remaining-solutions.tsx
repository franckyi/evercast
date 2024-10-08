import Image from "next/image"
import parse from 'html-react-parser'
import { Solution } from "@/lib/cpt-types"
import { Button } from "../button"
import { fontSecondary } from "../fonts"
import Link from "next/link"

type FeaturedSolutionProps = {
    solutions: Solution[],
}

export default function RemainingSolutions(props: FeaturedSolutionProps) {
    const solutions = props.solutions
    const remainingSolutions = solutions.filter(solution => !solution.categories.includes(17))
    const orderedSolutions = remainingSolutions.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return(
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-4">
            {orderedSolutions.map((solution: Solution) => {
                return(
                    <div key={solution.id} className="solution-container w-full md:w-[calc(50%-.5rem)] relative min-h-[460px] flex dark:bg-[#222]">
                        <div className="content-wrapper absolute h-full z-10 p-8 flex gap-4">
                            <div className="w-2/3 h-full flex flex-col gap-4">
                                <p className={`text-4xl text-muted-foreground font-bold ${fontSecondary.className}`}>
                                    {solution.title.rendered}
                                </p>
                                <div className={`text-4xl text-accent font-bold ${fontSecondary.className}`}>
                                    {parse(solution.excerpt.rendered)}
                                </div>
                                <Link href={`/rozwiazanie/${solution.slug}`} className="mt-auto" title={solution.title.rendered}>
                                    <Button className="w-[200] bg-gradient-to-r from-[#E7411B] to-[#B70D18] hover:from-[#B70D18] hover:to-[#B70D18] font-bold" size="lg">Dowiedź się więcej
                                        <Image className="ml-2" src="/arrow-right-white.svg" width={16} height={16} alt="arrow right icon" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <Image
                            className="featured-bg-image inset-0 grow h-full object-cover dark:opacity-100 dark:mix-blend-color-burn"
                            alt={solution.title.rendered}
                            src={solution.meta.bg_img}
                            width={640}
                            height={460}
                        />
                    </div>
                )
            })}
        </div>
    )
}