import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { LearningProcess } from "@/components/sections/LearningProcess";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <LearningProcess />
      </main>
    </>
  );
}
