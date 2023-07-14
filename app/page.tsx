import SectionContainer from '@/components/atoms/section-container';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <SectionContainer
        sectionName="Featured"
      />
    </main>
  );
}
