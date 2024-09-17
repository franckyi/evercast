// Craft Imports
import { Section, Container } from "@/components/craft";

// Library Imports
import { getHeroes, getBlocks, getSolutions } from "@/lib/cpt-service";

// Components
import HeroSection from "@/components/ui/hero-section";
import FeaturedSolution from "@/components/ui/solutions/featured-solution";
import { Hero, Solution, Block } from "@/lib/cpt-types";

// Icons
import WpBlock from "@/components/ui/wp-block";
import RemainingSolutions from "@/components/ui/solutions/remaining-solutions";

// This page is using the craft.tsx component and design system
export default async function Home() {
  const heroes: Hero[] = await getHeroes()
  const solutions: Solution[] = await getSolutions()
  const featuredSolution = solutions.filter(solution => solution.categories.includes(17) && solution.status === "publish")[0]
  const blocks: Block[] = await getBlocks("home")

  return (
    <Section>
      <HeroSection heroes={heroes} />
      <FeaturedSolution featuredSolution={featuredSolution} />
      <RemainingSolutions solutions={solutions} limit={2} />
        {
          blocks.map((block, index) => (
            <WpBlock block={block} key={index} />
          ))
        }
    </Section>
  );
}
