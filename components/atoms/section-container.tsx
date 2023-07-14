import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetCategoryQuery, useGetProductQuery } from "@/redux/services/cmsApi";
import { Skeleton } from "../ui/skeleton";

type SectionProps = {
  sectionName: string;
};

function SectionContainer({ sectionName }: SectionProps) {
  //const { isLoading, isFetching, data = [], error } = useGetCategoryQuery(null);
  // if (isLoading || isFetching) {
  //   return (
  //     <div className="flex space-x-4">
  //       <Skeleton className="h-4 w-[100px]" />
  //       <Skeleton className="h-4 w-[100px]" />
  //       <Skeleton className="h-4 w-[100px]" />
  //     </div>
  //   );
  // }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{sectionName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
}

export default SectionContainer;
