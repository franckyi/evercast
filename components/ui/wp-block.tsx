import { Block } from "@/lib/cpt-types";

export default function WpBlock({block}: {block: Block}) {
    return (
        <h1>{block.title.rendered}</h1>
    )
}