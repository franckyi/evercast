// Craft Imports
import { Section } from "@/components/craft";

// Library Imports
import { getHeroes, getBlocks, getSolutions } from "@/lib/cpt-service";

// Components
import HeroSection from "@/components/ui/hero-section";
import FeaturedSolution from "@/components/ui/solutions/featured-solution";
import { Hero, Solution, Block } from "@/lib/cpt-types";

// Icons
import WpBlock from "@/components/ui/wp-block/wp-block";
import RemainingSolutions from "@/components/ui/solutions/remaining-solutions";

// This page is using the craft.tsx component and design system
export default async function Home() {
  const heroes: Hero[] = await getHeroes()
  const hero = heroes.filter(hero => hero.status === "publish")[0]
  const solutions: Solution[] = await getSolutions()
  const featuredSolution = solutions.filter(solution => solution.categories.includes(17))[0]
  const homeSolutions = solutions.filter(solution => solution.meta.is_displayed_on_home) 
  
  const targetPage = "home"
  const wpBlocks: Block[] = await getBlocks(targetPage)

  return (
    <Section>
      <HeroSection hero={hero} targetPage={targetPage} />
      <FeaturedSolution featuredSolution={featuredSolution} />
      <RemainingSolutions solutions={homeSolutions} />
      {
        wpBlocks.map((block, index) => (
          <WpBlock block={block} key={index} />
        ))
      }
    </Section>
  );
}
