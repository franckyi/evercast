'use client'
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import extractSrcUrls from "@/lib/extract-src-urls";

export default function ImageCarousel({wpGallery}: {wpGallery: string}) {      
    const srcList = extractSrcUrls(wpGallery);

    return (
        <Carousel
          animation="slide"
          duration={1000}
          fullHeightHover
          indicatorContainerProps={{
            style: {
                transform: 'translateX(-25px) translateY(-25px)',
                textAlign: 'right',
                position: 'relative',
                zIndex: '1',
            }
          }}
          indicatorIconButtonProps={{
            style: {
                marginRight: '10px',
                padding: '5px',
                width: '15px',
                height: '15px',
                backgroundColor: 'white',
                color: 'white'
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: '#F41010',
                color: '#F41010'
            }
          }}
        >
          {srcList?.map((src, index) => (
            <CarouselItem key={index} src={src} />
          ))}
        </Carousel>
    );
}

function CarouselItem(props: { src: string }) {
  return (
    <Paper>
      <Image src={props.src} alt="Evercast" width={710} height={460} />
    </Paper>
  );
}
