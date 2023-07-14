import Image from "next/image";

export type CarouselImgType = {
  src: string;
  alt: string;
};

export default function CarouselImg({ src, alt }: CarouselImgType) {
  return <Image src={src} alt={alt} />;
}
