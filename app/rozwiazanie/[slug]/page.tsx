import Image from "next/image";
import { getBlocks, getGalleries, getHeroes, getSolutionBySlug } from "@/lib/cpt-service";
import splitSentences from "@/lib/split-sentences";
import { Section } from "@/components/craft";
import HeroSection from "@/components/ui/hero-section";
import { Block, Hero } from "@/lib/cpt-types";
import { Container } from "@/components/craft";
import ImageCarousel from "@/components/ui/image-carousel";
import { fontSecondary } from "@/components/ui/fonts";
import WpBlock from "@/components/ui/wp-block/wp-block";
import Pros from "@/components/ui/pros";
import UseCases from "@/components/ui/use-cases";

export default async function Page({ params }: { params: { slug: string } }) {
    const targetPage = "solution";
    const heroes: Hero[] = await getHeroes();
    const hero = heroes[0];
    const solution = await getSolutionBySlug(params.slug);

    // const galleries = await getGalleries();
    // const gallery = galleries.filter(gallery => gallery.meta.link_id === solution.meta.section2_gallery_id)[0];
    // const wpGallery = gallery.content.rendered;
    // const wpBlocks: Block[] = await getBlocks(targetPage)
    
    return (
        // <h1>test</h1>
        
            solution.meta &&
            <Section>
            {
                solution.meta && 
                <HeroSection hero={hero} targetPage={targetPage} solution={solution} bg={solution.meta.bg_img} />
            }
            <Container className="mt-20 flex flex-col gap-8 xl:gap-20">
                {
                    solution.meta && <div className="section flex flex-wrap items-end relative">
                        <div className="lg:w-1/2 font-bold">
                            <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section1_desc1}</p>
                            <p className={`text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section1_desc2}</p>
                        </div>
                        <div className="relative z-40">
                            <Image className="lg:relative lg:-top-20" src={solution.meta.section1_img} width={400} height={415} alt={solution.title.rendered} />
                        </div>
                    </div>
                }
            </Container>

            <div className="mt-20 flex flex-col gap-8 xl:gap-20">

                <div className="section lg:relative lg:h-[500px] lg:flex-nowrap lg:gap-20">
                    {
                        solution.meta &&
                        <Container className="lg:absolute lg:z-10 lg:left-0 lg:right-0 mx-auto flex gap-8 lg:gap-20">
                            <div className="lg:w-1/2"></div>
                            <div className="text mt-8 lg:mt-0 flex flex-col lg:gap-8 lg:w-1/2">
                                <p className={`text-3xl text-primary font-bold ${fontSecondary.className}`}>{solution.meta.section2_desc1}</p>
                                <p className="mt-8">{solution.meta.section2_desc2}</p>
                            </div>
                        </Container>
                    }

                    {/* {
                        wpGallery && <div className="lg:relative lg:z-0 w-full lg:flex lg:gap-20 justify-end">
                            <div className="lg:w-1/2 max-w-[710px]">
                                <ImageCarousel wpGallery={wpGallery} />
                            </div>
                            <div className="lg:w-1/2"></div>
                        </div>
                    } */}
                </div>

                {
                    solution.meta &&
                    <div className="section lg:relative lg:h-[500px] lg:flex-nowrap">
                        <Container className="lg:absolute lg:z-10 lg:left-0 lg:right-0 lg:gap-20 mx-auto flex gap-8">
                            <div className="text mt-8 lg:mt-0 flex flex-col lg:gap-8 lg:w-1/2">
                                <p className={`text-3xl text-primary font-bold ${fontSecondary.className}`}>{solution.meta.section3_desc1}</p>
                                <p>{solution.meta.section3_desc2}</p>
                            </div>
                            <div className="lg:w-1/2"></div>
                        </Container>

                        <div className="lg:relative lg:z-0 w-full lg:flex lg:gap-20 lg:justify-start">
                            <div className="lg:w-1/2"></div>
                            <Image className="lg:w-1/2 max-w-[710px] ml-auto lg:ml-0" src={solution.meta.section3_img} width={620} height={643} alt={solution.title.rendered} />
                        </div>
                    </div>
                    }

            </div>

            <Container className="mt-20 flex flex-col gap-8 xl:gap-20">

                {
                    solution.meta &&
                    <div className="section flex lg:flex-nowrap gap-20">
                        <Image className="mx-auto lg:w-full lg:w-1/2" src={solution.meta.section4_img} width={620} height={643} alt={solution.title.rendered} />
                        <div className="flex flex-col gap-8 w-full lg:w-1/2 font-bold">
                            <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section4_desc1}</p>
                            {solution.meta.section4_desc2 !== "" &&
                                <p className={`mt-8 text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section4_desc2}</p>
                            }
                        </div>
                    </div>
                }

                {
                    solution.content.rendered &&
                    <div className="section flex gap-20">
                        {solution.content.rendered}
                    </div>
                }

            </Container>

            {/* pros and use cases */}
            <div className="pros-use-cases-container w-full font-bold bg-gradient-to-b from-[#F9F9F9] to-[white] dark:from-stone-800 dark:to-[black]">
                <Container className="flex lg:px-0 gap-12">
                    <div className="flex flex-wrap md:flex-nowrap pt-8 max-w-5xl w-full gap-20">
                        <div className="pros-use-cases w-full md:w-1/2">
                            <h2 className={`text-accent font-bold ${fontSecondary.className}`}>Zalety</h2>
                            {solution && <Pros solution={solution} />}
                        </div>
                        <div className="pros-use-cases w-full md:w-1/2">
                            <h2 className={`text-accent font-bold ${fontSecondary.className}`}>Przeznaczenie</h2>
                            {solution && <UseCases solution={solution} />}
                        </div>
                    </div>
                </Container>
            </div>

            {solution.content.rendered}

            {/* {
                wpBlocks.map((block, index) => (
                <WpBlock block={block} key={index} />
                ))
            } */}


        </Section>
    );
}