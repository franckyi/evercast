'use client'
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import extractSrcUrls from "@/lib/extract-src-urls";

export default function ImageCarousel({wpGallery}: {wpGallery: string}) {      
    const srcList = extractSrcUrls(wpGallery);

    return (
        <Carousel>
            {srcList?.map((src, index) => (
                <CarouselItem key={index} src={src} />
            ))}
        </Carousel>
    );
}

function CarouselItem(props: { src: string }) {
  return (
    <Paper>
      <Image src={props.src} alt="Norbud" width={800} height={450} />
    </Paper>
  );
}
