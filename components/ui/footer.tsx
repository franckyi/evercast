'use client';
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Section, Container } from "@/components/craft";
import LogoWhite from "@/public/logo_white.svg";
import Image from "next/image";
import Link from "next/link";
import { fontSecondary } from "@/components/ui/fonts";
import { Office, Solution } from "@/lib/cpt-types";
import { usePathname } from "next/navigation";

type FooterProps = {
  office: Office
  solutions: Solution[]
}

export default function Footer ({office, solutions}: FooterProps) {
    const pathname = usePathname();
    let isContactPage = false;

    if (pathname === "/kontakt") {
      isContactPage = true;
    }

    return (
      <footer className={`${isContactPage ? "" : "mt-20"} bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary`}>
        <Section>
          <Container
            noBorderBottom
            className={`footer-upper-part flex gap-4 lg:gap-12 flex-wrap text-4xl font-bold ${fontSecondary.className}`}
          >
            <a className="text-white" href={`tel:${office.meta.phone}`}>{office.meta.phone}</a>
            <span>{office.meta.email}</span>
          </Container>
  
          <Container className="footer-middle-part flex lg:px-16 gap-12">
            <div className="flex pt-8 max-w-5xl w-full gap-16 border-t border-muted-foreground">
              <div className="flex flex-col gap-2 text-sm">
                <h5 className={`mb-4 font-bold text-xl ${fontSecondary.className}`}>Oferta</h5>

                <ul className="sm:max-h-[140px] flex flex-wrap flex-col gap-y-2 gap-x-8">
                  {solutions.map((solution: Solution) => (
                      <li key={solution.id}>
                        <Link href={`/rozwiazanie/${solution.slug}`}>{solution.title.rendered}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>

              {/* <div className="flex flex-col gap-2 text-sm">
                <h5 className={`mb-4 font-bold text-xl ${fontSecondary.className}`}>O evercast</h5>
                {Object.entries(contentMenu).map(([key, href]) => (
                  <Link
                    className="hover:underline underline-offset-4"
                    key={href}
                    href={href}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ))}
              </div> */}
            </div>
          </Container>
  
          <Container noBorderTop className="footer-bottom-part not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
            <div className="flex flex-wrap pt-8 max-w-5xl w-full gap-16 justify-between border-t border-muted-foreground">
              <ThemeToggle />
              <p className="text-gray">
                © Evercast 2013 - 2024 Wszsytkie prawa zastrzeżone. Designed by <a href="https://01unit.com">01UNIT</a>
              </p>
              <Image
                src={LogoWhite}
                alt="Logo"
                width={138}
                height={50}
                ></Image>
              </div>
          </Container>
        </Section>
      </footer>
    );
  };