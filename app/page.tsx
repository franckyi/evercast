// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Library Imports
import { getHeroes, getSolutions } from "@/lib/cpt-service";

// Components
import Link from "next/link";
import HeroSection from "@/components/ui/hero-section";
import FeaturedSolutions from "@/components/ui/solutions/featured-solutions";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import { Hero, Solution } from "@/lib/cpt-types";

// This page is using the craft.tsx component and design system
export default async function Home() {
  const heroes: Hero[] = await getHeroes()
  const solutions: Solution[] = await getSolutions()

  return (
    <Section>
      <HeroSection heroes={heroes} />
      <FeaturedSolutions solutions={solutions} />
      <Container>
        boxed sections here
      </Container>
    </Section>
  );
}
