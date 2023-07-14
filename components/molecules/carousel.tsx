import Image from "next/image";
import CarouselImg, { CarouselImgType } from "../atoms/carousel-img";

type CarouselType = {
  images: CarouselImgType[];
};

export default function Carousel({ images }: CarouselType) {
  return (
    <div>
      {images.map((e) => (
        <CarouselImg key={e.src} src={e.src} alt={e.alt} />
      ))}
    </div>
  );
}
