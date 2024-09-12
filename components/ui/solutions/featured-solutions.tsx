import Image from "next/image"
import parse from 'html-react-parser'
import { Solution } from "@/lib/cpt-types"
import FeaturedImage from "./featured-image"

type FeaturedSolutionsProps = {
    solutions: Solution[]
}

export default function FeaturedSolutions(props: FeaturedSolutionsProps) {
    const featuredSolutions = props.solutions.filter(solution => solution.categories.includes(17) && solution.status === "publish")
    const solutions = featuredSolutions.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return(
        <div className="my-4 flex flex-col gap-4 bg-gray-500">
            <div className="w-full h-[460] relative bg-purple-300" key={solutions[0].id}>
                <div className="mx-auto max-w-5xl flex p-6 sm:p-8 relative z-10">
                    <div className="w-1/2">
                        <p>{solutions[0].title.rendered}</p>
                        {parse(solutions[0].excerpt.rendered)}
                    </div>
                    <div className="w-1/2">
                        <FeaturedImage
                            id={solutions[0].featured_media}
                            alt={solutions[0].title.rendered}
                        />
                    </div>
                </div>
                <Image
                    className="absolute inset-0 h-full w-full object-cover z-0"
                    alt={solutions[0].title.rendered}
                    src={solutions[0].meta.bg_img}
                    width={640}
                    height={460}
                />
            </div>

            <div className="bg-rose-300">
                <div className="mx-auto max-w-5xl p-6 sm:p-8 flex gap-4">
                    <div className="w-1/2 h-[460] relative bg-gray-200" key={solutions[1].id}>
                        <div className="relative z-10">
                            <p>{solutions[1].title.rendered}</p>
                            {parse(solutions[1].excerpt.rendered)}
                        </div>
                        <Image
                            className="absolute z-0 inset-0 h-full"
                            alt={solutions[1].title.rendered}
                            src={solutions[1].meta.bg_img}
                            width={640}
                            height={460}
                        />
                    </div>
                    <div className="w-1/2 h-[460] relative bg-gray-200" key={solutions[2].id}>
                        <div className="relative z-10">
                            <p>{solutions[2].title.rendered}</p>
                            {parse(solutions[2].excerpt.rendered)}
                        </div>
                        <Image
                            className="absolute z-0 inset-0 h-full"
                            alt={solutions[2].title.rendered}
                            src={solutions[2].meta.bg_img}
                            width={640}
                            height={460}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}