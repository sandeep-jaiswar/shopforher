import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useGetCategoryQuery,
  useGetProductQuery,
} from "@/redux/services/cmsApi";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "./product-card";

type SectionProps = {
  sectionName: string;
  data: any;
};

function SectionContainer({ sectionName, data }: SectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{sectionName}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        {data?.map((e: any) => (
          <ProductCard key={e.pname} {...e} />
        ))}
      </CardContent>
    </Card>
  );
}

export default SectionContainer;
