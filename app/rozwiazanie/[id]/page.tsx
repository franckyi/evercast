import Image from "next/image";
import { Section } from "@/components/craft";
import HeroSection from "@/components/ui/hero-section";
import { getHeroes, getSolutionById } from "@/lib/cpt-service";
import { Hero } from "@/lib/cpt-types";
import { Container } from "@/components/craft";

export default async function Page({ params }: { params: { id: number } }) {
    const heroes: Hero[] = await getHeroes();
    const solution = await getSolutionById(params.id);
    const hero = heroes.filter(hero => hero.status === "publish")[0];

    return (
        <Section>
            <HeroSection hero={hero} targetPage="solution" solution={solution} />
            {/* {JSON.stringify(hero)} */}
            {/* params.id: {params.id}
            solution: {JSON.stringify(solution)} */}

            <Container>
                <div className="section1">
                    <div className="flex flex-col">
                        <p>{solution.meta.section1_desc1}</p>
                        <p>{solution.meta.section1_desc2}</p>
                    </div>
                    {/* <Image src={solution.meta.section1_img} alt="">image{solution.meta.section1_desc1}</Image> */}
                </div>

                <div className="section2"></div>
                <div className="section3"></div>
                <div className="section4"></div>
            </Container>

            {solution.content.rendered}
        </Section>
    );
}