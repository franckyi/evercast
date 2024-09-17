import { Section } from "@/components/craft";
import { getSolutionById } from "@/lib/cpt-service";

type SolutionProps = {
    id: number
}

export default async function Page(params: SolutionProps) {
const solution = await getSolutionById(params.id)

    return (
        <Section className="py-4">
            <h1>Rozwiązanie</h1>
            {solution.id}
        </Section>
    );
}