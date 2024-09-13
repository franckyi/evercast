import { Hero, Block, Solution, Gallery } from "./cpt-types";

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

export const getBlocks = async (targetPage: string): Promise<Block[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/section", { next: { revalidate: duration } });
    let blocks: Block[] = await res.json();
    blocks = blocks.filter(block => block.status === "publish" && block.meta.target_page.includes(targetPage))
    blocks.sort((a, b) => a.meta.display_order - b.meta.display_order)
    return blocks;
}

export const getGalleryById = async (id: string): Promise<Gallery> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/gallery", { next: { revalidate: duration } });
    const galleries: Gallery[] = await res.json();
    const gallery = galleries.filter(gallery => id === gallery.meta.link_id)[0]

    return gallery;
}
