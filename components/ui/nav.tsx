'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { mainMenu } from "@/menu.config";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import LogoBlack from "@/public/logo_black.svg";
import LogoWhite from "@/public/logo_white.svg";
import { fontSecondary } from "@/components/ui/fonts";

 export default function Nav ({ className, children, id }: NavProps) {
    const { theme } = useTheme();
    
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
            className="mr-4 md:mr-0 min-w-[120px] hover:opacity-75 transition-all flex gap-2 items-center"
            href="/"
          >
            <h2 className="sr-only">Evercast</h2>
            <Image
              src={theme === 'dark' ? LogoWhite : LogoBlack}
              alt="Logo"
              width={240}
              height={87}
            />
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
            <MobileNav />
          </div>
        </div>
      </nav>
    );
  };