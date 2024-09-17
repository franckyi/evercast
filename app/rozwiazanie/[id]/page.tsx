import Image from "next/image";
import { getGalleries, getHeroes, getSolutionById } from "@/lib/cpt-service";
import { Section } from "@/components/craft";
import HeroSection from "@/components/ui/hero-section";
import { Hero } from "@/lib/cpt-types";
import { Container } from "@/components/craft";
import ImageCarousel from "@/components/ui/image-carousel";
import { fontSecondary } from "@/components/ui/fonts";

export default async function Page({ params }: { params: { id: number } }) {
    const heroes: Hero[] = await getHeroes();
    const solution = await getSolutionById(params.id);
    const galleries = await getGalleries();
    const gallery = galleries.filter(gallery => gallery.meta.link_id === solution.meta.section2_gallery_id)[0];
    const wpGallery = gallery.content.rendered;
    const hero = heroes.filter(hero => hero.status === "publish")[0];
    
    return (
        <Section>
            <HeroSection hero={hero} targetPage="solution" solution={solution} />
            <Container className="mt-20 flex flex-col gap-20">
                <div className="section flex items-end relative -mt-16">
                    <div className="section__text w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section1_desc1}</p>
                        <p className={`text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section1_desc2}</p>
                    </div>
                    <div className="">
                        <Image src={solution.meta.section1_img} width={400} height={415} alt={solution.title.rendered} />
                    </div>
                </div>

                <div className="section flex gap-20">
                    <div className="w-1/2">
                        <ImageCarousel wpGallery={wpGallery} />
                    </div>
                    <div className="section__text w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section2_desc1}</p>
                        <p className="mt-8">{solution.meta.section2_desc2}</p>
                    </div>
                </div>

                <div className="section flex gap-20">
                    <div className="section__text w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section3_desc1}</p>
                        <p className="">{solution.meta.section3_desc2}</p>
                    </div>
                    <Image className="w-1/2" src={solution.meta.section3_img} width={620} height={643} alt={solution.title.rendered} />
                </div>

                <div className="section flex gap-20">
                    <Image src={solution.meta.section4_img} width={620} height={643} alt={solution.title.rendered} />
                    <div className="section__text w-1/2">
                        <p className={`text-3xl text-primary ${fontSecondary.className}`}>{solution.meta.section4_desc1}</p>
                        {solution.meta.section4_desc2 !== "" &&
                            <p className={`text-3xl text-muted-darker ${fontSecondary.className}`}>{solution.meta.section4_desc2}</p>
                        }
                    </div>
                </div>

            </Container>

            {solution.content.rendered}
        </Section>
    );
}