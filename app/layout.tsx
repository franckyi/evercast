import type { Metadata } from "next";
import '@/public/css/wp-styles.min.css';
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { fontPrimary } from "@/components/ui/fonts";
import { Main } from "@/components/craft";

import { cn } from "@/lib/utils";
import { getOfficeBySlug, getSolutions } from "@/lib/cpt-service";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Evercast - gwarantowane pasmo dla dowolnej transmisji LIVE, także w jakości HD. Internet mobilny, evercase.",
  description:
    "Dostarczamy gwarantowane pasmo satelitarne na żądanie, realizacja przekazów LIVE z wydarzeń muzycznych, sportowych, promocyjnych. Pasmo satelitarne dla nadawców TV i radiowych.",
  metadataBase: new URL("https://evercast.pl"),
};

// Revalidate content every 10 mins
export const revalidate = 600;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const office = await getOfficeBySlug('polnocna')
  const solutions = await getSolutions();
  const orderedSolutions = solutions.sort((a, b) => a.meta.display_order - b.meta.display_order)

  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen antialiased", fontPrimary.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer office={office} solutions={orderedSolutions} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
