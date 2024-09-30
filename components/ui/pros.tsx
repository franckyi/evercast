import { fontSecondary } from "@/components/ui/fonts";
import { Solution } from "@/lib/cpt-types";
import splitSentences from "@/lib/split-sentences";

export default function Pros({solution}: {solution: Solution}) {
    const pros = splitSentences(solution.meta.pros, " | ");

    return(
        <ul style={ {listStyleType: "none", paddingLeft: "0"} } >
            {pros.map( pro => (
                <li
                    key={pro}
                    className={`text-3xl text-primary ${fontSecondary.className}`}
                    style={ {paddingLeft: "0"} }>
                    {pro}
                </li>
            ))}
        </ul>
    )
}