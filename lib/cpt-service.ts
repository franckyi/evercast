import { Hero, Block, Solution, Gallery, Office } from "./cpt-types";

const baseUrl = process.env.WORDPRESS_URL;
const duration = 600; // 10 minutes
const revalidation = { next: { revalidate: duration } };

export const getHeroes = async (): Promise<Hero[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/hero", revalidation);
    let heroes: Hero[] = await res.json();
    heroes = heroes.filter(hero => hero.status === "publish");
    return heroes;
}

export const getSolutions = async (): Promise<Solution[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/solution", revalidation);
    let solutions: Solution[] = await res.json();
    solutions = solutions.filter(solution => solution.status === "publish")
    return solutions;
}

export const getSolutionById = async (id: number): Promise<Solution> => {
    const res = await fetch(baseUrl + `/wp-json/wp/v2/solution/${id}`, revalidation);
    const solution: Solution = await res.json();
    return solution;
}

export const getSolutionBySlug = async (slug: string): Promise<Solution> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/solution", revalidation);
    const solutions: Solution[] = await res.json();
    const solution = solutions.filter(solution => solution.slug === slug)[0]
    return solution;
}

export const getBlocks = async (targetPage: string): Promise<Block[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/section", revalidation);
    let blocks: Block[] = await res.json();
    blocks = blocks.filter(block => block.status === "publish" && block.meta.target_page.includes(targetPage))
    blocks.sort((a, b) => a.meta.display_order - b.meta.display_order)
    return blocks;
}

export const getGalleries = async (): Promise<Gallery[]> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/gallery", revalidation);
    const galleries: Gallery[] = await res.json();
    return galleries;
}

export const getGalleryBySolution = async (id: string): Promise<Gallery> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/gallery", revalidation);
    let galleries: Gallery[] = await res.json();
    const gallery = galleries.filter(gallery => gallery.meta.link_id === id)[0]
    return gallery;
}

export const getGalleryById = async (id: number): Promise<Gallery> => {
    const res = await fetch(baseUrl + `/wp-json/wp/v2/gallery/${id}`, revalidation);
    const gallery: Gallery = await res.json();
    return gallery;
}

export const getOfficeBySlug = async (slug: string): Promise<Office> => {
    const res = await fetch(baseUrl + "/wp-json/wp/v2/office", revalidation);
    const offices: Office[] = await res.json();
    const office = offices.filter(office => office.slug === slug)[0]
    return office;
}
