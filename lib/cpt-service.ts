import { Hero, Block, Solution, Gallery, Office } from "./cpt-types";

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

export const getSolutionById = async (id: number): Promise<Solution> => {
    const res = await fetch(baseUrl + `/wp-json/wp/v2/solution/${id}`, { next: { revalidate: duration } });
    const solution: Solution = await res.json();
    return solution;
}

export const getBlocks = async (targetPage: string): Promise<Block[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/section", { next: { revalidate: duration } });
    let blocks: Block[] = await res.json();
    blocks = blocks.filter(block => block.status === "publish" && block.meta.target_page.includes(targetPage))
    blocks.sort((a, b) => a.meta.display_order - b.meta.display_order)
    return blocks;
}

export const getGalleries = async (): Promise<Gallery[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/gallery", { next: { revalidate: duration } });
    const galleries: Gallery[] = await res.json();
    return galleries;
}

export const getOfficeBySlug = async (slug: string): Promise<Office> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/office", { next: { revalidate: duration } });
    const offices: Office[] = await res.json();
    const office = offices.filter(office => office.slug === slug)[0]
    return office;
}
