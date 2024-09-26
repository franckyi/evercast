import { Hero, Solution } from "@/lib/cpt-types"
import parse from 'html-react-parser'
import { fontSecondary } from "@/components/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

type HeroSectionProps = {
    hero: Hero,
    solution?: Solution,
    targetPage: string,
    bg: string
}

export default function HeroSection({hero, targetPage, solution, bg}: HeroSectionProps) {
    const solutionExcerpt = parse(solution?.excerpt?.rendered ?? "") ?? "";
    const isHome = targetPage === "home";
    const isSolution = targetPage === "solution";
    const bgImage = isHome ? "bg-hero-home bg-cover bg-no-repeat" : "";
    
    return (
        <section
            className={
                `h-[540px] z-20 bg-black dark:bg-gray-900 ${bgImage} text-stone-400
                ${isSolution ? "relative lg:-mb-40" : ""}`
                }
        >
            
            {isSolution &&
                <Image
                    src={bg}
                    className="solution-hero-bg-image absolute max-h-[540px] opacity-15 w-full h-full object-cover"
                    width={1920}
                    height={540}
                    alt=""
                />
            }

            <div
                className={
                    `mx-auto max-w-5xl px-8 py-16 flex flex-wrap items-center gap-8 lg:flex-nowrap justify-between
                    ${isSolution ?  "absolute top-0 left-0 right-0" : ""}`
                    }
            >
                <div className="md:w-2/3">
                    <div className={`text-5xl text-white ${fontSecondary.className}`}>
                        {isHome ? hero.meta.subtitle : solution?.title?.rendered}
                    </div>
                    <div className={`mt-4 mb-8 lg:w-2/3 text-5xl tracking-wide text-accent dark:text-accent ${fontSecondary.className}`}>
                        {isHome ? hero.title.rendered : solution?.meta.short_desc}
                    </div>
                    <div className="w-2/3 text-md">
                        {isHome ? parse(hero.content.rendered) : solutionExcerpt}
                    </div>
                    <Link href="/kontakt" title="kontakt z nami">
                        <Button className="w-[120] mt-8 my-2 lg:my-8 bg-gradient-to-r from-[#E7411B] to-[#B70D18] hover:from-[#B70D18] hover:to-[#B70D18]" size="lg">
                            Kontakt 
                            <Image className="ml-2" src="/chat-white.svg" width={16} height={16} alt="chat icon" />    
                        </Button>
                    </Link>
                </div>

                {isHome &&
                    <div className="announce-container md:w-1/3 px-4 py-8 h-fit flex flex-col justify-center gap-4 text-md border b-2 border-muted rounded-sm">
                        <div className={`text-3xl text-white ${fontSecondary.className}`}>
                            {hero.meta.announce_title}
                        </div>
                        <p className="pr-4">
                            {hero.meta.announce_desc}
                            <Image className="announce-icon float-right" src="/arrow-right-red.svg" width={16} height={16} alt="arrow right icon" />
                        </p>
                    </div>
                }
            </div>
        </section>
    )
}