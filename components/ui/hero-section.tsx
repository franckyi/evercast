'use client'
import { Hero } from "@/lib/cpt-types"
import { usePathname } from "next/navigation"
import parse from 'html-react-parser'
import { fontSecondary } from "@/components/ui/fonts";
import { ArrowRightIcon } from '@radix-ui/react-icons'

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

    let bgImage = ""
    if (pathname === '/') {
        bgImage = "bg-hero-home bg-cover bg-no-repeat"
    }

    return (
        <section className={`bg-black dark:bg-gray-900 ${bgImage} text-stone-400`}>
            <div className="mx-auto max-w-5xl p-8 py-16 flex flex-wrap lg:flex-nowrap justify-between">
                <div className="w-2/3">
                    <div className={`text-5xl text-white ${fontSecondary.className}`}>{subtitle}</div>
                    <div className={`mt-4 mb-8 text-5xl text-accent ${fontSecondary.className}`}>{title}</div>
                    <div className="text-md">{desc}</div>
                </div>
                <div className="w-1/3 px-4 py-8 flex flex-col gap-4 text-md border b-2 border-muted rounded-sm">
                    <div className={`text-3xl text-white ${fontSecondary.className}`}>
                        {boxTitle}
                    </div>
                    <p className="pr-4">
                        {boxDesc}
                        <ArrowRightIcon className="w-5 h-5 float-right text-accent" />
                    </p>
                </div>
            </div>
        </section>
    )
}