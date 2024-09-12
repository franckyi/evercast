import { Hero, Solution } from "./cpt-types";

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