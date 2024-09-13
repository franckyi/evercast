import { Hero, Block, Solution } from "./cpt-types";

const baseUrl = process.env.WORDPRESS_URL;
const duration = 3600 * 6

export const getHeroes = async (): Promise<Hero[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/hero", { next: { revalidate: duration } });
    const heroes: Hero[] = await res.json();
    return heroes;
}

export const getSolutions = async (): Promise<Solution[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/solution", { next: { revalidate: duration } });
    const solutions: Solution[] = await res.json();
    return solutions;
}

// TODO: FILTER BY target_page then SORT by display_order
export const getBlocks = async (targetPage: string): Promise<Block[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/section", { next: { revalidate: duration } });
    let block: Block[] = await res.json();
    let blocks = block.filter(block => block.status === "publish" && block.meta.target_page.includes(targetPage))
    blocks.sort((a, b) => a.meta.display_order - b.meta.display_order)
    return block;
}