import { fontSecondary } from "@/components/ui/fonts";
import { Solution } from "@/lib/cpt-types";
import splitSentences from "@/lib/split-sentences";

export default function UseCases({solution}: {solution: Solution}) {
    const useCases = splitSentences(solution.meta.use_cases, " | ");

    return (
        <ul style={ {listStyleType: "none", paddingLeft: "0"} } >
            {useCases.map( useCase => (
                <li
                    key={useCase}
                    className={`text-3xl text-primary ${fontSecondary.className}`}
                    style={ {paddingLeft: "0"} }>
                    {useCase}
                </li>
            ))}
        </ul>
    )
}