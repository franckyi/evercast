'use client'
import { Hero } from "@/lib/cpt-types"
import { usePathname } from "next/navigation"
import parse from 'html-react-parser'

type HeroSectionProps = {
    heroes: Hero[]
}

export default function HeroSection(props: HeroSectionProps) {
    let hero = props.heroes[0]
    const title = hero.title.rendered
    const subtitle = hero.meta.subtitle
    const desc = parse(hero.content.rendered)
    const boxTitle = hero.meta.announce_title
    const boxDesc = hero.meta.announce_desc
    const pathname = usePathname()

    let bg = ""
    if (pathname === '/') {
        bg = "bg-hero-home"
    }
        
    return (
        <section className={`bg-black dark:bg-gray-900 ${bg}`}>
            <div className="mx-auto flex flex-wrap justify-between max-w-5xl p-6 sm:p-8 text-white">
                <div className="">
                    <div className="">{subtitle}</div>
                    <div className="text-primary">{title}</div>
                    {desc}
                </div>
                <div className="border b-2">{boxTitle}
                    <p>{boxDesc}</p>
                </div>
            </div>
        </section>
    )
}