import { Section } from "@/components/craft";
import FeaturedSolutions from "@/components/ui/solutions/featured-solutions";
import { getSolutions } from "@/lib/cpt-service";
import { Solution } from "@/lib/cpt-types";

export default async function Oferta() {
    const solutions: Solution[] = await getSolutions()
    
    return (
        <Section>
            {/* TODO: SEPARATE FEATURED SOLUTION FROM REST */}
            <FeaturedSolutions solutions={solutions} />
        </Section>
    )
}