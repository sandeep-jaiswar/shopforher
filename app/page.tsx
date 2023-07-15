"use client"

import SectionContainer from '@/components/atoms/section-container';
import { useGetBrandQuery, useGetCategoryQuery, useGetProductQuery } from '@/redux/services/cmsApi';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetBrandQuery(null);
  if(isLoading || isFetching){
    return null;
  }
  return (
    <>
      <SectionContainer
        sectionName="Top Brands"
        data={data}
      />
      <SectionContainer
        sectionName="Top Category"
        data={data}
      />
    </>
  );
}
