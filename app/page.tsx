// Craft Imports
import { Section, Container } from "@/components/craft";

// Library Imports
import { getHeroes, getBlocks, getSolutions } from "@/lib/cpt-service";

// Components
import HeroSection from "@/components/ui/hero-section";
import FeaturedSolutions from "@/components/ui/solutions/featured-solutions";
import { Hero, Solution, Block } from "@/lib/cpt-types";

// Icons
import WpBlock from "@/components/ui/wp-block";

// This page is using the craft.tsx component and design system
export default async function Home() {
  const heroes: Hero[] = await getHeroes()
  const solutions: Solution[] = await getSolutions()
  const blocks: Block[] = await getBlocks("home")

  return (
    <Section>
      <HeroSection heroes={heroes} />
      <FeaturedSolutions solutions={solutions} />
        {
          blocks.map((block, index) => (
            <WpBlock block={block} key={index} />
          ))
        }
    </Section>
  );
}
