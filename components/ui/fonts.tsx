import { Barlow, Barlow_Condensed } from "next/font/google";

export const fontPrimary = Barlow({
    subsets: ["latin-ext"],
    weight: ["300", "400"],
});

export const fontSecondary = Barlow_Condensed({
    subsets: ["latin-ext"],
    weight: ["400", "600"],
});