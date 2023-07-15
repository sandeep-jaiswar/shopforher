import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

type Image = {
  src: string;
  alt: string;
};

type ProductCardProps = {
  pname: string;
  image: Image[];
};

function ProductCard({ pname, image }: ProductCardProps) {
  return (
    <Card className="w-48 p-1">
      {image.map((e) => (
          <AspectRatio key={pname} ratio={3/4}>
            <Image
              src={e.src || ""}
              alt={pname}
              layout="fill"
            />
          </AspectRatio>
        ))}
    </Card>
  );
}

export default ProductCard;
