import { Section } from "@/components/craft";
import FeaturedSolution from "@/components/ui/solutions/featured-solution";
import RemainingSolutions from "@/components/ui/solutions/remaining-solutions";
import { getSolutions } from "@/lib/cpt-service";
import { Solution } from "@/lib/cpt-types";

export default async function Oferta() {
    const solutions: Solution[] = await getSolutions()
    const featuredSolution = solutions.filter(solution => solution.categories.includes(17))[0]
    const remainingSolutions = solutions.filter(solution => solution != featuredSolution)
    
    return (
        <Section className="py-4">
            <FeaturedSolution featuredSolution={featuredSolution} />
            <RemainingSolutions solutions={remainingSolutions} />
        </Section>
    )
}