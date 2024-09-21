'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Block } from "@/lib/cpt-types";
import { usePathname } from "next/navigation";

export default function WpBlockButton({block}: {block: Block}) {
    const pathname = usePathname()
    const rootPath = "/"
    const ofertaPath = "/oferta"
    const kontaktPath = "/kontakt"
    let targetHref = ""
    let iconFileName = ""

    if (pathname === rootPath) {
        targetHref = ofertaPath
        iconFileName = "arrow-right-black.svg"
    }
    
    else if (pathname.includes("/rozwiazanie/")) {
        targetHref = kontaktPath
        iconFileName = "chat-red.svg"
    }

    return(
        <Link href={targetHref} className="mt-8 md:mt-0">
            <Button className="bg-transparent hover:bg-stone-900 dark:hover:bg-white dark:text-white dark:hover:text-black" size="lg" variant="outline">
                {block.meta.button_text}
                <Image className="ml-2" src={`/${iconFileName}`} width={16} height={16} alt="" />
            </Button>
        </Link>
    )
}