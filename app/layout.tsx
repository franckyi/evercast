import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { fontPrimary, fontSecondary } from "@/components/ui/fonts";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";

import Logo from "@/public/logo.svg";
import LogoWhite from "@/public/logo_white.svg";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { getOfficeBySlug } from "@/lib/cpt-service";
import { Office } from "@/lib/cpt-types";

export const metadata: Metadata = {
  title: "Evercast",
  description:
    "Proponowane przez nas rozwiązania transmisyjne oraz komunikacyjne cechuje nowoczesna technologia, bezpieczeństwo oraz niezawodność",
  metadataBase: new URL("https://evercast.pl"),
};

// Revalidate content every hour
export const revalidate = 3600;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const office = await getOfficeBySlug('polnocna')

  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen antialiased", fontPrimary.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer office={office} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="w-4/6 mx-auto py-12 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">next-wp starter</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={240}
            height={87}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="lg">
                <Link href={href}>
                  <span className={`text-2xl font-bold ${fontSecondary.className}`}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </Link>
              </Button>
            ))}
          </div>
          {/* <MagnifyingGlassIcon className="w-8 h-8" /> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = ({office}: {office: Office}) => {
  
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <Section>
        <Container noBorderBottom className={`flex gap-12 text-4xl font-bold ${fontSecondary.className}`}>
          <a className="text-white" href={`tel:${office.meta.phone}`}>{office.meta.phone}</a>
          <a href={`mailto:${office.meta.email}`}>{office.meta.email}</a>
        </Container>

        <Container className="flex px-16 gap-12">
          <div className="flex pt-8 max-w-5xl w-full gap-16 border-t border-muted-foreground">
            <div className="flex flex-col gap-2 text-sm">
              <h5 className={`mb-4 font-bold text-xl ${fontSecondary.className}`}>Oferta</h5>
              {Object.entries(mainMenu).map(([key, href]) => (
                <Link
                  className="hover:underline underline-offset-4"
                  key={href}
                  href={href}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm">
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
            </div>
          </div>
        </Container>

        <Container noBorderTop className="not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <div className="flex pt-8 max-w-5xl w-full gap-16 justify-between border-t border-muted-foreground">
            <ThemeToggle />
            <p className="text-muted-foreground">
              © Evercast 2013 - 2024 Wszsytkie prawa zastrzeżone. Designed by <a href="https://01unit.com">01UNIT</a>
            </p>
            <Image
              src={LogoWhite}
              alt="Logo"
              className="dark:invert"
              width={138}
              height={50}
              ></Image>
            </div>
        </Container>
      </Section>
    </footer>
  );
};
