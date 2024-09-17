import { Section } from "@/components/craft";
import FeaturedSolution from "@/components/ui/solutions/featured-solution";
import RemainingSolutions from "@/components/ui/solutions/remaining-solutions";
import { getSolutions } from "@/lib/cpt-service";
import { Solution } from "@/lib/cpt-types";

export default async function Oferta() {
    const solutions: Solution[] = await getSolutions()
    const featuredSolution = solutions.filter(solution => solution.categories.includes(17) && solution.status === "publish")[0]
    const FilteredSolutions = solutions.filter(solution => !solution.categories.includes(17) && solution.status === "publish")
    
    return (
        <Section className="py-4">
            <FeaturedSolution featuredSolution={featuredSolution} />
            <RemainingSolutions solutions={FilteredSolutions} limit={-1} />
        </Section>
    )
}