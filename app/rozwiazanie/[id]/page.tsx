import Image from "next/image";
import { getBlocks, getGalleries, getHeroes, getSolutionById } from "@/lib/cpt-service";
import splitSentences from "@/lib/split-sentences";
import { Section } from "@/components/craft";
import HeroSection from "@/components/ui/hero-section";
import { Block, Hero } from "@/lib/cpt-types";
import { Container } from "@/components/craft";
import ImageCarousel from "@/components/ui/image-carousel";
import { fontSecondary } from "@/components/ui/fonts";
import WpBlock from "@/components/ui/wp-block/wp-block";

export default async function Page({ params }: { params: { id: number } }) {
    const heroes: Hero[] = await getHeroes();
    const hero = heroes.filter(hero => hero.status === "publish")[0];
    const solution = await getSolutionById(params.id);
    const galleries = await getGalleries();
    const gallery = galleries.filter(gallery => gallery.meta.link_id === solution.meta.section2_gallery_id)[0];
    const wpGallery = gallery.content.rendered;

    const pros = splitSentences(solution.meta.pros, " | ");
    const useCases = splitSentences(solution.meta.use_cases, " | ");

    const targetPage = "solution";
    const wpBlocks: Block[] = await getBlocks(targetPage)
    
    return (
        <Section>
            <HeroSection hero={hero} targetPage={targetPage} solution={solution} bg={solution.meta.bg_img} />
            <Container className="mt-20 flex flex-col gap-8 xl:gap-20">
                <div className="section flex flex-wrap items-end relative">
                    <div className="lg:w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section1_desc1}</p>
                        <p className={`text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section1_desc2}</p>
                    </div>
                    <div className="relative z-40">
                        <Image src={solution.meta.section1_img} width={400} height={415} alt={solution.title.rendered} />
                    </div>
                </div>

                <div className="section flex lg:flex-nowrap lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <ImageCarousel wpGallery={wpGallery} />
                    </div>
                    <div className="text mt-8 lg:mt-0 flex flex-col gap-8 w-full lg:w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section2_desc1}</p>
                        <p className="mt-8">{solution.meta.section2_desc2}</p>
                    </div>
                </div>

                <div className="section flex lg:flex-nowrap gap-20">
                    <div className="flex flex-col gap-8 w-full lg:w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section3_desc1}</p>
                        <p className="">{solution.meta.section3_desc2}</p>
                    </div>
                    <Image className="w-full lg:w-1/2" src={solution.meta.section3_img} width={620} height={643} alt={solution.title.rendered} />
                </div>

                <div className="section flex lg:flex-nowrap gap-20">
                    <Image className="w-full lg:w-1/2" src={solution.meta.section4_img} width={620} height={643} alt={solution.title.rendered} />
                    <div className="flex flex-col gap-8 w-full lg:w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section4_desc1}</p>
                        {solution.meta.section4_desc2 !== "" &&
                            <p className={`mt-8 text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section4_desc2}</p>
                        }
                    </div>
                </div>

                <div className="section flex gap-20">
                    {solution.content.rendered}
                </div>

            </Container>

            <div className="pros-use-cases-container w-full light:bg-gradient-to-b from-[#F9F9F9] to-[white] dark:bg-stone-800">
                <Container className="flex px-16 gap-12">
                    <div className="flex flex-wrap md:flex-nowrap pt-8 max-w-5xl w-full gap-20">
                        <div className="pros-use-cases w-full md:w-1/2">
                            <h2 className={`text-accent font-bold ${fontSecondary.className}`}>Zalety</h2>
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
                        </div>
                        <div className="pros-use-cases w-full md:w-1/2">
                            <h2 className={`text-accent font-bold ${fontSecondary.className}`}>Przeznaczenie</h2>
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
                        </div>
                    </div>
                </Container>
            </div>

            {solution.content.rendered}

            {
                wpBlocks.map((block, index) => (
                <WpBlock block={block} key={index} />
                ))
            }


        </Section>
    );
}